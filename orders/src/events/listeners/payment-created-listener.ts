import {
  Subjects,
  Listener,
  PaymentCreatedEvent,
  OrderStatus,
} from '@mbhadeshiya/common';
import { Message } from 'node-nats-streaming';
import { queueGroupName } from './queue-group-name';
import { Order } from '../../models/order';
import { OrderCompletePublisher } from '../publishers/order-complete-publisher';

export class PaymentCreatedListener extends Listener<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: PaymentCreatedEvent['data'], msg: Message) {
    const order = await Order.findById(data.orderId);

    if (!order) {
      throw new Error('Order not found');
    }

    order.set({
      status: OrderStatus.Complete,
    });
    await order.save();
    new OrderCompletePublisher(this.client).publish({
      id: order.id,
      userId: order.userId,
      userEmail: data.userEmail,
      ticket: {
        id: order.ticket.id,
        price: order.ticket.price,
        title: order.ticket.title
      },
    });

    msg.ack();
  }
}

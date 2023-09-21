import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import {
  OrderCompleteEvent,
  Subjects,
  Listener,
} from "@mbhadeshiya/common";
import { sendTicket } from "../../services/sendTicket";

export class OrderCompleteListener extends Listener<OrderCompleteEvent> {
  subject: Subjects.OrderComplete = Subjects.OrderComplete;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCompleteEvent["data"], msg: Message) {
    console.log("Order completed ::::" + data.id);
    console.log(data);

    // TODO: need test email for sending mails 

    // sendTicket(
    //   data.userEmail,
    //   "Ticket is Booked",
    //   `<h1>Hello,</h1><p>Your Ticket for <b>${data.ticketTitle}</b> with TicketId: ${data.ticketId} is booked with OrderId: ${data.id}</br> Price: <b>${data.ticketPrice}</b> </p>`
    // );

    msg.ack();
  }
}
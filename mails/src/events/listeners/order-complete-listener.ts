import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import {
  OrderCompleteEvent,
  Subjects,
  Listener,
} from "@mbhadeshiya/common";

export class OrderCompleteListener extends Listener<OrderCompleteEvent> {
  subject: Subjects.OrderComplete = Subjects.OrderComplete;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCompleteEvent["data"], msg: Message) {
    console.log("Order completed ::::" + data.id);
    console.log(JSON.stringify(data));

    msg.ack();
  }
}
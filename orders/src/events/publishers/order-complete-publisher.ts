import { Publisher, OrderCompleteEvent, Subjects } from "@mbhadeshiya/common";

export class OrderCompletePublisher extends Publisher<OrderCompleteEvent> {
  subject: Subjects.OrderComplete = Subjects.OrderComplete;
}

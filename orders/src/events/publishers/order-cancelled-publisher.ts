import { Subjects, Publisher, OrderCancelledEvent } from "@mbhadeshiya/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

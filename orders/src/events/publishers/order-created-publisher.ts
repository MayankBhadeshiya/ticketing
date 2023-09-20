import { Publisher, OrderCreatedEvent, Subjects } from "@mbhadeshiya/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

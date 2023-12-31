import { Subjects, Publisher, PaymentCreatedEvent } from "@mbhadeshiya/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}

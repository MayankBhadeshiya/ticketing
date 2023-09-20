import { Publisher, Subjects, TicketCreatedEvent } from "@mbhadeshiya/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

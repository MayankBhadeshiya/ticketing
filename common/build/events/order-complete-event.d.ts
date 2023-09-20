import { Subjects } from "./subjects";
export interface OrderCompleteEvent {
    subject: Subjects.OrderComplete;
    data: {
        id: string;
        userId: string;
        userEmail: string;
        ticketId: string;
        ticketTitle: string;
        ticketPrice: number;
    };
}

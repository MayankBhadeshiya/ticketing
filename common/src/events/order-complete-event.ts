import { Subjects } from "./subjects";

export interface OrderCompleteEvent {
  subject: Subjects.OrderComplete;
  data: {
    id: string;
    userId: string;
    userEmail: string;
    ticket: {
      id: string;
      title: string;
      price: number;
    };
  };
}

export interface Reservation {
  id: number;
  date: string; // Using string to handle LocalDateTime format from the backend
  user: {
    id: number;
    username: string; // Assuming you want to display username
  };
  event: {
    id: number;
    name: string; // Assuming you want to display event name
  };
}

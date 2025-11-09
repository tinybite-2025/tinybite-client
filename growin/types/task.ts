export interface newTask {
  title: string;
  taskType: "IN_EVENT" | "SCHEDULED" | "UNSCHEDULED";
  repeatType: "DAY" | "WEEK" | "MONTH" | "YEAR" | null;
  startDate: string | null;
  endDate: string | null;
  eventId: number | null;
}

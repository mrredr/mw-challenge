import { EventType } from "../types/event";

const COLOR = {
  green: "#83f286",
  red: "#FF7276",
  yellow: "#fdf4a3",
};

export const STATUS_COLOR: Record<EventType["status"], string> = {
  done: COLOR.green,
  'in-progress': COLOR.yellow,
  pending: COLOR.red,
};
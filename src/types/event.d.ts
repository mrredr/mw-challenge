export interface EventType {
  id: number;
  title: string;
  start_time: string;
  end_time: string;
  address: string;
  status: 'done' | 'in-progress' | 'pending';
}

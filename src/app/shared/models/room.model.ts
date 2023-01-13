export type Room = {
  id?: string;
  members: string[];
  name: string;
}

export type Message = {
  id?: string;
  sender: string;
  text: string;
  date?: number;
}

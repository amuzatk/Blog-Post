export type User = {
  id: number
  name: string
}

export interface BlogPost {
  id: number;
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date;
}

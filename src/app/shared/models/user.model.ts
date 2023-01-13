import { User as FireUser } from '@angular/fire/auth';

export type User = {
  id: string;
  credential: FireUser;
};

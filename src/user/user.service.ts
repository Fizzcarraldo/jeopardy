import { Injectable } from '@nestjs/common';
import { UserData } from './user.interface';

@Injectable()
export class UserService {
  private users: UserData[] = [{
    id: 1,
    username: 'Mjau',
    score: 17
  }, 
  {
    id: 2,
    username: 'Michi',
    score: 17
  },
  {
    id: 3,
    username: 'Flo',
    score: 1000
  }]

  public findUsers(): UserData[] {
    return this.users;
  }

  public createUser(username: string): UserData {
    const newId = this.users.length + 1;
    this.users = [...this.users, {username, id: newId, score: 0}];
    return this.users.find(user => user.id === newId);
  }
}

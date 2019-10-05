import { Args, Query, Resolver, Mutation, Subscription } from '@nestjs/graphql';
import { UserData } from './user.interface';
import { UserService } from './user.service';

import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();
@Resolver('User')
export class UserResolver {

  constructor(private readonly userService: UserService) {
    pubsub.publish('commentAdded', {
      newUser: {
        username: 'flo',
        id: 1,
        score: 13
      }
    });
  }

  @Query()
  getUsers(): UserData[] {
    return this.userService.findUsers();
  }

  @Mutation()
  createUser(
    @Args('username')
    username: string
  ): UserData {

    return this.userService.createUser(username);
  }

  @Subscription()
  newUser() {
    console.log(pubsub);
    subscribe: () => pubsub.asyncIterator('commentAdded');
  }
}

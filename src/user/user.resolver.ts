import { Args, Query, Resolver, Mutation, Subscription } from '@nestjs/graphql';
import { UserData } from './user.interface';
import { UserService } from './user.service';

import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();
@Resolver('User')
export class UserResolver {

  constructor(private readonly userService: UserService) { }

  @Query()
  getUsers(): UserData[] {
    return this.userService.findUsers();
  }

  @Query()
  findUserById(@Args('id') id: number) {
    console.log("foo");
    const newUser = this.userService.findUserById(id);
    pubsub.publish('newUser', {newUser});
    return newUser;
  }

  @Mutation()
  createUser(
    @Args('username')
    username: string
  ): UserData {
    const newUser = this.userService.createUser(username);
    pubsub.publish('newUser', {newUser});
    return newUser;
  }

  @Subscription()
  newUser() {
    return pubsub.asyncIterator('newUser');
  }
}

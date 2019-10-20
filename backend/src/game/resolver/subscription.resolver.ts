import { Args, Resolver, Subscription } from '@nestjs/graphql';
import { GameService } from '../service/game.service';


@Resolver('Subscription')
export class SubscriptionResolver {

  constructor(private readonly gameService: GameService) { }

  @Subscription()
  gameSubscription(
    @Args('gameId') gameId: number,
  ) {
    return this.gameService.gameSubscription(gameId);
  }

}

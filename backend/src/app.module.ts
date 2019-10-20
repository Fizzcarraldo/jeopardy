import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { SubscriptionResolver } from './game/resolver/subscription.resolver';
import { BuzzerResolver } from './game/resolver/buzzer.resolver';
import { StageResolver } from './game/resolver/stage.resolver';
import { HostResolver } from './game/resolver/host.resolver';
import { PlayerService } from './game/service/player.service';
import { QuizService } from './game/service/quiz.service';
import { GameService } from './game/service/game.service';
import { StateService } from './game/service/state.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
    SubscriptionResolver,
    BuzzerResolver,
    StageResolver,
    HostResolver,
    PlayerService,
    QuizService,
    GameService,
    StateService
  ],
})
export class AppModule {}

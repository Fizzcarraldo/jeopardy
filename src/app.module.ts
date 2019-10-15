import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { GameResolver } from './game/game.resolver';
import { GameService } from './game/game.service';
import { ControlService } from './game/control/control.service';
import { ViewService } from './game/view/view.service';

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
    GameResolver,
    GameService,
    ControlService,
    ViewService
  ],
})
export class AppModule {}

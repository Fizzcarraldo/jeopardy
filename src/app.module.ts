import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';
import { QuizResolver } from './quiz/quiz.resolver';
import { QuizService } from './quiz/quiz.service';
import { PubSub } from 'graphql-subscriptions';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver, UserResolver, UserService, QuizResolver, QuizService,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    }
    
  ],
})
export class AppModule {}

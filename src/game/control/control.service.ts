import { Injectable } from '@nestjs/common';

@Injectable()
export class ControlService {

public pushBuzzer(gameId: number, playerId: number): boolean {
    const game = this.getGame(gameId);
    return game.state === "Buzzer";
    }

    private updateClient(id: number, event: string): void {
    const subscriptionId = 'game-' + id;
    pubsub.publish(subscriptionId, {gameSubscription: event});
    }


    
  public createPlayer(gameId, name): Player {
    const game = this.games.find( game => {
      return game.id === gameId;
    })
    const newPlayer: Player = {
      name,
      id: game.players.length + 1,
      score: 0
    }
    game.players.push(newPlayer);
    this.updateClient(game.id, 'new Player');
    return newPlayer;
  }

  private getQuestion(gameId, categoryName, questionId) {
    const game = this.getGame(gameId);
    const category = game.quiz.categories.find(category => {
      return category.name === categoryName;
    })
    return category.questions.find( question => {
      return question.id === questionId;
    });
  }
}




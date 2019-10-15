import { Injectable } from '@nestjs/common';

@Injectable()
export class ViewService {

    public getQuiz(gameId: number): Quiz {
        return this.getGame(gameId).quiz;
      }
    

}

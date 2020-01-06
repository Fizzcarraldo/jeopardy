import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HostService } from '../host.service';

import { Game, State, SelectedQuestion, VerifyOption, Stage } from 'src/app/shared/game.model';

@Component({
  selector: 'app-host-main',
  templateUrl: './host-main.component.html',
  styleUrls: ['./host-main.component.scss']
})
export class HostMainComponent implements OnInit {

  public gameId: number;
  public stage: Stage;
  public gameState: typeof State =  State;

  constructor(
    private activatedRoute: ActivatedRoute,
    private hostService: HostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolverData => {
      console.log(resolverData);
      if (!resolverData.stage.data.getStage) {
        this.router.navigate(['index']);
      }
      this.stage = resolverData.stage.data.getStage;
    });
    this.gameId = +this.activatedRoute.snapshot.paramMap.get('gameId');
  }

  public startGame() {
    this.hostService.hostStartGame(this.gameId);
  }

  public selectQuestion(selectedQuestion: SelectedQuestion) {
    this.hostService.hostSelectQuestion(this.gameId, selectedQuestion.category, selectedQuestion.value)
  }

  public verifyAnswer(verifyOption: VerifyOption) {
    this.hostService.verifyAnswer(this.gameId, verifyOption);
  }

  public skipAnswer() {
    this.hostService.skipAnswer(this.gameId);
  }
}

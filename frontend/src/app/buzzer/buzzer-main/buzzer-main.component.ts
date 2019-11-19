import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BuzzerService } from '../buzzer.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Player, Buzzer } from 'src/app/shared/game.model';

@Component({
  selector: 'app-buzzer-main',
  templateUrl: './buzzer-main.component.html',
  styleUrls: ['./buzzer-main.component.scss']
})
export class BuzzerMainComponent implements OnInit, OnDestroy {

  public buzzer: Buzzer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private buzzerService: BuzzerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolverData => {
      if (!resolverData.game.data.getBuzzer) {
        this.router.navigate(['buzzer/error']);
      }
      console.log(resolverData);
      this.buzzer = resolverData.game.data.getBuzzer;
    });
  }

  public pushBuzzer() {
    this.buzzerService.pushBuzzer(this.buzzer.gameId, this.buzzer.playerId);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';  
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit, OnDestroy {

  public buzzerSigninUrl: string;
  public hostUrl: string;

  private pushBuzzerSubscription: Subscription;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.pushBuzzerSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      const urlOrigin: string = window.location.origin;
      const buzzerSignin: string = '/buzzer/signin/'
      this.buzzerSigninUrl = urlOrigin + buzzerSignin + params.gameId;
      const host: string = '/host/'
      this.hostUrl = urlOrigin + host + params.gameId;
    });
  }

  ngOnDestroy() {
    if (this.pushBuzzerSubscription) {
      this.pushBuzzerSubscription.unsubscribe();
    }
  }

}

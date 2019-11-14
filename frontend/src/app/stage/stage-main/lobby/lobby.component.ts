import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';  

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  public buzzerSigninUrl: string; 

  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      const urlOrigin: string = window.location.origin;
      const buzzerSignin: string = '/buzzer/signin/'
      this.buzzerSigninUrl = urlOrigin + buzzerSignin + params.gameId;
    });
  }

  ngOnInit() { }

}

import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { Game } from '../types';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  public game: Game; 

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.game.subscribe( game => {
      this.game = game;
    })

  }

}

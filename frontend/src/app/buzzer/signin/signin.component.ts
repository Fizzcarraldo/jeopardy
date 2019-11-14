import { Component, OnInit } from '@angular/core';
import { BuzzerService } from '../buzzer.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public gameId: number;

  constructor(
    public buzzerService: BuzzerService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params.gameId;
    });
  }

}

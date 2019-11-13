import { Component, OnInit } from '@angular/core';
import { StageService } from '../stage.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  constructor(
    private stageService: StageService
  ) { }
}

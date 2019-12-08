import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  @Input() public displayName: string;

  constructor() { }

  ngOnInit() {
  }

}

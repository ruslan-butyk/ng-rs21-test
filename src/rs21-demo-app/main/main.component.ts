import { Component, OnInit } from '@angular/core';

import { TwitterRestService } from './service/twitter-rest.service';

@Component({
  selector: 'rs21-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private twitter: TwitterRestService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preplay',
  templateUrl: './preplay.component.html',
  styleUrls: ['./preplay.component.scss']
})
export class PreplayComponent implements OnInit {

  tiempo = 3;

  constructor() { }

  ngOnInit(): void {
    this.time();
  }

  time() {
    let intervalId = setInterval(() => {
      this.tiempo = this.tiempo - 1;
      console.log(this.tiempo)
      if (this.tiempo === 0) clearInterval(intervalId)
    }, 1000)
  }
}

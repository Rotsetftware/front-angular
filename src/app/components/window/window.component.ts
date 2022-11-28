import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {

  xdxdxd: any;

  constructor(private CS: CookieService) { }

  ngOnInit(): void {
    const cocsR = this.CS.get('rank');
      const JSobjER = JSON.parse(cocsR);
      this.xdxdxd = JSobjER;
      console.log(this.xdxdxd);
      // console.log(cocsR);
  }

}

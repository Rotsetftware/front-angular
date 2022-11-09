import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  room: any;

  constructor(private AR: ActivatedRoute, private CS: CookieService) { }

  ngOnInit(): void {
    this.room = this.AR.snapshot.paramMap.get('room');
    console.log(this.room);
    // this.CS.delete('room');
    // this.CS.set('room',this.room);
  }

}

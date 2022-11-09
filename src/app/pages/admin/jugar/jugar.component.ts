import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SocketService } from 'src/app/providers/socket.service';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.scss']
})
export class JugarComponent implements OnInit{

  room: any;

  constructor(private AR: ActivatedRoute, private CS: CookieService, private SC: SocketService) {}

  ngOnInit(): void {
    this.room = this.AR.snapshot.paramMap.get('room');
    console.log(this.room);
  }

}
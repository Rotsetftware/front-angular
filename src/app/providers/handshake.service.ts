import { Socket } from 'ngx-socket-io';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HandshakeService extends Socket{

  @Output() outEven: EventEmitter<any> = new EventEmitter();
  constructor(
    public cookieService: CookieService,

  ) {
    super({
      url: 'http://localhost:5000',
      options: {
        query: {
          nameRooms: cookieService.get('room'),
          id: '1'
        },
      }
    })
    this.listen();
  }

  listen = () => {
    this.ioSocket.on('hand', (res: any) => this.outEven.emit(res));   

  }

  emitEvent = (payload = {}) => {
    this.ioSocket.emit('hand', payload)

  }
}

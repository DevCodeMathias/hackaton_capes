import { Controller, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { Observable } from 'rxjs';

@Controller()
export class NotificationPublisherController {
  constructor(
    @Inject('NOTIFY_SERVICE') private readonly client: ClientProxy, 
  ) {}

 
  sendNotification(projeto: any): Observable<any> {
    return this.client.emit('notificar', projeto);  
  }
}

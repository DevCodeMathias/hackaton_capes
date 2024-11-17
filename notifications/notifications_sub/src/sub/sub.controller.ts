import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class NotificationController{
    @MessagePattern('notificar')  
    handleNotification(projeto:string ) {
      console.log('Notificação recebida:', projeto);
    }
}
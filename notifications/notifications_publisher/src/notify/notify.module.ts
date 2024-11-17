import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { notifyService } from "./notify.service";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
    imports:[ClientsModule.register([{
        name:'notify',
        transport:Transport.RMQ,
        options:{
            urls:['amqps://kgqufpsj:e7N8fB1YFTP5UNpU8Y_Gy3xmIEUr434n@crow.rmq.cloudamqp.com/kgqufpsj'],
            queue:'notify',
            queueOptions:{
                durable:false
            }
        }
    }]),
    ScheduleModule.forRoot(),
],
         
    controllers:[],
    providers:[notifyService]
})
export class NotificationPublisherModule{}
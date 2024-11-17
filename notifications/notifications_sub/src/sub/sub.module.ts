import { Controller, Module } from "@nestjs/common";
import { NotificationController } from "./sub.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";


@Module({
    imports:[
         // Registrando o microserviço com o RabbitMQ
    ClientsModule.register([
        {
          name: 'notify_service',
          transport: Transport.RMQ, 
          options: {
            urls: ['amqps://kgqufpsj:e7N8fB1YFTP5UNpU8Y_Gy3xmIEUr434n@crow.rmq.cloudamqp.com/kgqufpsj'], 
            queue: 'notify', 
            queueOptions: {
              durable: false, 
            },
          },
        },
      ]),
    ],
    providers:[],
    controllers:[NotificationController],
    exports:[]
})  
export class subModule{}
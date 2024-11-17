import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { subModule } from './sub/sub.module';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(subModule, { 
    transport: Transport.RMQ, 
    options: {
      urls: ['amqps://kgqufpsj:e7N8fB1YFTP5UNpU8Y_Gy3xmIEUr434n@crow.rmq.cloudamqp.com/kgqufpsj'], 
      queue: 'notify',  
      queueOptions: {
        durable: false,  
      },
    },
  });

  await app.listen();  
}

bootstrap();

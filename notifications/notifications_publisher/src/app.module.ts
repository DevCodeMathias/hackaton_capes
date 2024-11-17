import { Module } from '@nestjs/common';
import { NotificationPublisherModule } from './notify/notify.module';

@Module({
  imports: [NotificationPublisherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

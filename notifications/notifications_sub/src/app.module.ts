import { Module } from '@nestjs/common';
import { subModule } from './sub/sub.module';


@Module({
  imports: [],
  controllers: [],
  providers: [subModule],
})
export class AppModule {}

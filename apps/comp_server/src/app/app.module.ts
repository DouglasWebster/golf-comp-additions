import { Module } from '@nestjs/common';
import { ServerFeatureCompModule } from '@comp/server/feature-comp';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ServerFeatureCompModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ServerFeatureCompController } from './server-feature-comp.controller';
import { ServerFeatureCompService } from './server-feature-comp.service';

@Module({
  controllers: [ServerFeatureCompController],
  providers: [ServerFeatureCompService],
  exports: [ServerFeatureCompService],
})
export class ServerFeatureCompModule {}

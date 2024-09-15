import { Test } from '@nestjs/testing';
import { ServerFeatureCompController } from './server-feature-comp.controller';
import { ServerFeatureCompService } from './server-feature-comp.service';

describe('ServerFeatureCompController', () => {
  let controller: ServerFeatureCompController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureCompService],
      controllers: [ServerFeatureCompController],
    }).compile();

    controller = module.get(ServerFeatureCompController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});

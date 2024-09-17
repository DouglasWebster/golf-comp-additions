import { Test } from '@nestjs/testing';
import { ServerFeatureCompService } from './server-feature-comp.service';

describe('ServerFeatureCompService', () => {
  let service: ServerFeatureCompService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureCompService],
    }).compile();

    service = module.get(ServerFeatureCompService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});

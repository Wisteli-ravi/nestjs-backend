import { Test, TestingModule } from '@nestjs/testing';
import { AoiController } from './aoi.controller';

describe('AoiController', () => {
  let controller: AoiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AoiController],
    }).compile();

    controller = module.get<AoiController>(AoiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

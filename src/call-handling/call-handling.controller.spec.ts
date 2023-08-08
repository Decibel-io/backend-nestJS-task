import { Test, TestingModule } from '@nestjs/testing';
import { CallHandlingController } from './call-handling.controller';

describe('CallHandlingController', () => {
  let controller: CallHandlingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CallHandlingController],
    }).compile();

    controller = module.get<CallHandlingController>(CallHandlingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

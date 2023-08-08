import { Module } from '@nestjs/common';
import { CallHandlingController } from './call-handling.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TwilioService } from 'src/services/twilio/twilio.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DatabaseModule, ConfigModule],
  controllers: [CallHandlingController],
  providers: [TwilioService],
})
export class CallHandlingModule {}

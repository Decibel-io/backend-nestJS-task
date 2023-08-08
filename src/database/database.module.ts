import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VoiceMail, VoiceMailSchema } from 'src/models/VoiceMail';
import { ConfigModule } from '@nestjs/config';
import { CallLog, CallLogSchema } from 'src/models/CallLog';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: VoiceMail.name,
        schema: VoiceMailSchema,
      },
      {
        name: CallLog.name,
        schema: CallLogSchema,
      },
    ]),
    ConfigModule,
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}

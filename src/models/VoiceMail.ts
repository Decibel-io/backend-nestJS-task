import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VoiceMailDocument = HydratedDocument<VoiceMail>;

@Schema()
export class VoiceMail {
  @Prop()
  caller: string;

  @Prop()
  url: string;

  @Prop()
  transcript: string;

  @Prop()
  createdAt: Date;
}

export const VoiceMailSchema = SchemaFactory.createForClass(VoiceMail);

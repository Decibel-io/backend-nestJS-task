import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CallLogDocument = HydratedDocument<CallLog>;

@Schema()
export class CallLog {
  @Prop()
  AccountSid: string;

  @Prop()
  ApiVersion: string;

  @Prop()
  CallSid: string;

  @Prop()
  CallStatus: string;

  @Prop()
  Called: string;

  @Prop()
  CalledCity: string;

  @Prop()
  CalledCountry: string;

  @Prop()
  CalledState: string;

  @Prop()
  CalledZip: string;

  @Prop()
  Caller: string;

  @Prop()
  CallerCity: string;

  @Prop()
  CallerCountry: string;

  @Prop()
  CallerState: string;

  @Prop()
  CallerZip: string;

  @Prop()
  DialBridged: string;

  @Prop()
  DialCallDuration: string;

  @Prop()
  DialCallSid: string;

  @Prop()
  DialCallStatus: string;

  @Prop()
  Direction: string;

  @Prop()
  From: string;

  @Prop()
  FromCity: string;

  @Prop()
  FromCountry: string;

  @Prop()
  FromState: string;

  @Prop()
  FromZip: string;

  @Prop()
  To: string;

  @Prop()
  ToCity: string;

  @Prop()
  ToCountry: string;

  @Prop()
  ToState: string;

  @Prop()
  ToZip: string;

  @Prop()
  CreatedAt: Date;
}

export const CallLogSchema = SchemaFactory.createForClass(CallLog);

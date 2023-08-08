import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VoiceMail } from 'src/models/VoiceMail';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';
import { CallLog } from 'src/models/CallLog';

@Injectable()
export class DatabaseService {
  private supabase: SupabaseClient;

  constructor(
    @InjectModel(VoiceMail.name) private voicemailModel: Model<VoiceMail>,
    @InjectModel(CallLog.name) private callLogModel: Model<CallLog>,
    private readonly configService: ConfigService,
  ) {
    this.supabase = createClient(
      this.configService.get('SUPABASE_URL'),
      this.configService.get('SUPABASE_API_KEY'),
      {
        auth: { persistSession: false },
      },
    );
  }

  async saveVoicemail(voicemailDetails: VoiceMail) {
    const voicemail = new this.voicemailModel(voicemailDetails);
    await voicemail.save();

    await this.supabase.from('voicemails').insert([voicemailDetails]);
    return voicemail;
  }

  async saveCallLog(payload: CallLog) {
    const filter = { CallSid: payload.CallSid };
    const voicemailAlreadyExists = await this.callLogModel.findOne(filter);
    if (voicemailAlreadyExists) {
      await this.callLogModel.updateOne(filter, payload);
    } else {
      const voicemail = new this.callLogModel(payload);
      voicemail.save();
    }

    const recordAlreadyExists = await this.supabase
      .from('calls')
      .select()
      .eq('CallSid', payload.CallSid)
      .limit(1)
      .single();

    if (recordAlreadyExists && recordAlreadyExists.data) {
      await this.supabase
        .from('calls')
        .update(payload)
        .eq('CallSid', payload.CallSid);
    } else {
      await this.supabase.from('calls').insert([payload]);
    }

    return true;
  }

  async getCallLogs() {
    return this.callLogModel.find();
  }

  async getCallLogsBySupaBase() {
    return this.supabase.from('calls').select();
  }

  async getVoiceMails() {
    return this.voicemailModel.find();
  }

  async getVoiceMailsBySupaBase() {
    return this.supabase.from('voicemails').select();
  }
}

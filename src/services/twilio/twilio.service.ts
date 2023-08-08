import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseService } from 'src/database/database.service';
import { CallLog } from 'src/models/CallLog';
import * as twilio from 'twilio';

@Injectable()
export class TwilioService {
  private twiml: twilio.twiml.VoiceResponse;

  constructor(
    private readonly databaseService: DatabaseService,
    private readonly configService: ConfigService,
  ) {}

  private gather() {
    const gatherNode = this.twiml.gather();
    gatherNode.say('For call forwarding, press 1. For voicemail, press 2.');

    // If the user doesn't enter input, loop
    this.twiml.redirect('/call-handling/forward');
  }

  private forwardCall() {
    this.twiml.say('Calling to Personal Number');
    const dial = this.twiml.dial({
      action: '/call-handling/bye',
      method: 'POST',
    });
    dial.number(this.configService.get('PERSONAL_PHONE_NUMBER'));
  }

  private recordVoicemail() {
    this.twiml.say('Please leave a voicemail after the beep.');
    this.twiml.record({
      action: '/call-handling/voicemail',
      method: 'POST',
      maxLength: 30,
      transcribe: true,
    });
  }

  webhook(payload: any) {
    this.twiml = new twilio.twiml.VoiceResponse();
    if (payload.Digits) {
      switch (payload.Digits) {
        case '1':
          this.forwardCall();
          break;
        case '2':
          this.recordVoicemail();
          break;
        default:
          this.twiml.say("Sorry, I don't understand that choice.");
          this.twiml.pause();
          this.gather();
          break;
      }
    } else {
      // call gather again if no input is provided
      this.gather();
    }

    return this.twiml;
  }

  listenVoiceMail(payload: any) {
    const voicemailDetails = {
      caller: payload.From,
      createdAt: new Date(),
      url: payload.RecordingUrl,
      transcript: payload.TranscriptionText,
    };

    return this.databaseService.saveVoicemail(voicemailDetails);
  }

  saveCallLog(payload: CallLog) {
    return this.databaseService.saveCallLog(payload);
  }
}

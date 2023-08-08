import { Controller, Post, Body, Res, UsePipes } from '@nestjs/common';
import { Response } from 'express';
import * as twilio from 'twilio';
import { TwilioService } from 'src/services/twilio/twilio.service';
import { CallLogDto, CallLogFilter } from './dto/call-log.dto';
import { VoicemailDto } from './dto/voicemail.dto';
import { FilterKeysPipe } from 'src/pipes/filter-keys/filter-keys.pipe';

@Controller('call-handling')
export class CallHandlingController {
  constructor(private readonly twilioService: TwilioService) {}

  private sendResponse(res: Response, twiml: twilio.twiml.VoiceResponse) {
    res.type('text/xml');
    return res.send(twiml.toString());
  }

  @Post('forward')
  @UsePipes(new FilterKeysPipe(CallLogFilter))
  async forwardCall(
    @Body() payload: CallLogDto,
    @Res() res: Response,
  ): Promise<any> {
    const twiml = this.twilioService.webhook(payload);
    this.twilioService.saveCallLog(payload);

    return this.sendResponse(res, twiml);
  }

  @Post('voicemail')
  async handleVoicemail(
    @Body() payload: VoicemailDto,
    @Res() res: Response,
  ): Promise<any> {
    this.twilioService.listenVoiceMail(payload);

    const twiml = new twilio.twiml.VoiceResponse();
    return this.sendResponse(res, twiml);
  }

  @Post('bye')
  async handlebye(@Body() payload: any, @Res() res: Response): Promise<any> {
    const twiml = new twilio.twiml.VoiceResponse();
    this.twilioService.saveCallLog(payload);
    twiml.say('Thank You for Calling');
    return this.sendResponse(res, twiml);
  }

  @Post('error')
  async error(@Body() payload: any, @Res() res: Response): Promise<any> {
    console.error('error', payload);
    const twiml = new twilio.twiml.VoiceResponse();
    twiml.say('Sorry we are unable to handle your request at the moment!');
    res.type('text/xml');
    res.send(twiml.toString());
  }
}

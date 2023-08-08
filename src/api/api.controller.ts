import { Controller, Get } from '@nestjs/common';
import { ApiService } from 'src/services/api/api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}
  @Get('call-logs')
  async callLogs() {
    return this.apiService.getCallLogs();
  }

  @Get('call-logs-supa')
  async callLogsSupa() {
    return this.apiService.getCallLogsBySupaBase();
  }

  @Get('voice-mails')
  async voiceMails() {
    return this.apiService.getVoiceMails();
  }

  @Get('voice-mails-supa')
  async voiceMailsBySupa() {
    return this.apiService.getVoiceMailsBySupaBase();
  }
}

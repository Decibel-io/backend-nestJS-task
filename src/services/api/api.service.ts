import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CallLog } from 'src/models/CallLog';

@Injectable()
export class ApiService {
  constructor(private readonly databaseService: DatabaseService) {}

  saveCallLog(payload: CallLog) {
    return this.databaseService.saveCallLog(payload);
  }

  getCallLogs() {
    return this.databaseService.getCallLogs();
  }

  getCallLogsBySupaBase() {
    return this.databaseService.getCallLogsBySupaBase();
  }

  getVoiceMails() {
    return this.databaseService.getVoiceMails();
  }

  getVoiceMailsBySupaBase() {
    return this.databaseService.getVoiceMailsBySupaBase();
  }
}

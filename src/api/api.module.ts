import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from 'src/services/api/api.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [ApiController],
  providers:[ApiService]
})
export class ApiModule {}

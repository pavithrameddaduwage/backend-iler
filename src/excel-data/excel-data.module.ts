import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcelDataService } from './excel-data.service';
import { ExcelDataController } from './excel-data.controller';
import { ExcelData } from './entities/excel-datum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExcelData])],
  providers: [ExcelDataService],
  controllers: [ExcelDataController],
  exports: [ExcelDataService],   
})
export class ExcelDataModule {}

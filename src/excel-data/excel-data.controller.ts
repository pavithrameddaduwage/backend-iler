import { Controller, Post, UploadedFile, UseInterceptors, Body, Param, Query, Get, Patch, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ExcelDataService } from './excel-data.service';
import { CreateExcelDatumDto } from './dto/create-excel-datum.dto';
import { UpdateExcelDatumDto } from './dto/update-excel-datum.dto';

@Controller('excel-data')
export class ExcelDataController {
  constructor(private readonly excelDataService: ExcelDataService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('department') department: string,
    @Body('year') year: string,
    @Body('week') week: string,
  ) {
    await this.excelDataService.uploadFile(file, department, year, week);
    return { message: 'File uploaded successfully' };
  }

  @Post()
  create(@Body() createExcelDatumDto: CreateExcelDatumDto) {
    return this.excelDataService.create(createExcelDatumDto);
  }

  @Get()
  findAll() {
    return this.excelDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.excelDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExcelDatumDto: UpdateExcelDatumDto) {
    return this.excelDataService.update(+id, updateExcelDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.excelDataService.remove(+id);
  }
}

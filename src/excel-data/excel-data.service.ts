import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { join } from 'path';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import * as XLSX from 'xlsx';  
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExcelData } from './entities/excel-datum.entity';  
import { CreateExcelDatumDto } from './dto/create-excel-datum.dto';
import { UpdateExcelDatumDto } from './dto/update-excel-datum.dto';

@Injectable()
export class ExcelDataService {
  private readonly uploadPath = './uploads';

  constructor(
    @InjectRepository(ExcelData)
    private readonly excelDataRepository: Repository<ExcelData>,
  ) {}

  async uploadFile(file: Express.Multer.File, department: string, year: string, week: string) {
    if (!file) {
      throw new Error('No file uploaded');
    }

    const fileExtension = file.originalname.split('.').pop();
    if (!fileExtension) {
      throw new Error('Invalid file type');
    }

    // const filename = `${uuidv4()}.${fileExtension}`;
    // await fs.mkdir(this.uploadPath, { recursive: true });
    // const filePath = join(this.uploadPath, filename);
    // await fs.writeFile(filePath, file.buffer);

    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheetNames = workbook.SheetNames;
    const sheet = workbook.Sheets[sheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);

    try {
      const datums: ExcelData[] = [];
      const currentDate = new Date(); 

      for (const row of data) {
        const dataline = new ExcelData();
        dataline.department = department;
        dataline.year = parseInt(year);
        dataline.week = parseInt(week);
        dataline.uploaded_dateint = currentDate; 
        dataline.old_nbr = row['old_nbr'];
        dataline.vendor_num_9 = row['Vendor_nbr_9'];
        dataline.vendor_item_des = row['VENDOR_ITEM_DESC'];
        dataline.category = row['category'];
        dataline.sub_category = row['Subcategory'];
        dataline.in_transit_qty = row['in_transit_qt'];
        dataline.on_hand_1_qty = row['On_Hand_1_qty'];
        dataline.in_whs_qty = row['in_WHS_qty'];
        dataline.on_order_qty = row['on_order_qty'];
        dataline.whs_on_hand = row['WHS_On_Hand'];
        dataline.whs_on_order = row['WHS_On_Order'];
        dataline.avg_ss = row['Avg_SS'];
        dataline.unit_retail = row['Unit_Retail'];
        dataline.cost = row['COST'];
        dataline.store_outs = row[' Store_outs'];
        dataline.wos = row['WOS'];
        dataline.wk_to_date = row['wk_to_date'];
        dataline.lastwkpos = row['LSTWKPOS'];
        dataline.l02wkpos = row['L02WKPOS'];
        dataline.l03wkpos = row['L03WKPOS'];

        dataline.wk01_fcst = row['WK01_FCST'];
        dataline.wk02_fcst = row['WK02_FCST'];
        dataline.wk03_fcst = row['WK03_FCST'];
        dataline.wk04_fcst = row['WK04_FCST'];
        dataline.wk05_fcst = row['WK05_FCST'];
        dataline.wk06_fcst = row['WK06_FCST'];
        dataline.wk07_fcst = row['Wk07_fcst'];
        dataline.wk08_fcst = row['Wk08_fcst'];
        dataline.wk09_fcst = row['Wk09_fcst'];
        dataline.wk10_fcst = row['Wk10_fcst'];
        dataline.wk11_fcst = row['Wk11_fcst'];
        dataline.wk12_fcst = row['Wk12_fcst'];
        dataline.wk13_fcst = row['Wk13_fcst'];
        dataline.wk14_fcst = row['Wk14_fcst'];
        dataline.wk15_fcst = row['Wk15_fcst'];
        dataline.wk16_fcst = row['Wk16_fcst'];
        dataline.wk17_fcst = row['Wk17_fcst'];
        dataline.wk18_fcst = row['Wk18_fcst'];
        dataline.wk19_fcst = row['Wk19_fcst'];
        dataline.wk20_fcst = row['Wk20_fcst'];
        dataline.wk21_fcst = row['Wk21_fcst'];
        dataline.wk22_fcst = row['Wk22_fcst'];
        dataline.wk23_fcst = row['Wk23_fcst'];
        dataline.wk24_fcst = row['Wk24_fcst'];
        dataline.wk25_fcst = row['Wk25_fcst'];
        dataline.wk26_fcst = row['Wk26_fcst'];
        dataline.wk27_fcst = row['Wk27_fcst'];
        dataline.wk28_fcst = row['Wk28_fcst'];
        dataline.wk29_fcst = row['Wk29_fcst'];
        dataline.wk30_fcst = row['Wk30_fcst'];
        dataline.wk31_fcst = row['Wk31_fcst'];
        dataline.wk32_fcst = row['Wk32_fcst'];
        dataline.wk33_fcst = row['Wk33_fcst'];
        dataline.wk34_fcst = row['Wk34_fcst'];
        dataline.wk35_fcst = row['Wk35_fcst'];
        dataline.wk36_fcst = row['Wk36_fcst'];  
        dataline.wk37_fcst = row['Wk37_fcst'];
        dataline.wk38_fcst = row['Wk38_fcst'];
        dataline.wk39_fcst = row['Wk39_fcst'];
        dataline.wk40_fcst = row['Wk40_fcst'];
        dataline.wk41_fcst = row['Wk41_fcst'];
        dataline.wk42_fcst = row['Wk42_fcst'];
        dataline.wk43_fcst = row['Wk43_fcst'];
        dataline.wk44_fcst = row['Wk44_fcst'];
        dataline.wk45_fcst = row['Wk45_fcst'];
        dataline.wk46_fcst = row['Wk46_fcst'];
        dataline.wk47_fcst = row['Wk47_fcst'];
        dataline.wk48_fcst = row['Wk48_fcst'];
        dataline.wk49_fcst = row['Wk49_fcst'];
        dataline.wk50_fcst = row['Wk50_fcst'];
        dataline.wk51_fcst = row['Wk51_fcst'];
        dataline.wk52_fcst = row['Wk52_fcst'];

        dataline.wmwk01_instk = row['Wmwk01_instk'];
        dataline.wmwk02_instk = row['Wmwk02_instk'];
        dataline.wmwk03_instk = row['Wmwk03_instk'];
        dataline.wmwk04_instk = row['Wmwk04_instk'];
        dataline.wmwk05_instk = row['Wmwk05_instk'];
        dataline.wmwk06_instk = row['Wmwk06_instk'];
        dataline.wmwk07_instk = row['Wmwk07_instk'];
        dataline.wmwk08_instk = row['Wmwk08_instk'];
        dataline.wmwk09_instk = row['Wmwk09_instk'];
        dataline.wmwk10_instk = row['Wmwk10_instk'];
        dataline.wmwk11_instk = row['Wmwk11_instk'];
        dataline.wmwk12_instk = row['Wmwk12_instk'];
        dataline.wmwk13_instk = row['Wmwk13_instk'];
        dataline.wmwk14_instk = row['Wmwk14_instk'];
        dataline.wmwk15_instk = row['Wmwk15_instk'];
        dataline.wmwk16_instk = row['Wmwk16_instk'];
        dataline.wmwk17_instk = row['Wmwk17_instk'];
        dataline.wmwk18_instk = row['Wmwk18_instk'];
        dataline.wmwk19_instk = row['Wmwk19_instk'];
        dataline.wmwk20_instk = row['Wmwk20_instk'];
        dataline.wmwk21_instk = row['Wmwk21_instk'];
        dataline.wmwk22_instk = row['Wmwk22_instk'];
        dataline.wmwk23_instk = row['Wmwk23_instk'];
        dataline.wmwk24_instk = row['Wmwk24_instk'];
        dataline.wmwk25_instk = row['Wmwk25_instk'];
        dataline.wmwk26_instk = row['Wmwk26_instk'];
        dataline.wmwk27_instk = row['Wmwk27_instk'];
        dataline.wmwk28_instk = row['Wmwk28_instk'];
        dataline.wmwk29_instk = row['Wmwk29_instk'];
        dataline.wmwk30_instk = row['Wmwk30_instk'];
        dataline.wmwk31_instk = row['Wmwk31_instk'];
        dataline.wmwk32_instk = row['Wmwk32_instk'];
        dataline.wmwk33_instk = row['Wmwk33_instk'];
        dataline.wmwk34_instk = row['Wmwk34_instk'];
        dataline.wmwk35_instk = row['Wmwk34_instk'];
        dataline.wmwk36_instk = row['Wmwk36_instk'];
        dataline.wmwk37_instk = row['Wmwk37_instk'];
        dataline.wmwk38_instk = row['Wmwk38_instk'];
        dataline.wmwk39_instk = row['Wmwk39_instk'];
        dataline.wmwk40_instk = row['Wmwk40_instk'];
        dataline.wmwk41_instk = row['Wmwk41_instk'];
        dataline.wmwk42_instk = row['Wmwk42_instk'];
        dataline.wmwk43_instk = row['Wmwk43_instk'];
        dataline.wmwk44_instk = row['Wmwk44_instk'];
        dataline.wmwk45_instk = row['Wmwk45_instk'];
        dataline.wmwk46_instk = row['Wmwk46_instk'];
        dataline.wmwk47_instk = row['Wmwk47_instk'];
        dataline.wmwk48_instk = row['Wmwk48_instk'];
        dataline.wmwk49_instk = row['Wmwk49_instk'];
        dataline.wmwk50_instk = row['Wmwk50_instk'];
        dataline.wmwk51_instk = row['Wmwk51_instk'];
        dataline.wmwk52_instk = row['Wmwk52_instk'];

        dataline.wmwk01_sales = row['Wmwk01_sales'];
        dataline.wmwk02_sales = row['Wmwk02_sales'];
        dataline.wmwk03_sales = row['Wmwk03_sales'];
        dataline.wmwk04_sales = row['Wmwk04_sales'];
        dataline.wmwk05_sales = row['Wmwk05_sales'];
        dataline.wmwk06_sales = row['Wmwk06_sales'];
        dataline.wmwk07_sales = row['Wmwk07_sales'];
        dataline.wmwk08_sales = row['Wmwk08_sales'];
        dataline.wmwk09_sales = row['Wmwk09_sales'];
        dataline.wmwk10_sales = row['Wmwk10_sales'];
        dataline.wmwk11_sales = row['Wmwk11_sales'];
        dataline.wmwk12_sales = row['Wmwk12_sales'];
        dataline.wmwk13_sales = row['Wmwk13_sales'];
        dataline.wmwk14_sales = row['Wmwk14_sales'];
        dataline.wmwk15_sales = row['Wmwk15_sales'];
        dataline.wmwk16_sales = row['Wmwk16_sales'];
        dataline.wmwk17_sales = row['Wmwk17_sales'];
        dataline.wmwk18_sales = row['Wmwk18_sales'];
        dataline.wmwk19_sales = row['Wmwk19_sales'];
        dataline.wmwk20_sales = row['Wmwk20_sales'];
        dataline.wmwk21_sales = row['Wmwk21_sales'];
        dataline.wmwk22_sales = row['Wmwk22_sales'];
        dataline.wmwk23_sales = row['Wmwk23_sales'];
        dataline.wmwk24_sales = row['Wmwk24_sales'];
        dataline.wmwk25_sales = row['Wmwk25_sales'];
        dataline.wmwk26_sales = row['Wmwk26_sales'];
        dataline.wmwk27_sales = row['Wmwk27_sales'];
        dataline.wmwk28_sales = row['Wmwk28_sales'];
        dataline.wmwk29_sales = row['Wmwk29_sales'];
        dataline.wmwk30_sales = row['Wmwk30_sales'];
        dataline.wmwk31_sales = row['Wmwk31_sales'];
        dataline.wmwk32_sales = row['Wmwk32_sales'];
        dataline.wmwk33_sales = row['Wmwk33_sales'];
        dataline.wmwk34_sales = row['Wmwk34_sales'];
        dataline.wmwk35_sales = row['Wmwk35_sales'];
        dataline.wmwk36_sales = row['Wmwk36_sales'];
        dataline.wmwk37_sales = row['Wmwk37_sales'];
        dataline.wmwk38_sales = row['Wmwk38_sales'];
        dataline.wmwk39_sales = row['Wmwk39_sales'];
        dataline.wmwk40_sales = row['Wmwk40_sales'];
        dataline.wmwk41_sales = row['Wmwk41_sales'];
        dataline.wmwk42_sales = row['Wmwk42_sales'];
        dataline.wmwk43_sales = row['Wmwk43_sales'];
        dataline.wmwk44_sales = row['Wmwk44_sales'];
        dataline.wmwk45_sales = row['Wmwk45_sales'];
        dataline.wmwk46_sales = row['Wmwk46_sales'];
        dataline.wmwk47_sales = row['Wmwk47_sales'];
        dataline.wmwk48_sales = row['Wmwk48_sales'];
        dataline.wmwk49_sales = row['Wmwk49_sales'];
        dataline.wmwk50_sales = row['Wmwk50_sales'];
        dataline.wmwk51_sales = row['Wmwk51_sales'];
        dataline.wmwk52_sales = row['Wmwk52_sales'];

        dataline.cid = row['cid'];
        dataline.channel = row['channel'];
        dataline.vendor_stock_id = row['vendor_stock_id'];
        dataline.finline_nbr = row['finline_nbr'];
        dataline.item2_des = row['item2_des'];
        dataline.rm = row['rm'];
        dataline.item_replenishable_ind = row['item_replenishable_ind'];
        dataline.mbm_code = row['mbm_code'];
        dataline.per_out = row['per_out'];
        dataline.per_dept_out = row['per_dept_out'];
        dataline.oif_item_eff_dt = row['oif_item_eff_dt'];
        dataline.u_s_w_projection = row['u_s_w_projection'];
        dataline.u_s_w_37_15 = row['u_s_w_37_15'];
        dataline.u_s_w_16_36 = row['u_s_w_16_36'];
        dataline.dept_nbr = row['dept_nbr'];
        dataline.upc_nbr = row['upc_nbr'];
        dataline.vnpk_qty = row['vnpk_qty'];
        dataline.whpk_qty = row['whpk_qty'];
        dataline.channel_type = row['channel_type'];
        dataline.category_group = row['category_group'];
        dataline.dc_ss_total = row['dc_ss_total'];
        dataline.dc_wos_tgt = row['dc_wos_tgt'];
        dataline.nw_fcst = row['nw_fcst'];
        dataline.fineline_des = row['fineline_des'];
        dataline.fineline_info = row['fineline_info'];
        dataline.size_des = row['size_des'];
        dataline.color_des = row['color_des'];
        dataline.item_fineline_ss = row['item_fineline_ss'];
        dataline.var_1wk = row['var_1wk'];
        dataline.var_2wk = row['var_2wk'];
        dataline.var_3wk = row['var_3wk'];
        dataline.abs_var_3wks_hist = row['abs_var_3wks_hist'];
        dataline.vendor_nbr_8 = row['vendor_nbr_8'];
        dataline.last_updated = row['last_updated'];
        

        

        datums.push(dataline);
      }

      await this.excelDataRepository.save(datums, { chunk: 500 });

    } catch (error) {
      throw new InternalServerErrorException('Failed to save data to the database');
    }

    return { message: 'File processed and data saved successfully', data };
  }

  private convertRowToEntity(row: any, department: string, year: string, week: string): ExcelData {
    return {
      ...row,
      department,
      year,
      week,
    } as ExcelData;
  }

  async create(createExcelDatumDto: CreateExcelDatumDto) {
    const excelDatum = this.excelDataRepository.create(createExcelDatumDto);
    await this.excelDataRepository.save(excelDatum);
    return excelDatum;
  }

  async findAll() {
    return this.excelDataRepository.find();
  }

  async findOne(id: number) {
    return this.excelDataRepository.findOneBy({ id });
  }

  async update(id: number, updateExcelDatumDto: UpdateExcelDatumDto) {
    const excelDatum = await this.excelDataRepository.preload({
      id,
      ...updateExcelDatumDto,
    });

    if (!excelDatum) {
      throw new Error(`ExcelDatum with id ${id} not found`);
    }

    return this.excelDataRepository.save(excelDatum);
  }

  async remove(id: number) {
    const result = await this.excelDataRepository.delete(id);
    if (result.affected === 0) {
      throw new Error(`ExcelDatum with id ${id} not found`);
    }
    return { message: 'ExcelDatum removed successfully' };
  }
}

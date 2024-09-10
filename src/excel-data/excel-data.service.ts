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

        // Use default value (null or undefined) if the row property is missing
        dataline.old_nbr = row['old_nbr'] ?? null;
        dataline.vendor_num_9 = row['Vendor_nbr_9'] ?? null;
        dataline.vendor_item_des = row['VENDOR_ITEM_DESC'] ?? null;
        dataline.category = row['category'] ?? null;
        dataline.sub_category = row['Subcategory'] ?? null;
        dataline.in_transit_qty = row['in_transit_qty'] ?? null;
        dataline.on_hand_1_qty = row['On_Hand_1_qty'] ?? null;
        dataline.in_whs_qty = row['in_WHS_qty'] ?? null;
        dataline.on_order_qty = row['on_order_qty'] ?? null;
        dataline.whs_on_hand = row['WHS_On_Hand'] ?? null;
        dataline.whs_on_order = row['WHS_On_Order'] ?? null;
        dataline.avg_ss = row['Avg_SS'] ?? null;
        dataline.unit_retail = row['Unit_Retail'] ?? null;
        dataline.cost = row['COST'] ?? null;
        dataline.store_outs = row['Store_outs'] ?? null;
        dataline.wos = row['WOS'] ?? null;
        dataline.wk_to_date = row['wk_to_date'] ?? null;
        dataline.lastwkpos = row['LSTWKPOS'] ?? null;
        dataline.l02wkpos = row['L02WKPOS'] ?? null;
        dataline.l03wkpos = row['L03WKPOS'] ?? null;

        dataline.wk01_fcst = row['WK01_FCST'] ?? null;
        dataline.wk02_fcst = row['WK02_FCST'] ?? null;
        dataline.wk03_fcst = row['WK03_FCST'] ?? null;
        dataline.wk04_fcst = row['WK04_FCST'] ?? null;
        dataline.wk05_fcst = row['WK05_FCST'] ?? null;
        dataline.wk06_fcst = row['WK06_FCST'] ?? null;
        dataline.wk07_fcst = row['WK07_FCST'] ?? null;
        dataline.wk08_fcst = row['WK08_FCST'] ?? null;
        dataline.wk09_fcst = row['WK09_FCST'] ?? null;
        dataline.wk10_fcst = row['WK10_FCST'] ?? null;
        dataline.wk11_fcst = row['WK11_FCST'] ?? null;
        dataline.wk12_fcst = row['WK12_FCST'] ?? null;
        dataline.wk13_fcst = row['WK13_FCST'] ?? null;
        dataline.wk14_fcst = row['WK14_FCST'] ?? null;
        dataline.wk15_fcst = row['WK15_FCST'] ?? null;
        dataline.wk16_fcst = row['WK16_FCST'] ?? null;
        dataline.wk17_fcst = row['WK17_FCST'] ?? null;
        dataline.wk18_fcst = row['WK18_FCST'] ?? null;
        dataline.wk19_fcst = row['WK19_FCST'] ?? null;
        dataline.wk20_fcst = row['WK20_FCST'] ?? null;
        dataline.wk21_fcst = row['WK21_FCST'] ?? null;
        dataline.wk22_fcst = row['WK22_FCST'] ?? null;
        dataline.wk23_fcst = row['WK23_FCST'] ?? null;
        dataline.wk24_fcst = row['WK24_FCST'] ?? null;
        dataline.wk25_fcst = row['WK25_FCST'] ?? null;
        dataline.wk26_fcst = row['WK26_FCST'] ?? null;
        dataline.wk27_fcst = row['WK27_FCST'] ?? null;
        dataline.wk28_fcst = row['WK28_FCST'] ?? null;
        dataline.wk29_fcst = row['WK29_FCST'] ?? null;
        dataline.wk30_fcst = row['WK30_FCST'] ?? null;
        dataline.wk31_fcst = row['WK31_FCST'] ?? null;
        dataline.wk32_fcst = row['WK32_FCST'] ?? null;
        dataline.wk33_fcst = row['WK33_FCST'] ?? null;
        dataline.wk34_fcst = row['WK34_FCST'] ?? null;
        dataline.wk35_fcst = row['WK35_FCST'] ?? null;
        dataline.wk36_fcst = row['WK36_FCST'] ?? null;  
        dataline.wk37_fcst = row['WK37_FCST'] ?? null;
        dataline.wk38_fcst = row['WK38_FCST'] ?? null;
        dataline.wk39_fcst = row['WK39_FCST'] ?? null;
        dataline.wk40_fcst = row['WK40_FCST'] ?? null;
        dataline.wk41_fcst = row['WK41_FCST'] ?? null;
        dataline.wk42_fcst = row['WK42_FCST'] ?? null;
        dataline.wk43_fcst = row['WK43_FCST'] ?? null;
        dataline.wk44_fcst = row['WK44_FCST'] ?? null;
        dataline.wk45_fcst = row['WK45_FCST'] ?? null;
        dataline.wk46_fcst = row['WK46_FCST'] ?? null;
        dataline.wk47_fcst = row['WK47_FCST'] ?? null;
        dataline.wk48_fcst = row['WK48_FCST'] ?? null;
        dataline.wk49_fcst = row['WK49_FCST'] ?? null;
        dataline.wk50_fcst = row['WK50_FCST'] ?? null;
        dataline.wk51_fcst = row['WK51_FCST'] ?? null;
        dataline.wk52_fcst = row['WK52_FCST'] ?? null;

        dataline.wmwk01_rec_ord = row['WMWK01_REC_ORD'] ?? null;
        dataline.wmwk02_rec_ord = row['WMWK02_REC_ORD'] ?? null;
        dataline.wmwk03_rec_ord = row['WMWK03_REC_ORD'] ?? null;
        dataline.wmwk04_rec_ord = row['WMWK04_REC_ORD'] ?? null;
        dataline.wmwk05_rec_ord = row['WMWK05_REC_ORD'] ?? null;
        dataline.wmwk06_rec_ord = row['WMWK06_REC_ORD'] ?? null;
        dataline.wmwk07_rec_ord = row['WMWK07_REC_ORD'] ?? null;
        dataline.wmwk08_rec_ord = row['WMWK08_REC_ORD'] ?? null;
        dataline.wmwk09_rec_ord = row['WMWK09_REC_ORD'] ?? null;
        dataline.wmwk10_rec_ord = row['WMWK10_REC_ORD'] ?? null;
        dataline.wmwk11_rec_ord = row['WMWK11_REC_ORD'] ?? null;
        dataline.wmwk12_rec_ord = row['WMWK12_REC_ORD'] ?? null;
        dataline.wmwk13_rec_ord = row['WMWK13_REC_ORD'] ?? null;
        dataline.wmwk14_rec_ord = row['WMWK14_REC_ORD'] ?? null;
        dataline.wmwk15_rec_ord = row['WMWK15_REC_ORD'] ?? null;
        dataline.wmwk16_rec_ord = row['WMWK16_REC_ORD'] ?? null;
        dataline.wmwk17_rec_ord = row['WMWK17_REC_ORD'] ?? null;
        dataline.wmwk18_rec_ord = row['WMWK18_REC_ORD'] ?? null;
        dataline.wmwk19_rec_ord = row['WMWK19_REC_ORD'] ?? null;
        dataline.wmwk20_rec_ord = row['WMWK20_REC_ORD'] ?? null;
        dataline.wmwk21_rec_ord = row['WMWK21_REC_ORD'] ?? null;
        dataline.wmwk22_rec_ord = row['WMWK22_REC_ORD'] ?? null;
        dataline.wmwk23_rec_ord = row['WMWK23_REC_ORD'] ?? null;
        dataline.wmwk24_rec_ord = row['WMWK24_REC_ORD'] ?? null;
        dataline.wmwk25_rec_ord = row['WMWK25_REC_ORD'] ?? null;
        dataline.wmwk26_rec_ord = row['WMWK26_REC_ORD'] ?? null;
        dataline.wmwk27_rec_ord = row['WMWK27_REC_ORD'] ?? null;
        dataline.wmwk28_rec_ord = row['WMWK28_REC_ORD'] ?? null;
        dataline.wmwk29_rec_ord = row['WMWK29_REC_ORD'] ?? null;
        dataline.wmwk30_rec_ord = row['WMWK30_REC_ORD'] ?? null;
        dataline.wmwk31_rec_ord = row['WMWK31_REC_ORD'] ?? null;
        dataline.wmwk32_rec_ord = row['WMWK32_REC_ORD'] ?? null;
        dataline.wmwk33_rec_ord = row['WMWK33_REC_ORD'] ?? null;
        dataline.wmwk34_rec_ord = row['WMWK34_REC_ORD'] ?? null;
        dataline.wmwk35_rec_ord = row['WMWK35_REC_ORD'] ?? null;
        dataline.wmwk36_rec_ord = row['WMWK36_REC_ORD'] ?? null;
        dataline.wmwk37_rec_ord = row['WMWK37_REC_ORD'] ?? null;
        dataline.wmwk38_rec_ord = row['WMWK38_REC_ORD'] ?? null;
        dataline.wmwk39_rec_ord = row['WMWK39_REC_ORD'] ?? null;
        dataline.wmwk40_rec_ord = row['WMWK40_REC_ORD'] ?? null;
        dataline.wmwk41_rec_ord = row['WMWK41_REC_ORD'] ?? null;
        dataline.wmwk42_rec_ord = row['WMWK42_REC_ORD'] ?? null;
        dataline.wmwk43_rec_ord = row['WMWK43_REC_ORD'] ?? null;
        dataline.wmwk44_rec_ord = row['WMWK44_REC_ORD'] ?? null;
        dataline.wmwk45_rec_ord = row['WMWK45_REC_ORD'] ?? null;
        dataline.wmwk46_rec_ord = row['WMWK46_REC_ORD'] ?? null;
        dataline.wmwk47_rec_ord = row['WMWK47_REC_ORD'] ?? null;
        dataline.wmwk48_rec_ord = row['WMWK48_REC_ORD'] ?? null;
        dataline.wmwk49_rec_ord = row['WMWK49_REC_ORD'] ?? null;
        dataline.wmwk50_rec_ord = row['WMWK50_REC_ORD'] ?? null;
        dataline.wmwk51_rec_ord = row['WMWK51_REC_ORD'] ?? null;
        dataline.wmwk52_rec_ord = row['WMWK52_REC_ORD'] ?? null;

        dataline.wmwk01_instk = row['WMWK01_INSTK'] ?? null;
        dataline.wmwk02_instk = row['WMWK02_INSTK'] ?? null;
        dataline.wmwk03_instk = row['WMWK03_INSTK'] ?? null;
        dataline.wmwk04_instk = row['WMWK04_INSTK'] ?? null;
        dataline.wmwk05_instk = row['WMWK05_INSTK'] ?? null;
        dataline.wmwk06_instk = row['WMWK06_INSTK'] ?? null;
        dataline.wmwk07_instk = row['WMWK07_INSTK'] ?? null;
        dataline.wmwk08_instk = row['WMWK08_INSTK'] ?? null;
        dataline.wmwk09_instk = row['WMWK09_INSTK'] ?? null;
        dataline.wmwk10_instk = row['WMWK10_INSTK'] ?? null;
        dataline.wmwk11_instk = row['WMWK11_INSTK'] ?? null;
        dataline.wmwk12_instk = row['WMWK12_INSTK'] ?? null;
        dataline.wmwk13_instk = row['WMWK13_INSTK'] ?? null;
        dataline.wmwk14_instk = row['WMWK14_INSTK'] ?? null;
        dataline.wmwk15_instk = row['WMWK15_INSTK'] ?? null;
        dataline.wmwk16_instk = row['WMWK16_INSTK'] ?? null;
        dataline.wmwk17_instk = row['WMWK17_INSTK'] ?? null;
        dataline.wmwk18_instk = row['WMWK18_INSTK'] ?? null;
        dataline.wmwk19_instk = row['WMWK19_INSTK'] ?? null;
        dataline.wmwk20_instk = row['WMWK20_INSTK'] ?? null;
        dataline.wmwk21_instk = row['WMWK21_INSTK'] ?? null;
        dataline.wmwk22_instk = row['WMWK22_INSTK'] ?? null;
        dataline.wmwk23_instk = row['WMWK23_INSTK'] ?? null;
        dataline.wmwk24_instk = row['WMWK24_INSTK'] ?? null;
        dataline.wmwk25_instk = row['WMWK25_INSTK'] ?? null;
        dataline.wmwk26_instk = row['WMWK26_INSTK'] ?? null;
        dataline.wmwk27_instk = row['WMWK27_INSTK'] ?? null;
        dataline.wmwk28_instk = row['WMWK28_INSTK'] ?? null;
        dataline.wmwk29_instk = row['WMWK29_INSTK'] ?? null;
        dataline.wmwk30_instk = row['WMWK30_INSTK'] ?? null;
        dataline.wmwk31_instk = row['WMWK31_INSTK'] ?? null;
        dataline.wmwk32_instk = row['WMWK32_INSTK'] ?? null;
        dataline.wmwk33_instk = row['WMWK33_INSTK'] ?? null;
        dataline.wmwk34_instk = row['WMWK34_INSTK'] ?? null;
        dataline.wmwk35_instk = row['WMWK35_INSTK'] ?? null;
        dataline.wmwk36_instk = row['WMWK36_INSTK'] ?? null;
        dataline.wmwk37_instk = row['WMWK37_INSTK'] ?? null;
        dataline.wmwk38_instk = row['WMWK38_INSTK'] ?? null;
        dataline.wmwk39_instk = row['WMWK39_INSTK'] ?? null;
        dataline.wmwk40_instk = row['WMWK40_INSTK'] ?? null;
        dataline.wmwk41_instk = row['WMWK41_INSTK'] ?? null;
        dataline.wmwk42_instk = row['WMWK42_INSTK'] ?? null;
        dataline.wmwk43_instk = row['WMWK43_INSTK'] ?? null;
        dataline.wmwk44_instk = row['WMWK44_INSTK'] ?? null;
        dataline.wmwk45_instk = row['WMWK45_INSTK'] ?? null;
        dataline.wmwk46_instk = row['WMWK46_INSTK'] ?? null;
        dataline.wmwk47_instk = row['WMWK47_INSTK'] ?? null;
        dataline.wmwk48_instk = row['WMWK48_INSTK'] ?? null;
        dataline.wmwk49_instk = row['WMWK49_INSTK'] ?? null;
        dataline.wmwk50_instk = row['WMWK50_INSTK'] ?? null;
        dataline.wmwk51_instk = row['WMWK51_INSTK'] ?? null;
        dataline.wmwk52_instk = row['WMWK52_INSTK'] ?? null;

        dataline.wmwk01_sales = row['WMWK01_Sales'] ?? null;
        dataline.wmwk02_sales = row['WMWK02_Sales'] ?? null;
        dataline.wmwk03_sales = row['WMWK03_Sales'] ?? null;
        dataline.wmwk04_sales = row['WMWK04_Sales'] ?? null;
        dataline.wmwk05_sales = row['WMWK05_Sales'] ?? null;
        dataline.wmwk06_sales = row['WMWK06_Sales'] ?? null;
        dataline.wmwk07_sales = row['WMWK07_Sales'] ?? null;
        dataline.wmwk08_sales = row['WMWK08_Sales'] ?? null;
        dataline.wmwk09_sales = row['WMWK09_Sales'] ?? null;
        dataline.wmwk10_sales = row['WMWK10_Sales'] ?? null;
        dataline.wmwk11_sales = row['WMWK11_Sales'] ?? null;
        dataline.wmwk12_sales = row['WMWK12_Sales'] ?? null;
        dataline.wmwk13_sales = row['WMWK13_Sales'] ?? null;
        dataline.wmwk14_sales = row['WMWK14_Sales'] ?? null;
        dataline.wmwk15_sales = row['WMWK15_Sales'] ?? null;
        dataline.wmwk16_sales = row['WMWK16_Sales'] ?? null;
        dataline.wmwk17_sales = row['WMWK17_Sales'] ?? null;
        dataline.wmwk18_sales = row['WMWK18_Sales'] ?? null;
        dataline.wmwk19_sales = row['WMWK19_Sales'] ?? null;
        dataline.wmwk20_sales = row['WMWK20_Sales'] ?? null;
        dataline.wmwk21_sales = row['WMWK21_Sales'] ?? null;
        dataline.wmwk22_sales = row['WMWK22_Sales'] ?? null;
        dataline.wmwk23_sales = row['WMWK23_Sales'] ?? null;
        dataline.wmwk24_sales = row['WMWK24_Sales'] ?? null;
        dataline.wmwk25_sales = row['WMWK25_Sales'] ?? null;
        dataline.wmwk26_sales = row['WMWK26_Sales'] ?? null;
        dataline.wmwk27_sales = row['WMWK27_Sales'] ?? null;
        dataline.wmwk28_sales = row['WMWK28_Sales'] ?? null;
        dataline.wmwk29_sales = row['WMWK29_Sales'] ?? null;
        dataline.wmwk30_sales = row['WMWK30_Sales'] ?? null;
        dataline.wmwk31_sales = row['WMWK31_Sales'] ?? null;
        dataline.wmwk32_sales = row['WMWK32_Sales'] ?? null;
        dataline.wmwk33_sales = row['WMWK33_Sales'] ?? null;
        dataline.wmwk34_sales = row['WMWK34_Sales'] ?? null;
        dataline.wmwk35_sales = row['WMWK35_Sales'] ?? null;
        dataline.wmwk36_sales = row['WMWK36_Sales'] ?? null;
        dataline.wmwk37_sales = row['WMWK37_Sales'] ?? null;
        dataline.wmwk38_sales = row['WMWK38_Sales'] ?? null;
        dataline.wmwk39_sales = row['WMWK39_Sales'] ?? null;
        dataline.wmwk40_sales = row['WMWK40_Sales'] ?? null;
        dataline.wmwk41_sales = row['WMWK41_Sales'] ?? null;
        dataline.wmwk42_sales = row['WMWK42_Sales'] ?? null;
        dataline.wmwk43_sales = row['WMWK43_Sales'] ?? null;
        dataline.wmwk44_sales = row['WMWK44_Sales'] ?? null;
        dataline.wmwk45_sales = row['WMWK45_Sales'] ?? null;
        dataline.wmwk46_sales = row['WMWK46_Sales'] ?? null;
        dataline.wmwk47_sales = row['WMWK47_Sales'] ?? null;
        dataline.wmwk48_sales = row['WMWK48_Sales'] ?? null;
        dataline.wmwk49_sales = row['WMWK49_Sales'] ?? null;
        dataline.wmwk50_sales = row['WMWK50_Sales'] ?? null;
        dataline.wmwk51_sales = row['WMWK51_Sales'] ?? null;
        dataline.wmwk52_sales = row['WMWK52_Sales'] ?? null;
        
        dataline.cid = row['CID'] ?? null;
        dataline.channel = row['Channel'] ?? null;
        dataline.vendor_stock_id = row['VENDOR_STOCK_ID'] ?? null;
        dataline.finline_nbr = Number.isInteger(row['FINELINE_NBR']) ? row['FINELINE_NBR'] : Math.round(row['FINELINE_NBR']) ?? null;
        dataline.item2_des = row['ITEM2_DESC'] ?? null;
        dataline.rm = row['RM'] ?? null;
        dataline.item_replenishable_ind = row['ITEM_REPLENISHABLE_IND'] ?? null;
        dataline.mbm_code = row['MBM_code'] ?? null;
        dataline.per_out = typeof row['PER_out'] === 'number' ? row['PER_out'] : parseFloat(row['PER_out']) ?? null;
        dataline.per_dept_out = typeof row['PER_DEPT_out'] === 'number' ? row['PER_DEPT_out'] : parseFloat(row['PER_DEPT_out']) ?? null;
        dataline.oif_item_eff_dt = Number.isInteger(row[' OIF_Item_Eff_Dt']) ? row[' OIF_Item_Eff_Dt'] : Math.round(row[' OIF_Item_Eff_Dt']) ?? null;
        dataline.u_s_w_projection = typeof row['U_S_W_Projection'] === 'number' ? row['U_S_W_Projection'] : parseFloat(row['U_S_W_Projection']) ?? null;
        dataline.u_s_w_37_15 = typeof row['U_S_W_37_15'] === 'number' ? row['U_S_W_37_15'] : parseFloat(row['U_S_W_37_15']) ?? null;
        dataline.u_s_w_16_36 = typeof row['U_S_W_16_36'] === 'number' ? row['U_S_W_16_36'] : parseFloat(row['U_S_W_16_36']) ?? null;
        dataline.dept_nbr = Number.isInteger(row['DEPT_NBR']) ? row['DEPT_NBR'] : Math.round(row['DEPT_NBR']) ?? null;
        dataline.upc_nbr = typeof row['upc_nbr'] === 'number' ? row['upc_nbr'] : parseInt(row['upc_nbr'], 10) ?? null;
        dataline.vnpk_qty = typeof row['VNPK_QTY'] === 'number' ? row['VNPK_QTY'] : parseFloat(row['VNPK_QTY']) ?? null;
        dataline.whpk_qty = typeof row['WHPK_QTY'] === 'number' ? row['WHPK_QTY'] : parseFloat(row['WHPK_QTY']) ?? null;
        dataline.channel_type = row['Channel_type'] ?? null;
        dataline.category_group = row['Category_group'] ?? null;
        dataline.dc_ss_total = typeof row['DC_SS_Total'] === 'number' ? row['DC_SS_Total'] : parseFloat(row['DC_SS_Total']) ?? null;
        dataline.dc_wos_tgt = typeof row['DC_WOS_TGT'] === 'number' ? row['DC_WOS_TGT'] : parseFloat(row['DC_WOS_TGT']) ?? null;
        dataline.nw_fcst = typeof row['NW_FCST'] === 'number' ? row['NW_FCST'] : parseFloat(row['NW_FCST']) ?? null;
        dataline.fineline_des = row['FINELINE_DESC'] ?? null;
        dataline.fineline_info = row['fineline_info'] ?? null;
        dataline.size_des = row['SIZE_DESC'] ?? null;
        dataline.color_des = row['COLOR_DESC'] ?? null;
        dataline.item_fineline_ss = typeof row['Item_fineline_ss'] === 'number' ? row['Item_fineline_ss'] : parseFloat(row['Item_fineline_ss']) ?? null;
        dataline.var_1wk = typeof row['VAR_1WK'] === 'number' ? row['VAR_1WK'] : parseFloat(row['VAR_1WK']) ?? null;
        dataline.var_2wk = typeof row['VAR_2WK'] === 'number' ? row['VAR_2WK'] : parseFloat(row['VAR_2WK']) ?? null;
        dataline.var_3wk = typeof row['VAR_3WK'] === 'number' ? row['VAR_3WK'] : parseFloat(row['VAR_3WK']) ?? null;
        dataline.abs_var_3wks_hist = typeof row['ABS_VAR_3wks_hist'] === 'number' ? row['ABS_VAR_3wks_hist'] : parseFloat(row['ABS_VAR_3wks_hist']) ?? null;
        dataline.vendor_nbr_8 = Number.isInteger(row['Vendor_nbr_8']) ? row['Vendor_nbr_8'] : Math.round(row['Vendor_nbr_8']) ?? null;
        dataline.last_updated = Number.isInteger(row['Last_updated']) ? row['Last_updated'] : Math.round(row['Last_updated']) ?? null;


        datums.push(dataline);
      }

      await this.excelDataRepository.save(datums, { chunk: 500 });

    } catch (error) {
      console.error('Error processing file:', error);
      throw new InternalServerErrorException('Failed to save data to the database');
    }

    return { message: 'File processed and data saved successfully', data };
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

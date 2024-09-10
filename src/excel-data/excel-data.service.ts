import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as XLSX from 'xlsx';  
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { ExcelData } from './entities/excel-datum.entity';
import { CreateExcelDatumDto } from './dto/create-excel-datum.dto';
import { UpdateExcelDatumDto } from './dto/update-excel-datum.dto';

@Injectable()
export class ExcelDataService {
  entityManager: any;
  constructor(
    @InjectRepository(ExcelData)
    private readonly excelDataRepository: Repository<ExcelData>,
  ) {}

  async create(createExcelDatumDto: CreateExcelDatumDto): Promise<ExcelData> {
    const newDatum = this.excelDataRepository.create(createExcelDatumDto);
    return await this.excelDataRepository.save(newDatum);
  }

  async findAll(): Promise<ExcelData[]> {
    return await this.excelDataRepository.find();
  }

  async findOne(id: number): Promise<ExcelData> {
    return await this.excelDataRepository.findOne(id);
  }

  async update(id: number, updateExcelDatumDto: UpdateExcelDatumDto): Promise<ExcelData> {
    await this.excelDataRepository.update(id, updateExcelDatumDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.excelDataRepository.delete(id);
  }

  async uploadFile(file: Express.Multer.File, department: string, year: string, week: string) {
    if (!file) {
      throw new Error('No file uploaded');
    }

    const fileExtension = file.originalname.split('.').pop();
    if (!fileExtension || !['xlsx', 'xls'].includes(fileExtension.toLowerCase())) {
      throw new Error('Invalid file type');
    }

    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheetNames = workbook.SheetNames;
    const sheet = workbook.Sheets[sheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);

    const datums: Partial<ExcelData>[] = [];
    const currentDate = new Date(); 

    for (const row of data) {
      const dataline = new ExcelData();
      dataline.department = department;
      dataline.year = parseInt(year);
      dataline.week = parseInt(week);
      dataline.uploaded_dateint = currentDate;

      // Map the row to dataline properties
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
      dataline.oif_item_eff_dt = Number.isInteger(row['OIF_Item_Eff_Dt']) ? row['OIF_Item_Eff_Dt'] : Math.round(row['OIF_Item_Eff_Dt']) ?? null;
      dataline.u_s_w_projection = typeof row['U_S_W_Projection'] === 'number' ? row['U_S_W_Projection'] : parseFloat(row['U_S_W_Projection']) ?? null;

      datums.push(dataline);
    }

    // Use EntityManager directly for transactions
    await this.entityManager.transaction(async transactionalEntityManager => {
      try {
        for (const dataline of datums) {
          const existingDatum = await transactionalEntityManager.findOne(ExcelData, {
            where: {
              department: dataline.department,
              year: dataline.year,
              week: dataline.week,
              old_nbr: dataline.old_nbr,
            },
          });

          if (existingDatum) {
            // Update existing record
            await transactionalEntityManager.update(ExcelData, existingDatum.id, {
              ...dataline,
              uploaded_dateint: new Date().getTime(),
            });
          } else {
            // Create new record
            await transactionalEntityManager.save(ExcelData, dataline);
          }
        }
      } catch (error) {
        // Rollback transaction in case of error
        throw new InternalServerErrorException('Failed to process file', error.message);
      }
    });
  }
}

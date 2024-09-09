import { IsOptional, IsString, IsInt, IsNumber } from 'class-validator';

export class CreateExcelDatumDto {
  @IsOptional()
  @IsString()
  department?: string;

  @IsOptional()
  @IsInt()
  year?: number;

  @IsOptional()
  @IsInt()
  week?: number;

  @IsOptional()
  @IsInt()
    uploaded_dateint: Date;

  @IsOptional()
  @IsString()
  old_nbr?: string;

  @IsOptional()
  @IsInt()
  vendor_num_9?: number;

  @IsOptional()
  @IsString()
  vendor_item_des?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  sub_category?: string;

  @IsOptional()
  @IsInt()
  in_transit_qty?: number;

  @IsOptional()
  @IsInt()
  on_hand_1_qty?: number;

  @IsOptional()
  @IsInt()
  in_whs_qty?: number;

  @IsOptional()
  @IsInt()
  on_order_qty?: number;

  @IsOptional()
  @IsInt()
  whs_on_hand?: number;

  @IsOptional()
  @IsInt()
  whs_on_order?: number;

  @IsOptional()
  @IsNumber()
  avg_ss?: number;

  @IsOptional()
  @IsNumber()
  unit_retail?: number;

  @IsOptional()
  @IsNumber()
  cost?: number;

  @IsOptional()
  @IsInt()
  store_outs?: number;

  @IsOptional()
  @IsInt()
  wos?: number;

  @IsOptional()
  @IsInt()
  wk_to_date?: number;

  @IsOptional()
  @IsInt()
  lastwkpos?: number;

  @IsOptional()
  @IsInt()
  l02wkpos?: number;

  @IsOptional()
  @IsInt()
  l03wkpos?: number;

  // Weekly Forecasts
  @IsOptional()
  @IsInt()
  wk01_fcst?: number;

  @IsOptional()
  @IsInt()
  wk02_fcst?: number;

  @IsOptional()
  @IsInt()
  wk03_fcst?: number;

  // Add additional weekly forecast fields up to wk52_fcst
  @IsOptional()
  @IsInt()
  wk04_fcst?: number;

  @IsOptional()
  @IsInt()
  wk05_fcst?: number;

  @IsOptional()
  @IsInt()
  wk06_fcst?: number;

  @IsOptional()
  @IsInt()
  wk07_fcst?: number;

  @IsOptional()
  @IsInt()
  wk08_fcst?: number;

  @IsOptional()
  @IsInt()
  wk09_fcst?: number;

  @IsOptional()
  @IsInt()
  wk10_fcst?: number;

  @IsOptional()
  @IsInt()
  wk11_fcst?: number;

  @IsOptional()
  @IsInt()
  wk12_fcst?: number;

  @IsOptional()
  @IsInt()
  wk13_fcst?: number;

  @IsOptional()
  @IsInt()
  wk14_fcst?: number;

  @IsOptional()
  @IsInt()
  wk15_fcst?: number;

  @IsOptional()
  @IsInt()
  wk16_fcst?: number;

  @IsOptional()
  @IsInt()
  wk17_fcst?: number;

  @IsOptional()
  @IsInt()
  wk18_fcst?: number;

  @IsOptional()
  @IsInt()
  wk19_fcst?: number;

  @IsOptional()
  @IsInt()
  wk20_fcst?: number;

  @IsOptional()
  @IsInt()
  wk21_fcst?: number;

  @IsOptional()
  @IsInt()
  wk22_fcst?: number;

  @IsOptional()
  @IsInt()
  wk23_fcst?: number;

  @IsOptional()
  @IsInt()
  wk24_fcst?: number;

  @IsOptional()
  @IsInt()
  wk25_fcst?: number;

  @IsOptional()
  @IsInt()
  wk26_fcst?: number;

  @IsOptional()
  @IsInt()
  wk27_fcst?: number;

  @IsOptional()
  @IsInt()
  wk28_fcst?: number;

  @IsOptional()
  @IsInt()
  wk29_fcst?: number;

  @IsOptional()
  @IsInt()
  wk30_fcst?: number;

  @IsOptional()
  @IsInt()
  wk31_fcst?: number;

  @IsOptional()
  @IsInt()
  wk32_fcst?: number;

  @IsOptional()
  @IsInt()
  wk33_fcst?: number;

  @IsOptional()
  @IsInt()
  wk34_fcst?: number;

  @IsOptional()
  @IsInt()
  wk35_fcst?: number;

  @IsOptional()
  @IsInt()
  wk36_fcst?: number;

  @IsOptional()
  @IsInt()
  wk37_fcst?: number;

  @IsOptional()
  @IsInt()
  wk38_fcst?: number;

  @IsOptional()
  @IsInt()
  wk39_fcst?: number;

  @IsOptional()
  @IsInt()
  wk40_fcst?: number;

  @IsOptional()
  @IsInt()
  wk41_fcst?: number;

  @IsOptional()
  @IsInt()
  wk42_fcst?: number;

  @IsOptional()
  @IsInt()
  wk43_fcst?: number;

  @IsOptional()
  @IsInt()
  wk44_fcst?: number;

  @IsOptional()
  @IsInt()
  wk45_fcst?: number;

  @IsOptional()
  @IsInt()
  wk46_fcst?: number;

  @IsOptional()
  @IsInt()
  wk47_fcst?: number;

  @IsOptional()
  @IsInt()
  wk48_fcst?: number;

  @IsOptional()
  @IsInt()
  wk49_fcst?: number;

  @IsOptional()
  @IsInt()
  wk50_fcst?: number;

  @IsOptional()
  @IsInt()
  wk51_fcst?: number;

  @IsOptional()
  @IsInt()
  wk52_fcst?: number;

  // Weekly Sales
  @IsOptional()
  @IsInt()
  wmwk01_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk02_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk03_sales?: number;

  // Add additional weekly sales fields up to wmwk52_sales
  @IsOptional()
  @IsInt()
  wmwk04_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk05_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk06_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk07_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk08_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk09_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk10_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk11_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk12_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk13_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk14_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk15_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk16_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk17_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk18_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk19_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk20_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk21_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk22_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk23_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk24_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk25_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk26_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk27_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk28_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk29_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk30_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk31_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk32_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk33_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk34_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk35_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk36_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk37_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk38_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk39_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk40_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk41_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk42_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk43_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk44_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk45_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk46_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk47_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk48_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk49_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk50_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk51_sales?: number;

  @IsOptional()
  @IsInt()
  wmwk52_sales?: number;

  // Weekly Received Orders
  @IsOptional()
  @IsInt()
  wmwk01_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk02_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk03_rec_ord?: number;

  // Add additional weekly received orders fields up to wmwk52_rec_ord
  @IsOptional()
  @IsInt()
  wmwk04_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk05_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk06_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk07_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk08_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk09_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk10_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk11_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk12_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk13_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk14_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk15_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk16_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk17_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk18_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk19_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk20_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk21_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk22_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk23_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk24_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk25_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk26_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk27_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk28_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk29_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk30_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk31_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk32_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk33_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk34_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk35_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk36_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk37_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk38_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk39_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk40_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk41_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk42_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk43_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk44_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk45_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk46_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk47_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk48_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk49_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk50_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk51_rec_ord?: number;

  @IsOptional()
  @IsInt()
  wmwk52_rec_ord?: number;

  // Weekly Instock
  @IsOptional()
  @IsInt()
  wmwk01_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk02_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk03_instk?: number;

  // Add additional weekly instock fields up to wmwk52_instk
  @IsOptional()
  @IsInt()
  wmwk04_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk05_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk06_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk07_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk08_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk09_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk10_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk11_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk12_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk13_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk14_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk15_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk16_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk17_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk18_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk19_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk20_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk21_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk22_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk23_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk24_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk25_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk26_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk27_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk28_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk29_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk30_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk31_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk32_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk33_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk34_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk35_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk36_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk37_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk38_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk39_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk40_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk41_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk42_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk43_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk44_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk45_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk46_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk47_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk48_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk49_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk50_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk51_instk?: number;

  @IsOptional()
  @IsInt()
  wmwk52_instk?: number;
}

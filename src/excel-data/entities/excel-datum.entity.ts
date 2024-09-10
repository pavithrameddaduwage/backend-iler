import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('excelnew_data')
export class ExcelData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10, nullable: true })
  department?: string;

  @Column({ type: 'int', nullable: true })
  year?: number;

  @Column({ type: 'int', nullable: true })
  week?: number;

  @Column({ type: 'timestamp' })
  uploaded_dateint: Date;
  
  @Column({ type: 'varchar', length: 10, nullable: true })
  old_nbr?: string;

  @Column({ type: 'int', nullable: true })
  vendor_num_9?: number;

  @Column({ type: 'text', nullable: true })
  vendor_item_des?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  category?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  sub_category?: string;

  @Column({ type: 'int', nullable: true })
  in_transit_qty?: number;

  @Column({ type: 'int', nullable: true })
  on_hand_1_qty?: number;

  @Column({ type: 'int', nullable: true })
  in_whs_qty?: number;

  @Column({ type: 'int', nullable: true })
  on_order_qty?: number;

  @Column({ type: 'int', nullable: true })
  whs_on_hand?: number;

  @Column({ type: 'int', nullable: true })
  whs_on_order?: number;

  @Column({ type: 'decimal', nullable: true })
  avg_ss?: number;

  @Column({ type: 'decimal', nullable: true })
  unit_retail?: number;

  @Column({ type: 'decimal', nullable: true })
  cost?: number;

  @Column({ type: 'int', nullable: true })
  store_outs?: number;

  @Column({ type: 'int', nullable: true })
  wos?: number;

  @Column({ type: 'int', nullable: true })
  wk_to_date?: number;

  @Column({ type: 'int', nullable: true })
  lastwkpos?: number;

  @Column({ type: 'int', nullable: true })
  l02wkpos?: number;

  @Column({ type: 'int', nullable: true })
  l03wkpos?: number;

  @Column({ type: 'int', nullable: true })
  wk01_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk02_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk03_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk04_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk05_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk06_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk07_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk08_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk09_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk10_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk11_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk12_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk13_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk14_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk15_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk16_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk17_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk18_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk19_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk20_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk21_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk22_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk23_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk24_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk25_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk26_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk27_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk28_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk29_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk30_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk31_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk32_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk33_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk34_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk35_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk36_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk37_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk38_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk39_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk40_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk41_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk42_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk43_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk44_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk45_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk46_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk47_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk48_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk49_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk50_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk51_fcst?: number;
  @Column({ type: 'int', nullable: true })
  wk52_fcst?: number;
  @Column({ type: 'float', nullable: true })
  wmwk01_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk02_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk03_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk04_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk05_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk06_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk07_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk08_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk09_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk10_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk11_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk12_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk13_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk14_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk15_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk16_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk17_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk18_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk19_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk20_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk21_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk22_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk23_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk24_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk25_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk26_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk27_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk28_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk29_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk30_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk31_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk32_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk33_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk34_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk35_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk36_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk37_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk38_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk39_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk40_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk41_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk42_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk43_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk44_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk45_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk46_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk47_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk48_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk49_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk50_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk51_rec_ord?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk52_rec_ord?: number;
  

  
  @Column({ type: 'float', nullable: true })
  wmwk01_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk02_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk03_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk04_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk05_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk06_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk07_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk08_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk09_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk10_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk11_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk12_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk13_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk14_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk15_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk16_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk17_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk18_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk19_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk20_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk21_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk22_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk23_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk24_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk25_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk26_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk27_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk28_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk29_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk30_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk31_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk32_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk33_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk34_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk35_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk36_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk37_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk38_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk39_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk40_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk41_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk42_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk43_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk44_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk45_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk46_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk47_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk48_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk49_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk50_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk51_instk?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk52_instk?: number;
  

  @Column({ type: 'float', nullable: true })
  wmwk01_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk02_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk03_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk04_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk05_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk06_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk07_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk08_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk09_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk10_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk11_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk12_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk13_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk14_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk15_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk16_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk17_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk18_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk19_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk20_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk21_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk22_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk23_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk24_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk25_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk26_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk27_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk28_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk29_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk30_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk31_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk32_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk33_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk34_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk35_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk36_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk37_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk38_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk39_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk40_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk41_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk42_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk43_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk44_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk45_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk46_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk47_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk48_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk49_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk50_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk51_sales?: number;
  
  @Column({ type: 'float', nullable: true })
  wmwk52_sales?: number;
  
  @Column({ type: 'text', nullable: true })
  cid?: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  channel?: string;

  @Column({ type: 'varchar', nullable: true })
  vendor_stock_id?: string;

  @Column({ type: 'float', nullable: true })
  finline_nbr?: number;

  @Column({ type: 'text', nullable: true })
  item2_des?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  rm?: string;

  @Column({ type: 'varchar', nullable: true })
  item_replenishable_ind?: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  mbm_code?: string;

  @Column({ type: 'float', nullable: true })
  per_out?: number;

  @Column({ type: 'float', nullable: true })
  per_dept_out?: number;

  @Column({ type: 'float', nullable: true })
  oif_item_eff_dt?: number;

  @Column({ type: 'float', nullable: true })
  u_s_w_projection?: number;

  @Column({ type: 'float', nullable: true })
  u_s_w_37_15?: number;

  @Column({ type: 'float', nullable: true })
  u_s_w_16_36?: number;

  @Column({ type: 'int', nullable: true })
  dept_nbr?: number;

  @Column({ type: 'bigint', nullable: true })
  upc_nbr?: number;

  @Column({ type: 'float', nullable: true })
  vnpk_qty?: number;

  @Column({ type: 'float', nullable: true })
  whpk_qty?: number;

  @Column({ type: 'varchar', length: 30, nullable: true })
  channel_type?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  category_group?: string;

  @Column({ type: 'float', nullable: true })
  dc_ss_total?: number;

  @Column({ type: 'float', nullable: true })
  dc_wos_tgt?: number;

  @Column({ type: 'float', nullable: true })
  nw_fcst?: number;

  @Column({ type: 'text', nullable: true })
  fineline_des?: string;

  @Column({ type: 'text', nullable: true })
  fineline_info?: string;

  @Column({ type: 'text', nullable: true })
  size_des?: string;

  @Column({ type: 'text', nullable: true })
  color_des?: string;

  @Column({ type: 'float', nullable: true })
  item_fineline_ss?: number;

  @Column({ type: 'float', nullable: true })
  var_1wk?: number;

  @Column({ type: 'float', nullable: true })
  var_2wk?: number;

  @Column({ type: 'float', nullable: true })
  var_3wk?: number;

  @Column({ type: 'float', nullable: true })
  abs_var_3wks_hist?: number;

  @Column({ type: 'float', nullable: true })
  vendor_nbr_8?: number;

  
  @Column({ type: 'float', nullable: true })
  last_updated?: number;
}
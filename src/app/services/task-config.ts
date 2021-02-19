import { RiceBugProjectImp } from '../model/RiceBugProject';
import { RiceBugTaskImp } from '../model/RiceBugTask';
import { Worker } from './../enum/worker.enum';

export const taskConfig = [
  // 第一回合
  new RiceBugProjectImp(1, '1.米ber Login', true,
  { current: 3, last: 1 },
  { current: 5000, last: 5000 },
  [
    new RiceBugTaskImp('1-1', '確認登入系統的規格文件', Worker.RO, 4),
    new RiceBugTaskImp('1-2', '審核相關成本', Worker.CFO, 4),
    new RiceBugTaskImp('1-3', '製作系統的login功能請找LE協助建置資料庫環境', Worker.RD, 4),
    new RiceBugTaskImp('1-4', '製作系統的login功能', Worker.CM, 4),
    new RiceBugTaskImp('1-5', '協助TO架設伺服器，並建置Proxy 協助IT Support建置資料庫', Worker.LE, 5),
    new RiceBugTaskImp('1-6', '建置資料庫, Config V1', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('1-7', '架設米ber伺服器V1', Worker.TO, 5),
  ],
  {
    config: 1,
    server: 1,
    proxy: 1
  }),
  new RiceBugProjectImp(1, '2.蝦米購物 login error', false,
  { current: -3, last: -3 },
  { current: -1000, last: -1000 }, [
    new RiceBugTaskImp('2-1', '查找login error 原因', Worker.LE, 3),
    new RiceBugTaskImp('2-2', '重啟login資料庫', Worker.ITSUPORT, 3),
  ]),

  // 第二回合
  new RiceBugProjectImp(2, '3.米ber 產品系統', true,
  { current: 3, last: 1 },
  { current: 10000, last: 10000 }, [
    new RiceBugTaskImp('3-1', '確認產品系統的規格', Worker.RO, 2),
    new RiceBugTaskImp('3-2', '審核相關成本', Worker.CFO, 2),
    new RiceBugTaskImp('3-3', '開發米 ber 產品系統', Worker.RD, 4),
    new RiceBugTaskImp('3-4', '建置米 ber 產品系統', Worker.CM, 3),
    new RiceBugTaskImp('3-5', '建置 米Ber 產品系統', Worker.LE, 4),
    new RiceBugTaskImp('3-6', '建置產品資料庫', Worker.ITSUPORT, 4),
    new RiceBugTaskImp('3-7', '配置產品資料表儲存空間', Worker.TO, 4),
  ]),
  new RiceBugProjectImp(2, '4.米ber RWD', true,
  { current: 3, last: 3 },
  { current: 5000, last: 5000 }, [
    new RiceBugTaskImp('4-1', '使系統支援RWD', Worker.RO, 3),
    new RiceBugTaskImp('4-2', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('4-3', '開發米 ber RWD', Worker.RD, 4),
    new RiceBugTaskImp('4-4', '建置米 ber RWD', Worker.CM, 4),
    new RiceBugTaskImp('4-5', '使用 NODE 14 版環境', Worker.LE, 2),
    new RiceBugTaskImp('4-6', '升級資料庫Config V2', Worker.ITSUPORT, 3),
    new RiceBugTaskImp('4-7', '升級Server v2', Worker.TO, 4),
  ],{
    config: 2,
    server: 2,
    proxy: 1
  }),
  new RiceBugProjectImp(2, '5.蝦米購物 無法輸入免運', false,
  { current: -0.5, last:  -0.5 },
  { current: -1000, last: -1000 }, [
    new RiceBugTaskImp('5-1', '查找免運優惠錯誤問題,並通知IT Support重啟商品資料庫', Worker.LE, 2),
    new RiceBugTaskImp('5-2', '標題：重啟並還原商品資料庫', Worker.ITSUPORT, 4),
  ]),
  new RiceBugProjectImp(2, '6.蝦米購物 貨到付款', false,
  { current: -1, last:  -1 },
  { current: -2000, last: -2000 }, [
    new RiceBugTaskImp('6-1', '貨到付款系統故障,通知服務器重啟', Worker.LE, 2),
    new RiceBugTaskImp('6-2', '標題：重啟貨到付款資料庫', Worker.ITSUPORT, 4),
    new RiceBugTaskImp('6-3', '標題：重啟貨到付款服務器,並通知貨到付款資料庫重啟', Worker.TO, 4),
  ]),
  new RiceBugProjectImp(2, '7.蝦米購物 找不到歷史訂單', false,
  { current: -1, last:  -1 },
  { current: -2000, last: -2000 }, [
    new RiceBugTaskImp('7-1', '客戶訂單服務故障,資料庫無法連線', Worker.LE, 2),
    new RiceBugTaskImp('7-2', '訂單資料表連線失敗,請TO重啟訂單主機', Worker.ITSUPORT, 2),
    new RiceBugTaskImp('7-3', '標題：重啟訂單主機', Worker.TO, 2),
  ]),

  // 第三回合
  new RiceBugProjectImp(3, '8.米ber 信用卡', true,
  { current: 3, last:  1 },
  { current: 10000, last: 10000 }, [
    new RiceBugTaskImp('8-1', '確認信用卡功能規格及操作流程', Worker.RO, 3),
    new RiceBugTaskImp('8-2', '審核相關成本', Worker.CFO, 2),
    new RiceBugTaskImp('8-3', '開發米 ber 線上刷卡系統', Worker.RD, 5),
    new RiceBugTaskImp('8-4', '通知 IT Suport刷卡資料庫需更新', Worker.RD, 3),
    new RiceBugTaskImp('8-5', '通知 TO 刷卡server 需更新', Worker.RD, 3),
    new RiceBugTaskImp('8-6', '建置米 ber 線上刷卡系統', Worker.CM, 4),
    new RiceBugTaskImp('8-7', '準備線上刷卡交易憑證', Worker.LE, 4),
    new RiceBugTaskImp('8-8', '建立刷卡紀錄資料庫', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('8-9', '設定刷卡Proxy，並升級Proxy 至V2', Worker.TO, 3),
  ],{
    config: 1,
    server: 1,
    proxy: 2
  }),
  new RiceBugProjectImp(3, '9.米ber 外送員後台', true,
  { current: 3, last: 3 },
  { current: 5000, last: 5000 }, [
    new RiceBugTaskImp('9-1', '確認後台目標對象以及核心功能', Worker.RO, 3),
    new RiceBugTaskImp('9-2', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('9-3', '開發米 ber 外送員後台', Worker.RD, 4),
    new RiceBugTaskImp('9-4', '開發米 ber 外送員後台薪資派發系統', Worker.RD, 4),
    new RiceBugTaskImp('9-5', '開發米 ber 外送員後台', Worker.CM, 4),
    new RiceBugTaskImp('9-6', '開發米 ber 外送員後台薪資派發系統', Worker.CM, 4),
    new RiceBugTaskImp('9-7', '建立薪資派發執行環境', Worker.LE, 3),
    new RiceBugTaskImp('9-8', '建立薪資派發資料庫環境', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('9-9', '設定薪資派發銀行連線通道', Worker.TO, 5),
  ]),
  new RiceBugProjectImp(3, '10.米ber GPS', true,
  { current: 3, last: 3 },
  { current: 10000, last: 10000 }, [
    new RiceBugTaskImp('10-1', '確認GPS的需求', Worker.RO, 3),
    new RiceBugTaskImp('10-2', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('10-3', '開發米 ber GPS 定位功能', Worker.RD, 3),
    new RiceBugTaskImp('10-4', '開發米 ber 定位外送員追蹤功能', Worker.RD, 4),
    new RiceBugTaskImp('10-5', '開發米 ber GPS 定位功能', Worker.CM, 3),
    new RiceBugTaskImp('10-6', '開發米 ber 定位外送員追蹤功能', Worker.CM, 4),
    new RiceBugTaskImp('10-7', '設定ＧＰＳ連線通道,並記錄外送員所在位置', Worker.LE, 3),
    new RiceBugTaskImp('10-8', '建立外送員位置資料庫', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('10-9', '連結全球ＧＰＳ系統', Worker.TO, 5),
  ]),
  new RiceBugProjectImp(3, '11.米ber APP', true,
  { current: 3, last: 3 },
  { current: 20000, last: 20000 }, [
    new RiceBugTaskImp('11-1', '參與使用者訪談', Worker.RO, 3),
    new RiceBugTaskImp('11-2', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('11-3', '開發米 ber APP', Worker.RD, 5),
    new RiceBugTaskImp('11-4', '申請米 ber APP於數位平台上架', Worker.RD, 5),
    new RiceBugTaskImp('11-5', '開發米 ber APP', Worker.CM, 5),
    new RiceBugTaskImp('11-6', '申請米 ber APP於數位平台上架', Worker.CM, 5),
    new RiceBugTaskImp('11-7', '建置判斷連線裝置的服務,通知TO設定伺服器判斷', Worker.LE, 3),
    new RiceBugTaskImp('11-8', '建置欄位紀錄登入裝置', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('11-9', '設定伺服器判斷連線進來的裝置', Worker.TO, 5),
  ]),
  new RiceBugProjectImp(3, '12.蝦米購物 直播', true,
  { current: 3, last: 3 },
  { current: 10000, last: 10000 }, [
    new RiceBugTaskImp('12-1', '確認直播功能的主要方向', Worker.RO, 3),
    new RiceBugTaskImp('12-2', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('12-3', '開發蝦米購物直播功能 ', Worker.RD, 4),
    new RiceBugTaskImp('12-4', '協助 TO 直播 server 需更新', Worker.RD, 1),
    new RiceBugTaskImp('12-5', '協助 LE 使用 NODE 16 版環境', Worker.RD, 1),
    new RiceBugTaskImp('12-6', '開發蝦米購物直播功能 ', Worker.CM, 4),
    new RiceBugTaskImp('12-8', '協助 TO 直播 server 需更新', Worker.CM, 1),
    new RiceBugTaskImp('12-7', '協助 LE 使用 NODE 16 版環境', Worker.CM, 1),
    new RiceBugTaskImp('12-9', '使用 NODE 14 版環境', Worker.LE, 3),
    new RiceBugTaskImp('12-10', '建置直播資料庫', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('12-11', '架設直播主機', Worker.TO, 5),
  ],{
    config: 3,
    server: 3,
    proxy: 1
  }),
  new RiceBugProjectImp(3, '13.蝦米購物 發票問題', false,
  { current: -1, last:  -1 },
  { current: -1500, last: -1500 }, [
    new RiceBugTaskImp('13-1', '擬定備案', Worker.RO, 2),
    new RiceBugTaskImp('13-2', '處理蝦米購物發票明細錯誤問題', Worker.RD, 2),
    new RiceBugTaskImp('13-3', '修正蝦米購物發票明細錯誤問題', Worker.CM, 2),
    new RiceBugTaskImp('13-4', '查找發票問題，通知TO查詢LOG', Worker.LE, 2),
    new RiceBugTaskImp('13-5', '還原發票系統資料庫', Worker.ITSUPORT, 4),
    new RiceBugTaskImp('13-6', '查詢發票系統log', Worker.TO, 4),
  ]),
  new RiceBugProjectImp(3, '14.蝦米購物 稅務系統位數不足', false,
  { current: 0, last:  0 },
  { current: -15000, last: -15000 }, [
    new RiceBugTaskImp('14-1', '與CFO確認 並通知技術協助處理', Worker.RO, 1),
    new RiceBugTaskImp('14-2', '通知技術協助處理', Worker.CFO, 1),
    new RiceBugTaskImp('14-3', '修改稅單金額位數', Worker.RD, 2),
    new RiceBugTaskImp('14-4', '修改稅單金額位數', Worker.CM, 2),
    new RiceBugTaskImp('14-5', '協助IT SUPPOER變更 稅務系統 資料庫欄位與盤點影響範圍', Worker.LE, 2),
    new RiceBugTaskImp('14-6', '變更稅務系統資料庫欄位', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('14-7', '更新稅務系統主機並重新連結最新的資料庫', Worker.TO, 4),
  ]),
  new RiceBugProjectImp(3, '15.蝦米購物 商品上架頁跑版', false,
  { current: 0, last:  0 },
  { current: -1000, last: -1000 }, [
    new RiceBugTaskImp('15-1', '與設計確認畫面', Worker.RO, 1),
    new RiceBugTaskImp('15-2', '與RO確認處理優先權', Worker.CFO, 1),
    new RiceBugTaskImp('15-3', '修正蝦米購物跑版問題', Worker.RD, 1),
    new RiceBugTaskImp('15-4', '修正蝦米購物跑版問題', Worker.CM, 1),
    new RiceBugTaskImp('15-5', '通知更新蝦米購物商品系統', Worker.LE, 4),
    new RiceBugTaskImp('15-6', '蝦米購物商品系統上版作業', Worker.TO, 5),
    new RiceBugTaskImp('15-7', '清除蝦米購物商品系統主機CDN暫存', Worker.TO, 1),
  ]),

  // 第四回合
  new RiceBugProjectImp(4, '16.蝦米ber 評價系統', true,
  { current: 3, last:  -1 },
  { current: 20000, last: 20000 }, [
    new RiceBugTaskImp('16-1', '新增評價系統 確認相關規格與功能方向', Worker.RO, 3),
    new RiceBugTaskImp('16-2', '審核評價系統的製作成本', Worker.CFO, 3),
    new RiceBugTaskImp('16-3', '建置米 ber 評價系統', Worker.RD, 5),
    new RiceBugTaskImp('16-4', '變更評價系統ＡＰＩ連線位置', Worker.RD, 3),
    new RiceBugTaskImp('16-5', '建置米 ber 評價系統', Worker.CM, 5),
    new RiceBugTaskImp('16-6', '變更評價系統ＡＰＩ連線位置', Worker.CM, 3),
    new RiceBugTaskImp('16-7', '評價系統跨平台機制', Worker.LE, 3),
    new RiceBugTaskImp('16-8', '建立評價系統資料庫', Worker.ITSUPORT, 4),
    new RiceBugTaskImp('16-9', '評價即時更新主機建置', Worker.TO, 9),
  ],{
    config: 4,
    server: 4,
    proxy: 2
  }),
  new RiceBugProjectImp(4, '17.蝦米購物 無法登入', false,
  { current: -5, last:  -5 },
  { current: -15000, last: -15000 }, [
    new RiceBugTaskImp('17-1', '修復蝦米購物登入功能', Worker.RD, 5),
    new RiceBugTaskImp('17-2', '修復蝦米購物登入功能', Worker.CM, 5),
    new RiceBugTaskImp('17-3', '修正會員登入所需資料庫密碼欄位異常', Worker.ITSUPORT, 4),
    new RiceBugTaskImp('17-4', '修正會員登入所需資料庫地址欄位異常', Worker.ITSUPORT, 4),
    new RiceBugTaskImp('17-6', '修正會員登入連線主機異常', Worker.TO, 4),
    new RiceBugTaskImp('17-7', '重啟會員登入ＬＯＧ伺服器', Worker.TO, 4),
    new RiceBugTaskImp('17-8', '重裝會員登入在線推播主機', Worker.TO, 3),
  ]),
  new RiceBugProjectImp(4, '18.米蟲員工後台 bug', false,
  { current: 0, last:  0 },
  { current: 0, last: 0 }, [
    new RiceBugTaskImp('18-1', '制定發薪備案 並通知技術協助修復後台系統', Worker.CFO, 2),
    new RiceBugTaskImp('18-2', '修復米蟲員工後台薪資系統', Worker.RD, 4),
    new RiceBugTaskImp('18-3', '重設米蟲員工後台薪資設定', Worker.RD, 4),
    new RiceBugTaskImp('18-4', '修復米蟲員工後台薪資系統', Worker.CM, 4),
    new RiceBugTaskImp('18-5', '重設米蟲員工後台薪資設定', Worker.CM, 4),
    new RiceBugTaskImp('18-6', '查找薪資派發系統BUG', Worker.LE, 2),
    new RiceBugTaskImp('18-7', '修正薪資資料庫欄位型態錯誤', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('18-8', '檢查所有薪資資料庫欄位正確性', Worker.ITSUPORT, 4),
    new RiceBugTaskImp('18-9', '重啟薪資服務主機', Worker.TO, 5),
    new RiceBugTaskImp('18-10', '套用薪資資料庫新的設定', Worker.TO, 4),
  ]),
  new RiceBugProjectImp(2, '20.更新系統以符合新稅務法規', false,
  { current: 2, last:  2 },
  { current: 5000, last: 5000 }, [
    new RiceBugTaskImp('20-1', '舊的會計系統已無法支援法規訂定的內容，將需求傳達給技術單位做開發', Worker.CFO, 2),
    new RiceBugTaskImp('20-2', '薪資系統內所得稅公司代扣的款項計算方式不符合新法規，請通知技術單位更新', Worker.CFO, 2),
    new RiceBugTaskImp('20-3', '開發新的會計系統', Worker.RD, 3),
    new RiceBugTaskImp('20-4', '更新薪資系統所得稅公司代扣邏輯', Worker.RD, 3),
    new RiceBugTaskImp('20-5', '新的會計系統上線', Worker.CM, 3),
    new RiceBugTaskImp('20-6', '更新薪資系統', Worker.CM, 3),
    new RiceBugTaskImp('20-7', '協助會計系統架設', Worker.LE, 2),
    new RiceBugTaskImp('20-8', '協助更新薪資系統', Worker.LE, 2),
    new RiceBugTaskImp('20-9', '新增會計系統資料庫', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('20-10', '增加薪資系統資料庫欄位', Worker.ITSUPORT, 3),
    new RiceBugTaskImp('20-11', '新增會計系統主機', Worker.TO, 5),
    new RiceBugTaskImp('20-12', '薪資系統資料庫增加儲存空間', Worker.TO, 3),
  ]),
  new RiceBugProjectImp(2, '21.薪資系統異常，加班費計算錯誤', false,
  { current: -2, last:  -2 },
  { current: -3000, last: -3000 }, [
    new RiceBugTaskImp('21-1', '修正薪資系統異常問題', Worker.LE, 2),
    new RiceBugTaskImp('21-2', '查看薪資系統異常日誌', Worker.ITSUPORT, 3),
    new RiceBugTaskImp('21-3', '檢查薪資系統主機狀況與線路', Worker.TO, 2),
  ]),
  new RiceBugProjectImp(3, '22.米 Ber 外送員獎金系統', false,
  { current: 3, last:  3 },
  { current: 10000, last: 10000 }, [
    new RiceBugTaskImp('22-1', '審核相關成本，並通知技術單位建立米 Ber 外送員獎金系統', Worker.CFO, 2),
    new RiceBugTaskImp('22-2', '審核相關成本，並通知技術單位更新薪資系統功能，需額外計算外送員獎金', Worker.CFO, 2),
    new RiceBugTaskImp('22-3', '開發米 ber 外送員獎金系統', Worker.RD, 3),
    new RiceBugTaskImp('22-4', '薪資系統新增外送員獎金計算邏輯', Worker.RD, 3),
    new RiceBugTaskImp('22-5', '開發米 ber 外送員獎金系統', Worker.CM, 3),
    new RiceBugTaskImp('22-6', '薪資系統新增外送員獎金計算邏輯', Worker.CM, 2),
    new RiceBugTaskImp('22-7', '外送員獎金系統上線，需要新建資料庫與升級 Server 版本，通知 IT Support 與 TO', Worker.LE, 2),
    new RiceBugTaskImp('22-8', '薪資系統新增外送員獎金計算邏輯，資料庫需新增獎金欄位，機器需重啟，通知 IT Suport 與 TO', Worker.LE, 2),
    new RiceBugTaskImp('22-9', '獎金系統資料庫 升級 Config v.3', Worker.ITSUPORT, 3),
    new RiceBugTaskImp('22-10', '增加薪資系統資料庫欄位', Worker.ITSUPORT, 3),
    new RiceBugTaskImp('22-11', '架設獎金系統主機 升級 Server v.3', Worker.TO, 4),
    new RiceBugTaskImp('22-12', '重啟薪資系統主機', Worker.TO, 3),
  ],{
    config: 3,
    server: 3,
    proxy: 1
  }),
  new RiceBugProjectImp(3, '23.米 Ber 商家活動系統', false,
  { current: 3, last:  3 },
  { current: 15000, last: 15000 }, [
    new RiceBugTaskImp('23-1', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('23-2', '開發米 ber商家活動系統', Worker.RD, 3),
    new RiceBugTaskImp('23-3', '開發米 ber商家活動系統', Worker.CM, 4),
    new RiceBugTaskImp('23-4', '米 ber商家活動系統建置', Worker.LE, 3),
    new RiceBugTaskImp('23-5', '建立商家活動系統資料庫', Worker.ITSUPORT, 3),
    new RiceBugTaskImp('23-6', '設定商家線路，並升級 Proxy 至 v.3', Worker.TO, 3),
  ],{
    config: 1,
    server: 1,
    proxy: 3
  }),
  new RiceBugProjectImp(2, '24.蝦米購物境外交易系統', false,
  { current: 2, last:  2 },
  { current: 10000, last: 10000 }, [
    new RiceBugTaskImp('24-1', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('24-2', '開發蝦米購物境外交易系統', Worker.RD, 3),
    new RiceBugTaskImp('24-3', '開發蝦米購物境外交易系統', Worker.CM, 3),
    new RiceBugTaskImp('24-4', '境外交易系統建置，通知 TO 更新 Server 版本', Worker.LE, 2),
    new RiceBugTaskImp('24-5', '建立境外交易系統資料庫 升級資料庫 Config v.2', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('24-6', '架設境外交易主機 升級 Server v.2', Worker.TO, 2),
  ],{
    config: 2,
    server: 2,
    proxy: 1
  }),
  new RiceBugProjectImp(3, '25.米倉公司財務報表異常', false,
  { current: -5, last:  -5 },
  { current: -5000, last: -5000 }, [
    new RiceBugTaskImp('25-1', '修正財務報表', Worker.LE, 2),
    new RiceBugTaskImp('25-2', '清除快取資料，手動重建備份', Worker.ITSUPORT, 2),
    new RiceBugTaskImp('25-3', '重啟主機', Worker.TO, 2),
  ]),
  new RiceBugProjectImp(3, '26.蝦米購物客服業務轉接包商', false,
  { current: 2, last:  2 },
  { current: 5000, last: 5000 }, [
    new RiceBugTaskImp('26-1', '客服業務轉由包商處理，需重新計算客服相關業務預算，審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('26-2', '開發語音客服與文字客服轉接外包商之系統', Worker.RD, 3),
    new RiceBugTaskImp('26-3', '開發語音客服與文字客服轉接外包商之系統', Worker.CM, 3),
    new RiceBugTaskImp('26-4', '協助轉接包商系統', Worker.LE, 3),
    new RiceBugTaskImp('26-5', '包商系統相容性檢測', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('26-6', '建立包商系統線路', Worker.TO, 5),
  ]),
  new RiceBugProjectImp(3, '27.MIJI 新增刷卡分期付款功能', false,
  { current: 2, last:  2 },
  { current: 10000, last: 10000 }, [
    new RiceBugTaskImp('27-1', '新增刷卡分期付款功能 確認付款頁面操作流程', Worker.RO, 3),
    new RiceBugTaskImp('27-2', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('27-3', '蝦米購物刷卡分期付款功能', Worker.RD, 4),
    new RiceBugTaskImp('27-4', '蝦米購物刷卡分期付款功能', Worker.CM, 5),
    new RiceBugTaskImp('27-5', '蝦米購物刷卡分期付款功能連動金融單位，軟體需升級至 lv.3，伺服器需重新啟動', Worker.LE, 2),
    new RiceBugTaskImp('27-6', '訂單資料庫新增欄位', Worker.ITSUPORT, 2),
    new RiceBugTaskImp('27-7', '建立銀行分期網路通道', Worker.TO, 2),
  ]),
  new RiceBugProjectImp(1, '28.MIJI 網路商店部份商品價格標示錯誤', false,
  { current: -2, last:  -2 },
  { current: -15000, last: -15000 }, [
    new RiceBugTaskImp('28-1', '修正 MIJI 網路商店部份商品價格，需通知 it support 清除伺服器快取資料，並通知 TO 手動備份資料庫資料', Worker.LE, 3),
    new RiceBugTaskImp('28-2', '清除 MIJI 網路商店伺服器快取資料，手動備份資料', Worker.ITSUPORT, 2),
    new RiceBugTaskImp('28-3', '檢測主機狀況', Worker.TO, 2),
  ]),
  new RiceBugProjectImp(3, '29.MIJI 即期商品優惠出清方案', false,
  { current: 1, last:  1 },
  { current: 10000, last: 10000 }, [
    new RiceBugTaskImp('29-1', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('29-2', 'MIJI 庫存系統新增商品即期時間', Worker.RD, 2),
    new RiceBugTaskImp('29-3', 'MIJI 實體店面與網路商店之銷售系統自動修改即期商品價格', Worker.RD, 2),
    new RiceBugTaskImp('29-4', 'MIJI 庫存系統新增商品即期時間', Worker.CM, 3),
    new RiceBugTaskImp('29-5', 'MIJI 實體店面與網路商店之銷售系統自動修改即期商品價格', Worker.CM, 3),
    new RiceBugTaskImp('29-6', 'MIJI 庫存系統新增商品即期時間資訊，資料庫需新增欄位並重啟', Worker.LE, 1),
    new RiceBugTaskImp('29-7', 'MIJI 銷售系統自動修改即期商品價格功能部署，資料庫需新增欄位並加大儲存空間', Worker.LE, 1),
    new RiceBugTaskImp('29-8', 'MIJI 庫存系統商品資料庫新增即期時間欄位', Worker.ITSUPORT, 3),
    new RiceBugTaskImp('29-9', 'MIJI 銷售系統資料庫新增優惠價格欄位', Worker.ITSUPORT, 3),
    new RiceBugTaskImp('29-10', '重啟 MIJI 庫存系統資料庫機器', Worker.TO, 3),
    new RiceBugTaskImp('29-11', 'MIJI 資料庫機器增加儲存空間', Worker.TO, 3),
  ]),
  new RiceBugProjectImp(3, '30.MIJI 交易資料遺失', false,
  { current: -1, last:  -1 },
  { current: -15000, last: -15000 }, [
    new RiceBugTaskImp('30-1', '查看服務異常日誌', Worker.ITSUPORT, 2),
    new RiceBugTaskImp('30-2', '檢測主機線路', Worker.TO, 2),
  ]),
  new RiceBugProjectImp(4, '31.MIJI 網路商店無法更改或取消訂單', false,
  { current: -1.5, last:  -1.5 },
  { current: -10000, last: -10000 }, [
    new RiceBugTaskImp('31-1', '修正訂單系統異常問題，通知 TO 修正連線問題，並通知 IT support 檢測軟體版本', Worker.LE, 2),
    new RiceBugTaskImp('31-2', '檢測軟體版本', Worker.ITSUPORT, 2),
    new RiceBugTaskImp('31-3', '恢復主機線路卡頓問題', Worker.TO, 5),
  ]),
  new RiceBugProjectImp(4, '32.MIJI POS 系統支援行動支付', false,
  { current: 2, last:  2 },
  { current: 10000, last: 10000 }, [
    new RiceBugTaskImp('32-1', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('32-2', '更新 MIJI POS 系統支援行動支付', Worker.RD, 2),
    new RiceBugTaskImp('32-3', '更新 MIJI POS 系統支援行動支付', Worker.CM, 3),
    new RiceBugTaskImp('32-4', '更新 MIJI POS 系統支援行動支付', Worker.LE, 2),
    new RiceBugTaskImp('32-5', '新增行動支付資料表 升級資料庫 Config v.5', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('32-6', '建立金融機構行動支付連線 升級 Proxy v.5', Worker.TO, 2),
  ],{
    config: 5,
    server: 1,
    proxy: 5
  }),
  new RiceBugProjectImp(4, '33.MIJI 管理系統新增員工績效圖表', false,
  { current: 0, last:  0 },
  { current: 5000, last: 5000 }, [
    new RiceBugTaskImp('33-1', 'MIJI 管理系統新增員工績效圖表', Worker.RO, 3),
    new RiceBugTaskImp('33-2', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('33-3', '開發 MIJI 管理系統新增員工績效圖表', Worker.RD, 4),
    new RiceBugTaskImp('33-4', '開發 MIJI 管理系統新增員工績效圖表', Worker.CM, 4),
    new RiceBugTaskImp('33-5', '建立管理系統員工績效圖表相關服務', Worker.LE, 2),
    new RiceBugTaskImp('33-6', '管理系統資料庫新增績效相關欄位', Worker.ITSUPORT, 3),
    new RiceBugTaskImp('33-7', '建立管理系統績效考核服務主機', Worker.TO, 5),
  ]),
  new RiceBugProjectImp(4, '34.米倉公司員工福利折扣代碼', false,
  { current: 0, last:  0 },
  { current: 5000, last: 5000 }, [
    new RiceBugTaskImp('34-1', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('34-2', '米倉公司內部員工系統新增福利查詢功能', Worker.RD, 2),
    new RiceBugTaskImp('34-3', '米倉公司會計系統新編列員工福利折扣預算項目', Worker.RD, 3),
    new RiceBugTaskImp('34-4', '米倉公司內部員工系統新增福利查詢功能', Worker.CM, 4),
    new RiceBugTaskImp('34-5', '米倉公司會計系統新編列員工福利折扣預算項目', Worker.CM, 3),
    new RiceBugTaskImp('34-6', '部署查詢功能', Worker.LE, 1),
    new RiceBugTaskImp('34-7', '更新會計系統', Worker.LE, 1),
    new RiceBugTaskImp('34-8', '內部員工系統資料庫新增福利折扣相關欄位', Worker.ITSUPORT, 3),
    new RiceBugTaskImp('34-9', '會計系統資料庫新增福利預算欄位', Worker.ITSUPORT, 3),
    new RiceBugTaskImp('34-10', '擴充內部員工系統主機記憶體', Worker.TO, 3),
    new RiceBugTaskImp('34-11', '會計系懂主機重啟', Worker.TO, 2),
  ]),
  new RiceBugProjectImp(4, '35.米倉公司形象網站異常', false,
  { current: -2, last:  -2 },
  { current: -20000, last: -20000 }, [
    new RiceBugTaskImp('35-1', '查看服務異常日誌', Worker.ITSUPORT, 2),
    new RiceBugTaskImp('35-2', '主機線路異常，解決主機線路問題', Worker.TO, 2),
  ]),
  new RiceBugProjectImp(4, '36.黑米宅急便貨物系統異常', false,
  { current: -0.5, last:  -0.5 },
  { current: -15000, last: -15000 }, [
    new RiceBugTaskImp('36-1', '資料庫存取異常，恢復資料庫運作', Worker.ITSUPORT, 2),
    new RiceBugTaskImp('36-2', '檢查主機線路', Worker.TO, 2),
  ]),
  new RiceBugProjectImp(4, '37.黑米宅急便新增貨到付款服務', false,
  { current: 3, last:  3 },
  { current: 15000, last: 15000 }, [
    new RiceBugTaskImp('37-1', '新增貨到付款服務 確認訂單運送項目資訊', Worker.RO, 3),
    new RiceBugTaskImp('37-2', '訂定帳務流動方式，審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('37-3', '黑米宅急便寄貨系統新增貨到付款選項', Worker.RD, 2),
    new RiceBugTaskImp('37-4', '黑米宅急便金流系統新增代收款項功能', Worker.RD, 2),
    new RiceBugTaskImp('37-5', '黑米宅急便寄貨系統新增貨到付款選項', Worker.CM, 5),
    new RiceBugTaskImp('37-6', '黑米宅急便金流系統新增代收款項功能', Worker.CM, 5),
    new RiceBugTaskImp('37-7', '更新寄貨系統', Worker.LE, 2),
    new RiceBugTaskImp('37-8', '金流系統新增代收款項功能', Worker.LE, 1),
    new RiceBugTaskImp('37-9', '更新資料庫', Worker.ITSUPORT, 2),
    new RiceBugTaskImp('37-10', '檢查系統軟體版本', Worker.ITSUPORT, 3),
    new RiceBugTaskImp('37-11', '擴充資料庫儲存空間', Worker.TO, 3),
    new RiceBugTaskImp('37-12', '擴充伺服器主機 升級 Proxy v.5', Worker.TO, 3),
  ],{
    config: 1,
    server: 1,
    proxy: 5
  }),
  new RiceBugProjectImp(4, '38.黑米宅急便外包商系統異常', false,
  { current: -0.5, last:  -0.5 },
  { current: -10000, last: -10000 }, [
    new RiceBugTaskImp('38-1', '資料庫存取異常，恢復資料庫運作', Worker.ITSUPORT, 2),
    new RiceBugTaskImp('38-2', '檢查主機線路', Worker.TO, 3),
  ]),
  new RiceBugProjectImp(4, '39.黑米宅急便特別節日員工薪資加給', false,
  { current: 0, last:  0 },
  { current: 15000, last: 15000 }, [
    new RiceBugTaskImp('39-1', '擬定加給計算方式，審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('39-2', '更新薪資系統計算特別節日加給邏輯', Worker.RD, 2),
    new RiceBugTaskImp('39-3', '更新薪資系統計算特別節日加給邏輯', Worker.CM, 2),
    new RiceBugTaskImp('39-4', '薪資系統新增加給邏輯', Worker.LE, 1),
    new RiceBugTaskImp('39-5', '薪資系統資料庫新增加給欄位', Worker.ITSUPORT, 3),
    new RiceBugTaskImp('39-6', '擴充薪資系統主機記憶體', Worker.TO, 4),
  ]),
  new RiceBugProjectImp(4, '40.黑米宅急便新增退貨代收服務', false,
  { current: 0, last:  0 },
  { current: 15000, last: 15000 }, [
    new RiceBugTaskImp('40-1', '確認退貨代收服務流程', Worker.RO, 4),
    new RiceBugTaskImp('40-2', '擬定退貨代收費用計算方式', Worker.CFO, 4),
    new RiceBugTaskImp('40-3', '貨運系統新增退貨代收服務邏輯', Worker.RD, 2),
    new RiceBugTaskImp('40-4', '貨運系統新增退貨代收服務邏輯', Worker.CM, 2),
    new RiceBugTaskImp('40-5', '貨運系統新增退貨代收服務', Worker.LE, 2),
    new RiceBugTaskImp('40-6', '建立退貨代收服務資料庫', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('40-7', '建立退貨代收服務主機', Worker.LE, 4),
  ]),
  new RiceBugProjectImp(4, '41.黑米宅急便商家系統運費計算異常', false,
  { current: -1, last:  -1 },
  { current: -5000, last: -5000 }, [
    new RiceBugTaskImp('41-1', '排除異常問題', Worker.LE, 2),
    new RiceBugTaskImp('41-2', '清除快取資料，手動備份新資訊', Worker.ITSUPORT, 2),
    new RiceBugTaskImp('41-3', '檢測主機狀況', Worker.TO, 2),
  ]),
  new RiceBugProjectImp(3, '42.黑米宅急便集運優惠活動', false,
  { current: 0, last:  0 },
  { current: 10000, last: 10000 }, [
    new RiceBugTaskImp('42-1', '擬定集運運費計算方式，審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('42-2', '貨運系統新增集運服務邏輯', Worker.RD, 2),
    new RiceBugTaskImp('42-3', '貨運系統新增集運服務邏輯', Worker.CM, 2),
    new RiceBugTaskImp('42-4', '建置貨運系統集貨服務', Worker.LE, 2),
    new RiceBugTaskImp('42-5', '新增集運資料庫 升級資料庫 Config v.4', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('42-6', '建立集運服務主機 升級 Proxy v.4 升級 Server v.4', Worker.TO, 4),
  ],{
    config: 4,
    server: 4,
    proxy: 4
  }),
  new RiceBugProjectImp(4, '43.黑米宅急便 24 小時到貨服務', false,
  { current: 0, last:  0 },
  { current: 10000, last: 10000 }, [
    new RiceBugTaskImp('43-1', '確認 24 小時到貨服務相關內容 確認訂單付款選項資訊', Worker.RO, 3),
    new RiceBugTaskImp('43-2', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('43-3', '貨運系統新增到貨時間資訊', Worker.RD, 4),
    new RiceBugTaskImp('43-4', '貨運系統新增到貨時間資訊', Worker.CM, 4),
    new RiceBugTaskImp('43-5', '建立 24 小時到貨服務相關邏輯', Worker.LE, 2),
    new RiceBugTaskImp('43-6', '更新資料庫 升級資料庫 Config v.5', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('43-7', '擴充伺服器主機 升級 Server v.5', Worker.LE, 4),
  ],{
    config: 5,
    server: 5,
    proxy: 1
  }),
  new RiceBugProjectImp(3, '44.黑米宅急便特約商家運費優惠活動', false,
  { current: 0, last:  0 },
  { current: 5000, last: 5000 }, [
    new RiceBugTaskImp('44-1', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('44-2', '貨運系統新增特約商家資訊', Worker.RD, 3),
    new RiceBugTaskImp('44-3', '貨運系統新增特約商家資訊', Worker.CM, 3),
    new RiceBugTaskImp('44-4', '建立特約商家資訊', Worker.LE, 2),
    new RiceBugTaskImp('44-5', '新增特約商家資料庫 升級資料庫 Config v.4', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('44-6', '建立特約商家連線 升級 Proxy v.4', Worker.TO, 3),
  ],{
    config: 4,
    server: 1,
    proxy: 4
  }),
  new RiceBugProjectImp(4, '45.蝦米購物雙 11 免運活動', false,
  { current: 0, last:  0 },
  { current: 5000, last: 5000 }, [
    new RiceBugTaskImp('45-1', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('45-2', '更新貨運系統特殊節日運費計算邏輯', Worker.RD, 2),
    new RiceBugTaskImp('45-3', '貨運系統新增集運服務邏輯', Worker.CM, 2),
    new RiceBugTaskImp('45-4', '更新運費計算方式', Worker.LE, 2),
    new RiceBugTaskImp('45-5', '更新運費資料表 升級資料庫 Config v.5', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('45-6', '擴充伺服器主機 升級 Server v.5', Worker.TO, 4),
  ],{
    config: 5,
    server: 5,
    proxy: 1
  }),
  new RiceBugProjectImp(3, '46.米 Ber  邀請活動', false,
  { current: 0, last:  0 },
  { current: 5000, last: 5000 }, [
    new RiceBugTaskImp('46-1', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('46-2', '用戶系統新增米 Ber  邀請碼邏輯', Worker.RD, 2),
    new RiceBugTaskImp('46-3', '更新貨運系統特殊節日運費計算邏輯', Worker.CM, 2),
    new RiceBugTaskImp('46-4', '建置邀請碼相關邏輯', Worker.LE, 2),
    new RiceBugTaskImp('46-5', '用戶資料庫新增邀請碼欄位 升級資料庫 Config v.3', Worker.ITSUPORT, 5),
    new RiceBugTaskImp('46-6', '擴充伺服器主機 升級 Server v.2', Worker.TO, 4),
  ],{
    config: 3,
    server: 2,
    proxy: 1
  }),
  new RiceBugProjectImp(2, '47.米倉公司形象網站更新', false,
  { current: 0, last:  0 },
  { current: 5000, last: 5000 }, [
    new RiceBugTaskImp('47-1', '審核相關成本', Worker.CFO, 3),
    new RiceBugTaskImp('47-2', '更新米倉公司形象網站', Worker.RD, 3),
    new RiceBugTaskImp('47-3', '用戶系統新增米 ber 邀請碼邏輯', Worker.CM, 2),
    new RiceBugTaskImp('47-4', '建立新形象網站', Worker.LE, 2),
    new RiceBugTaskImp('47-5', '檢測軟體版本', Worker.ITSUPORT, 3),
    new RiceBugTaskImp('47-6', '建立新形象網頁伺服器主機線路', Worker.TO, 5),
  ]),
];
export const trainingConfig  = new RiceBugProjectImp(2, '19.員工訓練', false,
  { current: 3, last: 3 },
  { current: 10000, last: 10000 }, [
    new RiceBugTaskImp('19-1', '對 IT Support 進行技術交流', Worker.RD, 2),
    new RiceBugTaskImp('19-2', '更新米倉公司形象網站', Worker.CM, 3),
    new RiceBugTaskImp('19-3', '進行技術交流訓練', Worker.LE, 2),
    new RiceBugTaskImp('19-4', '1. 與 AD 進行技術交流 2.對 TO 進行技術交流', Worker.ITSUPORT, 4),
    new RiceBugTaskImp('19-7', '與 IT support 進行技術交流', Worker.TO, 2),
  ]
  );

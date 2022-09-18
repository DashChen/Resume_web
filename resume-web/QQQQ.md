## QQQQ
1. 登入後如何取得登入者相關資訊?
   取得使用者資料 (*請參考5.2.4) {GET} api/app/user-datas/GetDataByAccountId  << swagger 上不存在
   或者查看 swagger {GET} /api/app/user-datas/{id} << 內容沒有 登入者姓名、信箱等等資訊
   更或者 swagger 上是不顯示 取得使用者資料API 呢?
2. 簡訊樣板/信件樣板 是使用 SystemCode 還是 code 呢?
3. 職缺項目可否單次刪除多筆呢? 如果是單筆，是否有時間內請求上限的阻擋呢? 我該停多久再次請求處理?
4. 履歷管理的 填寫狀態 有哪些呢? 對應的 code 或 key 是?
5. 履歷管理列表的 填寫狀態 = 發送狀態(sendStatus) ? 人員的姓名在 schema 中沒有，該如何取得?
6. 履歷管理的新增人員要呼叫哪一支API?
7. 履歷管理的新增API {POST} api/app/resume-invitations，
    履歷代碼(ResumeCode)、發送類型(SendType)、邀約時間(起)(DateA)、邀約時間(迄)(DateD)要填啥?
8. 後續遇到再發問


1.抱歉，這邊不小心把這api註解掉了，晚點會在把他更新上去。
2.用code
3.我晚點一併更新一個api來做批次刪除，companyjob/deleteList
4.share-code/GetWriteStatusList
5.填寫狀態為writeStatus，姓名部分我在更新一下結構
6.新增人員就是新增履歷管理的Api
7.這幾個資料目前都可以先不用傳，我會在調整一下傳入的結構
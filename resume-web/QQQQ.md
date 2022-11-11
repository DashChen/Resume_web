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

已處理
註冊
-- 藍色字和灰色字沒有相同高度
-- 密碼低於8碼沒有顯示提示
重設密碼
-- 輸入後按確認沒有反應
管理者登入
-- 登入後登出，就會一直 Loading，但又可以按別的東西
登入
-- 記住我沒有運作 << 記住我，是代表不用登入頁直接進入頁面，而不是直接輸入帳密，那是瀏覽器的功能


疑問?
-- 驗證碼已發送畫面，按鈕文字是依照 Figma 處理，那需要調整成?
-- 可以說明一下 第三方登入的流程嗎? 我看 third-party/Login 其中，"userCode"、"thirdPartyAccountCode"、"thirdPartyTypeCode" 該怎樣填值呢?




https://cloud.jbhr.com.tw/Resume/api/app/resume-invitations  << Http 500

履歷管理
取得職缺管理 (*請參考5.2.2-2) {GET} api/app/company-jobs/GetListByCompanyId << 取不到資料，因為原資料沒有 componyId



上面兩個基本上是沒有太大的差異，信件樣板就查mailtpl，郵件樣板就呼叫smstpl，寫入時幫我將id填入code
選擇人員的部分api中值是id，顯示就顯示name
網址填寫期限為必填，是DateA和DateD沒錯
發送與否是根據上面的樣板是否有選擇，如果信件樣板有選擇的話，就發送信件，沒選擇則不發送，郵件也是


會員管理問題 如何確認
1. 信箱綁定、驗證狀態? 信箱解綁要呼叫哪隻 API ?
2. 手機綁定、驗證狀態? 手機解綁要呼叫哪隻 API ?
3. 三方登入的綁定判斷?
4. 沒有更新身分證的API
5. 綁定成功後是否需要跳出提醒框?


HR履歷管理
1. 新增人員的身分證對應的 key 是 idno? API 中沒有
2. 單筆紀錄的複製連結，要取怎樣的key 或怎樣組成?
3. 履歷管理紀錄應該要額外提供 jobName 對應的ID，否則創建職缺目前可以重名，編輯上沒法對應到正確的 jobName

USER 履歷管理
1. 缺少編輯專業證照API
2. 編輯附件的連結分享 LINK PREVIEW 需要後端抓取目標網址的 meta property: og:title、og:image、og:description 等三項提供給前端，因為前端瀏覽器有 CORS 阻擋
3. 學歷中的學校該如何取得?

USER 履歷管理
1. 履歷表 (query會帶入invitationCode，每個檔案資料名IsFinish為已完成和未完成的判斷)
   Q: 新建的時候 invitationCode 從哪來?
2. 取得ResumeCode (*請參考5.1.6-5) {GET} api/app/resume-mains/GetListByAccountId
	取第一筆的ID當作ResumeCode下方用到ResumeCode用此值帶入
   Q: 第一筆會是未被使用的?
3. Q: 基本資料等各區塊更新，要在何時更新? 送出履歷表? 還是編輯完關閉popup後?
4. Q: 工作經歷可以多筆? 可以刪除?
5. Q: 取得專業證照分類列表的API?
6. Q: 學歷中的學校(海內外)該如何取得?



目前來說，第三方登入時的部分，我們的做法是先由您那邊呼叫第三方的連結（client資訊我們會提供），呼叫完後會取得code，用code去呼叫我這邊的api，login的話會把token回傳。

UserCode先不用傳
thirdPartyAccountCode為呼叫回傳的code
thirdPartyTypeCode為第三方的名稱"Google"，"Line"，"Facebook"

如果有更好的作法也請提供

智生 (2022/11/03) : 第三方綁定 (*請參考5.1.5-1) {GET} api/app/third-parties/Auth
第三方登入 (*請參考5.1.2-3) {GET} api/app/third-parties/Login
解除綁定 (*請參考5.1.5-1) {GET} api/app/third-parties/UnAuth
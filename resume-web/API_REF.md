註冊
註冊 (*請參考5.1.1-4) api/app/register/resume-register
驗證碼簡訊發送 (*請參考5.1.1-1、5.1.1-3、5.1.4-2、5.1.5-11) api/app/register/resume-send-verify-code
驗證碼驗證 (*請參考5.1.1-2、5.1.5-11) api/app/register/confirm-verify-code
重設密碼 (*請參考5.1.4-5) api/app/register/resume-reset-password
驗證碼信件發送 (*請參考5.1.4-1) api/app/register/resume-mail-verify-code



職缺管理
新增職缺管理 (*請參考5.2.5-1) {POST} api/app/company-jobs
修改職缺管理 (*請參考5.2.5-3) {PUT} api/app/company-jobs/{ID}
取得郵件樣板 (*請參考5.2.5-2) {Get} api/app/S-mStpls
取得信件樣板 (*請參考5.2.5-2、5.1.6-6) {Get} api/app/mail-tpls



履歷管理
新增履歷管理 (*請參考5.2.2-1) {POST} api/app/resume-invitations
修改履歷系統 (*請參考5.2.2-3) {PUT} api/app/resume-invitations/{ID}
取得職缺管理 (*請參考5.2.2-2) {GET} api/app/company-jobs/GetListByCompanyId
取得階段 (*請參考5.2.2-2、5.1.6-4) {GET} api/app/share-codes/GetStageList
取得狀態 (*請參考) {GET} /api/app/share-codes/GetWriteStatusList
選擇人員 (*請參考5.2.2-5) {GET} api/app/resume-invitations/GetListByCompanyId
新增信件 (*請參考5.2.2-6) {POST} api/app/mail-quenes
新增郵件 (*請參考5.2.2-6) {POST} api/app/s-mSquenes



信件管理
取得信件管理 (*請參考5.2.3-1) {GET} api/app/mail-quenes/GetListByCompanyId
取得簡訊管理 (*請參考5.2.3-5) {GET} api/app/s-mSquenes/GetListByCompanyId
信件重送、信件發送 (*請參考5.2.3-2、5.2.3-6) {GET} api/app/mail-quenes/ReSend
簡訊重送、簡訊發送 (*請參考5.1.6-5) {GET} api/app/s-mSquenes/ReSend



會員管理
取得使用者資料 (*請參考5.2.4) {GET} api/app/user-datas/GetDataByAccountId
更改使用者姓名 (*請參考5.2.4) {PUT} api/app/user-datas/UpdateName
更改使用者信箱 (*請參考5.2.4) {PUT} api/app/user-datas/UpdateEmail
更改使用者手機 (*請參考5.2.4) {PUT} api/app/user-datas/UpdatePhone
更改使用者生日 (*請參考5.2.4) {PUT} api/app/user-datas/UpdateBirthday
密碼修改 (*請參考5.2.4) {POST}api/account/my-profile/change-password




履歷表
簡訊是否開啟 (*請參考5.1.6-5) {PUT} api/app/s-mSquenes/UpdateOpenedStatus
信件是否開啟 (*請參考5.1.6-5) {PUT} api/app/mail-quenes/UpdateOpenedStatus
取得基本資料 (*請參考5.1.6-1) {GET} api/app/base-basics/GetListByResumeCode
取得附件 (*請參考5.1.6-1) {GET} api/app/appendices/GetListByResumeCode
新增附件 (*請參考5.1.6-1) {POST} api/app/appendices
取得自傳 (*請參考5.1.6-1) {GET} api/app/autobiographies/GetListByResumeCode
新增自傳 (*請參考5.1.6-1) {POST} api/app/autobiographies
取得證照 (*請參考5.1.6-1) {GET} api/app/licenses/GetListByResumeCode
新增證照 (*請參考5.1.6-1) {POST} api/app/licenses
上傳大頭貼 (*請參考5.1.6-1) {POST} api/app/register/set-profile-picture
取得大頭貼 (*請參考5.1.6-1) {GET} api/app/register/profile-picture



第三方登入
第三方綁定 (*請參考5.1.5-1) {GET} api/app/third-party/Auth
第三方登入 (*請參考5.1.2-3) {GET} api/app/third-party/Login
解除綁定 (*請參考5.1.5-1) {GET} api/app/third-party/UnAuth
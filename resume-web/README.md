# ResumeWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## API Swagger url
https://cloud.jbhr.com.tw/Resume/swagger/index.html

## Generate api via swagger scheme.
```powershell
npx swagger-typescript-api -p ./swagger.json -o ./src/app/core/models
```

## Add callback to generate Api file(Path: /src/app/core/models/Api.ts)
```powershell
# replace
export class HttpClient<SecurityDataType = unknown>
# to
export class HttpClient<SecurityDataType = unknown> extends ApiExtra

# add callback to function start
public request = ...
...
{
    if (typeof this.beforeRequest === 'function') {
      this.beforeRequest();
    }
    ...
    # add callback to function end
    if (typeof this.afterRequest === 'function') {
        this.afterRequest();
    }
    # end area
    if (!response.ok) throw data;
    return data;
}

```


5.1 使用者前台功能需求
    5.1.1 註冊
    5.1.2 系統登入
    5.1.3 登入後選單列表
    5.1.4 忘記/修改密碼
    5.1.5 會員管理
    5.1.6 履歷管理

5.2 後台功能需求
    5.2.1 管理者登入
    5.2.2 履歷管理
    5.2.3 信件/簡訊管理
    5.2.4 會員管理
    5.2.5 職缺管理
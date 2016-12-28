# Angular Web Bluetooth Starter
![image](https://cloud.githubusercontent.com/assets/1699357/21523148/b843ceb0-cd0b-11e6-974a-50294a797b27.png)


## Description

This starter uses the [Angular Bluetooth module](https://github.com/manekinekko/angular-web-bluetooth).

## 1) import the `WebBluetoothModule` module

```typescript
import { NgModule } from '@angular/core';
import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';

@NgModule({
  imports: [
    //...,
    WebBluetoothModule.forRoot()
  ],
  //...
})
export class AppModule { }

```

## 2) use it in your service

See the battery-level.service file.
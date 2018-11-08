import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [
    AuthService,
    UserService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('core module has been loaded. import core module in the app module only.');
    }
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// to build template driven forms (includes NgModel)
import { FormsModule } from '@angular/forms'

// to talk to a server
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MemberModel } from './models/member.model';
import { MemberService } from './services/member.service';
import { MemberComponent } from './member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MemberModel,
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

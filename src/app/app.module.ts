import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyPipePipe } from './my-pipe.pipe';
import {OwnerService} from './owner.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import {myrouter} from './app.routes';
import { ErrorComponent } from './error/error.component';
import { StudentsComponent } from './students/students.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { BlogicComponent } from './blogic/blogic.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyPipePipe,
    FooterComponent,
    ContactComponent,
    ErrorComponent,
    StudentsComponent,
    StudentdetailComponent,
    BlogicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myrouter)
  ],
  providers: [OwnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

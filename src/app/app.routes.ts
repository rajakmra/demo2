import { Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./error/error.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { StudentdetailComponent } from "./studentdetail/studentdetail.component";
import { StudentsComponent } from "./students/students.component";

export const myrouter : Routes = [
    {path:'header/2', component:HeaderComponent},
    {path:'footer', component:FooterComponent},
    {path:'contact',component:ContactComponent},
    {path:'student',component:StudentsComponent},
    {path:'student/:id',component:StudentdetailComponent},
    {path:'**',component:ErrorComponent}
];
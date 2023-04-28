import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    AboutComponent
  ],
})
export class SharedModule { }

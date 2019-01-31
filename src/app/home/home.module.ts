import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListComponent } from '../list/list.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, children: [
        {path: 'home', outlet: 'home', loadChildren: ''}
      ]},
    ])
  ],
  declarations: [HomeComponent, ListComponent]
})
export class HomePageModule {}

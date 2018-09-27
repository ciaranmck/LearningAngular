import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestdataComponent } from './testdata/testdata.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: TestdataComponent
  },
  {
    path:'detail/:id',
    component: DetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

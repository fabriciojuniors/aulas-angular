import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'sobre',
  //   pathMatch: 'full'
  // },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'sobre/:nome',
    component: SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

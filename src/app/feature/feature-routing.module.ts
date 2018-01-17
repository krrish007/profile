import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { DetailsComponent } from './details/details.component';
import { DebugAppView } from '@angular/core/src/linker/view';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  {
    path: '', component: FeatureComponent
      }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FeatureRoutingModule { }

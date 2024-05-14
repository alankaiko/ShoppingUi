import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./themes/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'institucional',
        loadChildren: () => import('./institucional/institucional.module').then(m => m.InstitucionalModule)
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      }
    ]
  },

  {path: '', redirectTo: 'institucional/home', pathMatch: 'full'},
  {path: '**', redirectTo: 'pagina-nao-encontrada'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormLayoutComponent} from './temp/formlayout/formlayout.component';
import {PanelsComponent} from './temp/panels/panels.component';
import {OverlaysComponent} from './temp/overlays/overlays.component';
import {MediaComponent} from './temp/media/media.component';
import {MessagesComponent} from './temp/messages/messages.component';
import {MiscComponent} from './temp/misc/misc.component';
import {FileComponent} from './temp/file/file.component';
import {InputComponent} from './temp/input/input.component';
import {TableComponent} from './temp/table/table.component';
import {ListComponent} from './temp/list/list.component';
import {TreeComponent} from './temp/tree/tree.component';
import {FloatLabelComponent} from './temp/floatlabel/floatlabel.component';
import {InvalidStateComponent} from './temp/invalidstate/invalidstate.component';
import {TimelineComponent} from './temp/timeline/timeline.component';
import {IconsComponent} from './temp/icons/icons.component';
import {LandingComponent} from './temp/landing/landing.component';
import {LoginComponent} from './temp/login/login.component';
import {ErrorComponent} from './temp/error/error.component';
import {NotfoundComponent} from './temp/notfound/notfound.component';
import {LayoutComponent} from "./themes/layout/layout.component";
import {DashboardComponent} from "./temp/dashboard/dashboard.component";
import {ButtonComponent} from "./temp/button/button.component";
import {ChartsComponent} from "./temp/charts/charts.component";
import {CrudComponent} from "./temp/crud/crud.component";
import {EmptyComponent} from "./temp/empty/empty.component";
import {BlocksComponent} from "./temp/blocks/blocks.component";
import {DocumentationComponent} from "./temp/documentation/documentation.component";
import {AccessComponent} from "./temp/access/access.component";

const routes: Routes = [
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

    {
        path: '', component: LayoutComponent,
        children: [
            {path: '', component: DashboardComponent},
            {path: 'uikit/formlayout', component: FormLayoutComponent},
            {path: 'uikit/input', component: InputComponent},
            {path: 'uikit/floatlabel', component: FloatLabelComponent},
            {path: 'uikit/invalidstate', component: InvalidStateComponent},
            {path: 'uikit/button', component: ButtonComponent},
            {path: 'uikit/table', component: TableComponent},
            {path: 'uikit/list', component: ListComponent},
            {path: 'uikit/tree', component: TreeComponent},
            {path: 'uikit/panel', component: PanelsComponent},
            {path: 'uikit/overlay', component: OverlaysComponent},
            {path: 'uikit/media', component: MediaComponent},
            {
                path: 'uikit/menu',
                loadChildren: () => import('./temp/menus/menus.module').then(m => m.MenusModule)
            },
            {path: 'uikit/message', component: MessagesComponent},
            {path: 'uikit/misc', component: MiscComponent},
            {path: 'uikit/charts', component: ChartsComponent},
            {path: 'uikit/file', component: FileComponent},
            {path: 'pages/crud', component: CrudComponent},
            {path: 'pages/timeline', component: TimelineComponent},
            {path: 'pages/empty', component: EmptyComponent},
            {path: 'icons', component: IconsComponent},
            {path: 'blocks', component: BlocksComponent},
            {path: 'documentation', component: DocumentationComponent}
        ],
    },
    {path: 'pages/landing', component: LandingComponent},
    {path: 'pages/login', component: LoginComponent},
    {path: 'pages/error', component: ErrorComponent},
    {path: 'pages/notfound', component: NotfoundComponent},
    {path: 'pages/access', component: AccessComponent},
    {path: '**', redirectTo: 'pages/notfound'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

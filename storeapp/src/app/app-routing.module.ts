import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './user/auth.guard';
import { AboutUsComponent } from './about-us/about-us.component';


const appRoutes: Routes= [
  {
    path: 'sneaker', 
    canActivate: [AuthGuard],
    loadChildren: () => 
    import('./sneaker/sneaker.module').then(mod => mod.SneakerModule), 
    data: {preload : true}
  },
  {path: 'about', component: AboutUsComponent},
  {path: '', redirectTo: 'sneaker/list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

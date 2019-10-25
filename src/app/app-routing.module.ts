import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // Tell the router to use the hash instead of HTML5 pushstate.
      useHash: true,
      // In order to get anchor / fragment scrolling to work at all, we need to
      // enable it on the router.
      anchorScrolling: 'enabled',

      /*Once the above is enabled, the fragment link will only work on the
      first click. This is because, by default, the Router ignores requests
      to navigate to the SAME URL that is currently rendered. Unfortunately,
      the fragment scrolling is powered by Navigation Events. As such, we
      have to tell the Router to re-trigger the Navigation Events even if we
      are navigating to the same URL . */
      onSameUrlNavigation: 'reload',
      // enableTracing: true,
      scrollPositionRestoration: 'enabled'
    }
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

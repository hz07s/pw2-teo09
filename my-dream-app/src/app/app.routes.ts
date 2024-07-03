import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';


export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'about', component: AboutComponent },
    { path: 'hello', component: HelloWorldComponent }
];

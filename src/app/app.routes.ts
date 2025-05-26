import { Routes } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { NgForComponent } from '../components/ng-for/ng-for.component';
import { NgIfComponent } from '../components/ng-if/ng-if.component';

export const routes: Routes = [
    {
        path:"admin" ,
        component:AdminComponent
    },
    {
        path:"data-binding",
        component:DataBindingComponent
    },
    {
        path :"ng-for",
        component:NgForComponent
    },
    {
        path:"ng-if",
        component:NgIfComponent
    }

];

import { Routes } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { NgForComponent } from '../components/structuraldirective/ng-for/ng-for.component';
import { NgIfComponent } from '../components/structuraldirective/ng-if/ng-if.component';
import { StructuraldirectiveComponent } from '../components/structuraldirective/structuraldirective.component';
import { DirectiveComponent } from '../components/directive/directive.component';
import { AttributeDirectiveComponent } from '../components/directive/attributedirective/attribute-directive.component';
import { NgClassComponent } from '../components/directive/attributedirective/ng-class/ng-class.component';
import { NgStyleComponent } from '../components/directive/attributedirective/ng-style/ng-style.component';
import { ControlFlowComponent } from '../components/control-flow/control-flow.component';
import { ElseIfComponent } from '../components/control-flow/else-if/else-if.component';
import { ForSwitchControlComponent } from '../components/control-flow/for-switch-control/for-switch-control.component';

export const routes: Routes = [
    {
        path: "admin",
        component: AdminComponent
    },
    {
        path: "data-binding",
        component: DataBindingComponent
    },
    {
        path: 'directive',
        component: DirectiveComponent,
        children: [
            {
                path: "structuralDir",
                component: StructuraldirectiveComponent,
                 children: [
                    {
                        path: "ng-for",
                        component: NgForComponent
                    },
                    {
                        path: "ng-if",
                        component: NgIfComponent
                    },

                ]
            },
             {
                path: "attributeDir",
                component: AttributeDirectiveComponent,
                children:[
                   {
                        path: "ng-class",
                        component: NgClassComponent
                    },
                    {
                        path: "ng-style",
                        component: NgStyleComponent
                    },
                ]
            },
        ]
    },
    {
        path: "controlFlow",
        component: ControlFlowComponent,
        children:[
            {
                path:'elseIf',
                component:ElseIfComponent
            },
             {
                path:'forswitch',
                component:ForSwitchControlComponent
            }

        ]
    },

    { path: '', redirectTo: 'admin', pathMatch: 'full' },

];

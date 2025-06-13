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
import { PipeComponent } from '../components/pipe/pipe.component';
import { FormComponentComponent } from '../components/form-component/form-component.component';
import { TemplateFormComponent } from '../components/form-component/template-form/template-form.component';
import { ReactiveFormComponent } from '../components/form-component/reactive-form/reactive-form.component';
import { GetApiComponent } from '../components/apiintergration/get-api/get-api.component';
import { PostApiComponent } from '../components/apiintergration/post-api/post-api.component';
import { ApiGetPostComponent } from '../components/api-get-post/api-get-post.component';
import { NgTempateComponent } from '../components/ng-tempate/ng-tempate.component';
import { NgContainerComponent } from '../components/ng-container/ng-container.component';
import { ViewChildComponent } from '../components/view-child/view-child.component';
import { LoginComponent } from '../components/login/login/login.component';
import { DashboardComponent } from '../components/login/dashboard/dashboard.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { authGuard } from '../otherservice/services/auth.guard';
import { SignalComponent } from '../components/signal/signal.component';
import { SubjectAndBehSubComponent } from '../components/subject-and-beh-sub/subject-and-beh-sub.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
      {
        path: '',
        component: LayoutComponent,
        children:[
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
                children: [
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
        children: [
            {
                path: 'elseIf',
                component: ElseIfComponent
            },
            {
                path: 'forswitch',
                component: ForSwitchControlComponent
            }

        ]
    },
    {
        path: 'pipe',
        component: PipeComponent,
        canActivate:[authGuard]
    },
    {
        path: 'formcomp',
        component: FormComponentComponent,
        children: [
            {
                path: 'templateForm',
                component: TemplateFormComponent
            },
            {
                path: 'reactiveForm',
                component: ReactiveFormComponent
            },
        ]
    },
    {
        path: 'getapi',
        component: GetApiComponent
    },
    {
        path: 'postapi',
        component: PostApiComponent
    },
    {
        path: 'getPostApi',
        component: ApiGetPostComponent
    },
    {
        path: 'ngTempate',
        component: NgTempateComponent
    },
    {
        path: 'ngContainer',
        component: NgContainerComponent
    },
    {
        path: 'viewChild',
        component: ViewChildComponent
    },
    {
        path:'signal',
        component:SignalComponent
    },
    {
        path: "subjectAndBehSub",
        component: SubjectAndBehSubComponent
    },

        ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: "admin",
        component: AdminComponent
    },

   

    //  {
    //     path:'',
    //     component:LoginComponent,
    //     children:[
    //         { path:'dashboard',
    //           component:DashboardComponent
    //         },
    //     ]
    // },
    { path: '', redirectTo: 'admin', pathMatch: 'full' },

];

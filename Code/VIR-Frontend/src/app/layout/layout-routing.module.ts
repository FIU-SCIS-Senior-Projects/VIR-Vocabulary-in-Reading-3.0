import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
            { path: 'text', loadChildren: './text/text.module#TextModule' },
            { path: 'doc', loadChildren: './doc/doc.module#DocModule' },
            { path: 'pdf', loadChildren: './pdf/pdf.module#PdfModule' },
            { path: 'image', loadChildren: './image/image.module#ImageModule' },
            { path: 'enhanced-text-result', loadChildren: './enhanced-text-result/enhanced-text-result.module#EnhancedTextResultModule' },
            { path: 'text-statistics', loadChildren: './text-statistics/text-statistics.module#TextStatisticsModule' },
            { path: 'dictionary', loadChildren: './dictionary/dictionary.module#DictionaryModule' },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
            { path: 'credits', loadChildren: './credits/credits.module#CreditsModule' },
            { path: 'tests', loadChildren: './tests/tests.module#TestsModule' },
            { path: 'tests/:id', loadChildren: './tests/beginner/beginner.module#BeginnerModule' },
            { path: 'itranslate', loadChildren: './itranslate/itranslate.module#ItranslateModule'}
            //{ path: 'tests/STEM', loadChildren: './tests/stem/stem.module#StemModule' },
            //{ path: 'tests/high', loadChildren: './tests/high/high.module#HighModule' },
            //{ path: 'tests/med', loadChildren: './tests/med/med.module#MedModule' },
            //{ path: 'tests/low', loadChildren: './tests/low/low.module#LowModule' },
            //{ path: 'tests/all', loadChildren: './tests/all/all.module#AllModule' },
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }

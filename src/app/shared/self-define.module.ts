import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { JsTreeDirective } from '@theme/directives/tree.directives';
import { BaseComponent } from '@theme/parent/base.component';
import { ModalService } from '@core/utils/modal.service';

const COMPONENTS = [BaseComponent];
const DIRECTIVES = [JsTreeDirective];
const PROVIDERS = [ModalService];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
    exports: [
        ...COMPONENTS,
        ...DIRECTIVES,
    ],
    declarations: [
        ...COMPONENTS,
        ...DIRECTIVES
    ],
    providers: [
        ...PROVIDERS
    ],
})
export class SelfDefineModule { }

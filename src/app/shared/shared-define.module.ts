import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModalService } from '@core/utils/modal.service';
import { ThemeModule } from '@theme/theme.module';

const MODULES = [ThemeModule];

const COMPONENTS = [];
const DIRECTIVES = [];
const PROVIDERS = [ModalService];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        ...MODULES
    ],
    exports: [
        ...MODULES,
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
export class SharedDefineModule { }

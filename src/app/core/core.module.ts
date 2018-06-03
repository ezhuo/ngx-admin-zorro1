import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { UtilsModule } from './utils/utils.module';
import { DataModule } from './data/data.module';
import { NetModule } from './net/net.module';
import { throwIfAlreadyLoaded } from './module-import-guard';

const CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...UtilsModule.forRoot().providers,
  ...NetModule.forRoot().providers
];

@NgModule({
  exports: [DataModule, UtilsModule, NetModule],
  providers: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CorexModule');
  }
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [...CORE_PROVIDERS]
    };
  }
}
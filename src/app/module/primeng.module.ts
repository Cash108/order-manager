import {CheckboxModule} from 'primeng/checkbox';
import {NgModule} from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';

@NgModule({
  declarations: [],
  imports: [
    CheckboxModule,
    PanelMenuModule,
    MenuModule,
  ],
  providers: [],
  exports: [
    CheckboxModule,
    PanelMenuModule,
    MenuModule,
  ]
})
export class PrimengModule {
}

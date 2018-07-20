import {CheckboxModule} from 'primeng/checkbox';
import {NgModule} from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';
import {CalendarModule, DropdownModule, SelectButtonModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CheckboxModule,
    PanelMenuModule,
    MenuModule,
    DropdownModule,
    SelectButtonModule,
    NgbModule,
    CalendarModule
  ],
  providers: [],
  exports: [
    CheckboxModule,
    PanelMenuModule,
    MenuModule,
    FormsModule,
    DropdownModule,
    SelectButtonModule,
    NgbModule,
    CalendarModule
  ]
})
export class PrimengModule {
}

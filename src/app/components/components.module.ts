import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AutoCompleteModule} from "primeng/autocomplete";
import {SharedModule} from "primeng/api";
import {FormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";
import {TabViewModule} from "primeng/tabview";
import {FileUploadModule} from "primeng/fileupload";
import {InputMaskModule} from "primeng/inputmask";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {SpinnerModule} from "primeng/spinner";
import {RadioButtonModule} from "primeng/radiobutton";
import {CardModule} from "primeng/card";
import {InputNumberModule} from "primeng/inputnumber";
import {EditorModule} from "primeng/editor";
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {DialogModule} from "primeng/dialog";
import {BadgeModule} from "primeng/badge";
import {UtilsModule} from "../utils/utils.module";
import {CampoButtonComponent} from "./campo-button/campo-button.component";
import {CampoButtonAComponent} from "./campo-button-a/campo-button-a.component";
import {CampoButtonDeListaComponent} from "./campo-button-de-lista/campo-button-de-lista.component";
import {CampoCheckboxComponent} from "./campo-checkbox/campo-checkbox.component";
import {CampoCheckboxLinhaComponent} from "./campo-checkbox-linha/campo-checkbox-linha.component";
import {CampoDataComponent} from "./campo-data/campo-data.component";
import {CampoDataLinhaComponent} from "./campo-data-linha/campo-data-linha.component";
import {CampoEditorTextoComponent} from "./campo-editor-texto/campo-editor-texto.component";
import {CampoInputNumberComponent} from "./campo-input-number/campo-input-number.component";
import {CampoMonetarioComponent} from "./campo-monetario/campo-monetario.component";
import {CampoMonetarioLinhaComponent} from "./campo-monetario-linha/campo-monetario-linha.component";
import {CampoNumeroTogleComponent} from "./campo-numero-togle/campo-numero-togle.component";
import {CampoRadioComponent} from "./campo-radio/campo-radio.component";
import {CampoDropdownComponent} from "./campo-dropdown/campo-dropdown.component";
import {CampoSpinnerComponent} from "./campo-spinner/campo-spinner.component";
import {CampoTabviewComponent} from "./campo-tabview/campo-tabview.component";
import {CampoTextoComponent} from "./campo-texto/campo-texto.component";
import {CampoTextoAreaComponent} from "./campo-texto-area/campo-texto-area.component";
import {CampoTextoAreaLinhaComponent} from "./campo-texto-area-linha/campo-texto-area-linha.component";
import {CampoTextoDropdownComponent} from "./campo-texto-dropdown/campo-texto-dropdown.component";
import {CampoTextoLinhaComponent} from "./campo-texto-linha/campo-texto-linha.component";
import {CampoTextoMascaraComponent} from "./campo-texto-mascara/campo-texto-mascara.component";
import {CampoTextoPrimeComponent} from "./campo-texto-prime/campo-texto-prime.component";
import {CampoUploadComponent} from "./campo-upload/campo-upload.component";
import {DialogoModalComponent} from "./dialogo-modal/dialogo-modal.component";
import {FaixaRodapeDescricaoComponent} from "./faixa-rodape-descricao/faixa-rodape-descricao.component";
import {FaixaTituloBotaoComponent} from "./faixa-titulo-botao/faixa-titulo-botao.component";
import {MenuTopoComponent} from "./menu-topo/menu-topo.component";
import {PainelTabsComponent} from "./painel-tabs/painel-tabs.component";
import {PainelTabsPrimeComponent} from "./painel-tabs-prime/painel-tabs-prime.component";
import {StickAvisoComponent} from "./stick-aviso/stick-aviso.component";
import {TabelaDadosComponent} from "./tabela-dados/tabela-dados.component";
import {CampoBadgeComponent} from "./campo-badge/campo-badge.component";
import {CurrencyMaskModule} from "ng2-currency-mask";


@NgModule({
    imports: [
        CommonModule,
        AutoCompleteModule,
        SharedModule,
        FormsModule,
        ToastModule,
        TableModule,
        TabViewModule,
        FileUploadModule,
        InputMaskModule,
        DropdownModule,
        InputTextModule,
        InputTextareaModule,
        SpinnerModule,
        RadioButtonModule,
        CardModule,
        InputNumberModule,
        EditorModule,
        CalendarModule,
        CheckboxModule,
        ButtonModule,
        ToolbarModule,
        DialogModule,
        CurrencyMaskModule,
        UtilsModule,
        BadgeModule
    ],
    declarations: [
        CampoButtonComponent,
        CampoButtonAComponent,
        CampoButtonDeListaComponent,
        CampoCheckboxComponent,
        CampoCheckboxLinhaComponent,
        CampoDataComponent,
        CampoDataLinhaComponent,
        CampoDropdownComponent,
        CampoEditorTextoComponent,
        CampoInputNumberComponent,
        CampoMonetarioComponent,
        CampoMonetarioLinhaComponent,
        CampoNumeroTogleComponent,
        CampoRadioComponent,
        CampoSpinnerComponent,
        CampoTabviewComponent,
        CampoTextoComponent,
        CampoTextoAreaComponent,
        CampoTextoAreaLinhaComponent,
        CampoTextoDropdownComponent,
        CampoTextoLinhaComponent,
        CampoTextoMascaraComponent,
        CampoTextoPrimeComponent,
        CampoUploadComponent,
        DialogoModalComponent,
        FaixaRodapeDescricaoComponent,
        FaixaTituloBotaoComponent,
        MenuTopoComponent,
        PainelTabsComponent,
        PainelTabsPrimeComponent,
        StickAvisoComponent,
        TabelaDadosComponent,
        CampoBadgeComponent
    ],
    exports: [
        CampoButtonComponent,
        CampoButtonAComponent,
        CampoButtonDeListaComponent,
        CampoCheckboxComponent,
        CampoCheckboxLinhaComponent,
        CampoDataComponent,
        CampoDataLinhaComponent,
        CampoDropdownComponent,
        CampoEditorTextoComponent,
        CampoInputNumberComponent,
        CampoMonetarioComponent,
        CampoMonetarioLinhaComponent,
        CampoNumeroTogleComponent,
        CampoRadioComponent,
        CampoSpinnerComponent,
        CampoTabviewComponent,
        CampoTextoComponent,
        CampoTextoAreaComponent,
        CampoTextoAreaLinhaComponent,
        CampoTextoDropdownComponent,
        CampoTextoLinhaComponent,
        CampoTextoMascaraComponent,
        CampoTextoPrimeComponent,
        CampoUploadComponent,
        DialogoModalComponent,
        FaixaRodapeDescricaoComponent,
        FaixaTituloBotaoComponent,
        MenuTopoComponent,
        PainelTabsComponent,
        PainelTabsPrimeComponent,
        StickAvisoComponent,
        TabelaDadosComponent,
        CampoBadgeComponent
    ]
})
export class ComponentsModule {
}

import {Injectable} from "@angular/core";
import {ConfirmationService} from "primeng/api";

@Injectable()
export class ConfirmationUtils {

  constructor(private confirmationService: ConfirmationService) {
  }

  mostrarConfirmacao(message: string, accept?: any, reject?: any, header?: string, icon?: string) {
    this.confirmationService.confirm({
      message: message,
      header: header,
      icon: icon || 'pi pi-exclamation-triangle',
      accept: accept,
      reject: reject
    });
  }
}

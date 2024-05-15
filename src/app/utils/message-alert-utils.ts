import {Injectable} from "@angular/core";
import {MessageService} from "primeng/api";

@Injectable()
export class MessageAlertUtils {

  constructor(private messageService: MessageService) {

  }

  mostrarMensagem(severity: string, summary: string, detail: string, life?: number) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
      life: life || 6000
    });
  }
}

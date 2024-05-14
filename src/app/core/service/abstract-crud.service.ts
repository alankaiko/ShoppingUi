import {AbstractEntity} from "../model/abstract-entity";
import {AbstractDTO} from "../model/dto/abstract-dto";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from 'rxjs/operators';
import {AbstractService} from "./abstract-service";
import {Observable} from "rxjs";
import {PageDTO} from "../model/page-dto";
import {environment} from "../../../environments/environment";

export abstract class AbstractCrudService<T extends AbstractEntity, D extends AbstractDTO> extends AbstractService {

  constructor(protected path: string, protected http: HttpClient) {
    super();
  }

  protected url(path?: string) {
    const url = `${environment.apiUrl}/api/${this.path}`;
    return path ? url.concat(`/${path}`) : url;
  }

  buscarId(codigo: number): Observable<T> {
    return this.http.get(this.url(`${codigo}`), this.options()).pipe(
      map(this.mapper),
      catchError(this.handleError)
    );
  }

  listarPaginado(filtro?: D): Observable<PageDTO<any>> {
    return this.http.post(this.url('listar-paginado'), filtro, this.options()).pipe(
      map(this.mapper),
      catchError(this.handleError)
    );
  }

  listar(): Observable<T[]> {
    return this.http.get(this.url(), this.options()).pipe(
      map(this.mapper),
      catchError(this.handleError)
    );
  }

  salvar(entidade: T): Observable<T> {
    return this.http.post(this.url(), entidade, this.options()).pipe(
      map(this.mapper),
      catchError(this.handleError)
    );
  }

  deletar(codigo: number): Observable<T> {
    return this.http.delete(this.url(`${codigo}`)).pipe(
      map(() => null),
      catchError(this.handleError)
    );
  }


}

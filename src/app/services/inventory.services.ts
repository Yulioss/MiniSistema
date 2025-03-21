import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { ProductosDTO } from "../DTOs/inventory";
import { Observable } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class InventoryService {
    private readonly http = inject(HttpClient);
    private readonly urlBase = environment.apiURL;
    
public viewProducts(): Observable<ProductosDTO[]> {
    return this.http.get<ProductosDTO[]>(this.urlBase + "/Productos/inventario")
}

public createProduct(producto: ProductosDTO): Observable<string>{
    return this.http.post<string>(this.urlBase + "/Productos/movimiento", producto )
}
}
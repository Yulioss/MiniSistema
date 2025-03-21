import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { InventoryService } from '../../services/inventory.services';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateProductComponent } from '../create-product/create-product.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ProductosDTO } from '../../DTOs/inventory';


@Component({
  selector: 'app-view-inventary',
  imports: [MatTableModule, MatButtonModule,MatIconModule, MatPaginatorModule],
  templateUrl: './view-inventary.component.html',
  styleUrl: './view-inventary.component.css'
})
export class ViewInventaryComponent implements OnInit, AfterViewInit  {
  inventoryService = inject(InventoryService);
  displayedColumns: string[] = ['nombre', 'cantidad', 'movimiento', 'editar', 'eliminar'];
  dataSource = new MatTableDataSource<ProductosDTO>([]);
  private readonly dialog = inject(MatDialog);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit()
  {
    this.inventoryService.viewProducts().subscribe({
      next: response => {this.dataSource.data =response; this.dataSource.paginator = this.paginator;}
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  openCreateProduct()
  {
   const dialogRef = this.dialog.open(CreateProductComponent);
    dialogRef.afterClosed().subscribe(result => {
      window.location.reload()
    })
  }
}

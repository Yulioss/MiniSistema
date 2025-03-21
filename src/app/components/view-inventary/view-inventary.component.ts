import {Component, inject, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { InventoryService } from '../../services/inventory.services';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateProductComponent } from '../create-product/create-product.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-view-inventary',
  imports: [MatTableModule, MatButtonModule,MatIconModule],
  templateUrl: './view-inventary.component.html',
  styleUrl: './view-inventary.component.css'
})
export class ViewInventaryComponent implements OnInit {
  inventoryService = inject(InventoryService);
  displayedColumns: string[] = ['nombre', 'cantidad', 'editar', 'eliminar'];
  dataSource:any;
  private readonly dialog = inject(MatDialog);

  ngOnInit()
  {
    this.inventoryService.viewProducts().subscribe({
      next: response => this.dataSource = response
    });
  }
  openCreateProduct()
  {
   const dialogRef = this.dialog.open(CreateProductComponent);
    dialogRef.afterClosed().subscribe(result => {
      window.location.reload()
    })
  }
}

import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ProductosDTO } from '../../DTOs/inventory';
import { InventoryService } from '../../services/inventory.services';

@Component({
  selector: 'app-create-product',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, ReactiveFormsModule,MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  private readonly formbuilder= inject(FormBuilder);
  form = this.formbuilder.group({
    name:['', {validators: [Validators.required]}],
    amount: ['', {validators: [Validators.required]}]
  })
  inventoryService = inject(InventoryService)

  constructor( private readonly dialogRef: MatDialogRef<CreateProductComponent>){}
  obtenerErrorCampoNombre(): string {
    let user = this.form.controls.name;
    if(user.hasError('required'))
    {
      return "El campo nombre es requerido"
    }
    return "";
  }
  obtenerErrorCampoCantidad(): string {
    let user = this.form.controls.amount;
    if(user.hasError('required'))
    {
      return "El campo cantidad es requerido"
    }
    return "";
  }

  guardarProducto()
  {
    const product: ProductosDTO = {
      nombre: this.form.controls['name']?.value?.toString() || '',
      cantidad: Number(this.form.controls['amount']?.value) || 1
    };
    if(product.cantidad > 0)
    {
      this.inventoryService.createProduct(product).subscribe({
        next: response => alert("Registrado Correctamente"),
        error: err => console.log(err)
      });
      this.dialogRef.close();
    }
    
  }
}

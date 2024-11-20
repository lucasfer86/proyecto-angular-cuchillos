import { Cuchillo } from './../interface/cuchillo.interface';
import { CuchilloService } from './../service/cuchillo.service';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-add-cuchillo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-cuchillo.component.html',
  styleUrl: './add-cuchillo.component.css'
})
export class AddCuchilloComponent {

@Output() emitirCucchillo: EventEmitter<Cuchillo> = new EventEmitter();

cuchilloService = inject(CuchilloService);

fb = inject(FormBuilder);

formulario=this.fb.nonNullable.group(

  {
  id: [0, [Validators.required]],
  nombre: ['', [Validators.required]],
  tipo: ['', [Validators.required]],
  tipoDeFilo: ['', [Validators.required]],
  materialHoja: ['', [Validators.required]], 
  materialMango: ['', [Validators.required]], 
  longitudHoja: [0, [Validators.required, Validators.min(1)]],
  longitudTotal: [0, [Validators.required, Validators.min(1)]],
}

)

addCuchillo(){
  if(this.formulario.invalid) return;

  const cuchillo = this.formulario.getRawValue();

  this.emitirCucchillo.emit(cuchillo);

  this.addCuchilloDB(cuchillo);
  
}

addCuchilloDB(cuchillo: Cuchillo){
  this.cuchilloService.postCuchillo(cuchillo).subscribe(  ///usaste POST
    
    {
      next: (cuchillo:Cuchillo) => {
      console.log(cuchillo);
      alert('Cuchillo guardado...')

      },
      
      error:(e:Error) => {
      console.log(e.message);
      }
    }
  )
}

}
import { CuchilloService } from './../service/cuchillo.service';
import { Cuchillo } from './../interface/cuchillo.interface';
import { Component, inject, OnInit } from '@angular/core';
import { AddCuchilloComponent } from '../add-cuchillo/add-cuchillo.component';

@Component({
  selector: 'app-list-cuchillo',
  standalone: true,
  imports: [AddCuchilloComponent],
  templateUrl: './list-cuchillo.component.html',
  styleUrl: './list-cuchillo.component.css'
})
export class ListCuchilloComponent implements OnInit{

  ngOnInit(): void {
    this.addListDB();    
  }

cuchilloService = inject(CuchilloService);
  
listaDecuchillos: Cuchillo[] = []; 

addList(cuchillo: any){ //recibir el cuchillo del hijo
  console.log('Cuchillo agregado:', cuchillo);
  this.listaDecuchillos.push( {...cuchillo} );

}

addListDB(){
  this.cuchilloService.getCuchillo().subscribe( ///usaste GET
    {
      next:(cuchillos: Cuchillo[]) => {
        this.listaDecuchillos = cuchillos;
      },
      error: (e: Error) => {
        console.log(e.message)
      }



    }
  )

}

 



}


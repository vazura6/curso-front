import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent {

  clientes: Cliente[] = [
    {id: 1, nombre: "Jose", apellido: "Bayarri", email: 'jose@email.com', createAt: '2022-01-22'},
    {id: 2, nombre: "Sonia", apellido: "Dutao", email: 'sonia@email.com', createAt: '2022-04-22'},
  ]
  constructor() { }


}

import { Component, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/models/cliente';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  private service: ClienteService = inject(ClienteService);
  public clientes: Cliente[] = [];

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.service.get().subscribe(
      (response: Cliente[]) => {
          this.clientes = response;
      },
      (error: any) => {
        alert('Erro ao buscar clientes!');
      }
    );
  }

  public save(formulario: NgForm) {
      if(!formulario.valid) {
        alert("Dados inválidos");
        return;
      }

      this.service.save(formulario.value).subscribe(
        (response) => {
          alert("Cliente cadastrado com sucesso.")
          formulario.reset();
          this.get();
        },
        (error) => {
          alert("Erro ao cadastrar cliente. " + error);
        }
      );
  }

}

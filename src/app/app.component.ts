import { Component } from "@angular/core";
import { Cliente } from "src/models/cliente";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  /*
  public String nome; 
  */

    /*
  public String getSobrenome() {
    return sobronome;
  }
  */

  /*
    public Cliente() {

    }
  */

  //ATRIBUTOS
  public nome: string = "BRUNA";
  private sobrenome: string = "SOBRENOME";
  public isAtivo : boolean = true;

  public cliente: Cliente = {
    id: 1,
    nome: "João",
    ativo: true
  }

  public clientes: Cliente[] = [
    {
      id: 1,
      nome: "João",
      ativo: true
    },
    {
      id: 2,
      nome: "Maria",
      ativo: true
    }
  ]

  //CONSTRUTOR
  constructor() {
    this.getForLoop();
  }

  //MÉTODOS
  public getSobrenome(): string {
    return this.sobrenome;
  }

  private getNome(): string {
    return this.nome;
  }

  public getValorTotal(): number {
    // let nomeVariavel:string = "";
    // const nomeConstante : number = 0;
    let valorTotal: number = 0;

    let valor: number = this.cliente.nome == "João" ? 100 : 200;

    if (this.cliente.nome == "João") {
      valorTotal = 100;
    } else {
      valorTotal = 200;
    }

    return valorTotal;
  }

  public getForLoop() {
    /*
      for(int i = 0; i <= 10; i++) {
        System.out.print(i)
      }
    */
    for(let i = 0; i <= 10; i++) {
      console.log(i);
    }

  }

  public getForEachLoop() {
    let numeros: number[] = [1,2,3,4,5];

    for(let i = 0; i <= numeros.length; i++) {
      let numero = numeros[i];
      console.log(numero);
    }

    numeros.forEach(numero => {
      console.log(numero);
    });
  }

  public clicouNoBotao():void {
    console.log('CLICOU NO BOTÃO!!!');
  }

  public onInputNomeChange(evento: any):void {
    console.log('INPUT ALTEROU!!');
    console.log(evento.target.value);
  }

  public onInputKeyDown(evento: any):void {
    console.log('INPUT KEY DOWN');
  }

  public onInputKeyUp(evento: any):void {
    console.log('INPUT KEY UP');
  }

  public onInputKeyPress(evento: any):void {
    console.log('INPUT KEY PRESS');
  }

  public onEvento(evento: string) {
      console.log("RETORNO DO EVENTO: " + evento);      
  }

}

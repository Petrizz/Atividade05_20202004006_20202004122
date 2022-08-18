import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadcontas',
  templateUrl: './cadcontas.page.html',
  styleUrls: ['./cadcontas.page.scss'],
})
export class CadcontasPage implements OnInit {

  id: string;
  contas: any = [];
  tipos: any = [];
  conta = {
    id: null,
    descricao: null,
    valor: null,
    vencimento: null,
    tipo: null,
    situacao: null
  };

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController) { }

  ngOnInit() {

    this.tipos = JSON.parse(localStorage.getItem('tbtipos'));
    this.contas = JSON.parse(localStorage.getItem('tbcontas'));
    if(!this.contas){
      this.contas = [];
      localStorage.setItem('tbcontas', JSON.stringify(this.contas));
    }

    //id recebe seu valor
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.conta = this.contas[this.id];
    }else{
      this.conta.id = this.contas.length;
    }
  }

  async submitForm(){
    this.contas = JSON.parse(localStorage.getItem('tbcontas'));
    if(this.verificarDesc()){
    if(this.id){
      this.contas[this.id] =  this.conta;
    }else{
      this.contas.push(this.conta);
    }
    localStorage.setItem('tbcontas', JSON.stringify(this.contas));
    alert('Você foi cadastrado com sucesso!');
    this.navController.navigateBack('/consucontas');
  }else{
    alert('E-mail ja cadastrado');
  }
  }

 verificarDesc(){
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < this.contas.length; i++) {
    if(this.contas[i].descricao === this.conta.descricao){
      return false;
    }
}
return true;

  }
}

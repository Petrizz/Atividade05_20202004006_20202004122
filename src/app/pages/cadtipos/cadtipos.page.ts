import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadtipos',
  templateUrl: './cadtipos.page.html',
  styleUrls: ['./cadtipos.page.scss'],
})
export class CadtiposPage implements OnInit {

  id: string;
  tipos: any = [];
  tipo = {
    id: null,
    nome: null,
    descricao: null,
  };

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController) { }

  ngOnInit() {
    this.tipos = JSON.parse(localStorage.getItem('tbtipos'));
    if(!this.tipos){
      this.tipos = [];
      localStorage.setItem('tbtipos', JSON.stringify(this.tipos));
    }

    //id recebe seu valor
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.tipo = this.tipos[this.id];
    }else{
      this.tipo.id = this.tipos.length;
    }
  }

  async submitForm(){
    this.tipos = JSON.parse(localStorage.getItem('tbtipos'));
    if(this.verificarDesc()){
    if(this.id){
      this.tipos[this.id] =  this.tipo;
    }else{
      this.tipos.push(this.tipo);
    }
    localStorage.setItem('tbtipos', JSON.stringify(this.tipos));
    alert('Salvo com sucesso!');
    this.navController.navigateBack('/consutipos');
  }else{
    alert('Descrição ja cadastrada');
  }
  }

 verificarDesc(){
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < this.tipos.length; i++) {
    if(this.tipos[i].descricao === this.tipo.descricao){
      return false;
    }
}
return true;

  }
}

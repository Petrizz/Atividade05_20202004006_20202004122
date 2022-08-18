import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadusuario',
  templateUrl: './cadusuario.page.html',
  styleUrls: ['./cadusuario.page.scss'],
})
export class CadusuarioPage implements OnInit {

  id: string;
  usuarios: any = [];
  cadastro = {
    id: null,
    nome: null,
    email: null,
    senha: null
  };

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController) { }

  ngOnInit() {
    this.usuarios = JSON.parse(localStorage.getItem('tbusuarios'));
    if(!this.usuarios){
      this.usuarios = [];
      localStorage.setItem('tbusuarios', JSON.stringify(this.usuarios));
    }

    //id recebe seu valor
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.cadastro = this.usuarios[this.id];
    }else{
      this.cadastro.id = this.usuarios.length;
    }
  }

  async submitForm(){
    this.usuarios = JSON.parse(localStorage.getItem('tbusuarios'));
    if(this.verificarEmail()){
    if(this.id){
      this.usuarios[this.id] =  this.cadastro;
    }else{
      this.usuarios.push(this.cadastro);
    }
    localStorage.setItem('tbusuarios', JSON.stringify(this.usuarios));
    alert('Você foi cadastrado com sucesso!');
    this.navController.navigateBack('/autenticar');
  }else{
    alert('E-mail ja cadastrado');
  }
  }

 verificarEmail(){
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < this.usuarios.length; i++) {
    if(this.usuarios[i].email === this.cadastro.email){
      return false;
    }
}
return true;

  }
}

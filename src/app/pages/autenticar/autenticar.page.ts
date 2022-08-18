import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.page.html',
  styleUrls: ['./autenticar.page.scss'],
})
export class AutenticarPage {

  login = {
    id: null,
    email: null,
    senha: null
  };

  usuarios: any = [];

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController) { }

  async submitForm(){
    this.usuarios = JSON.parse(localStorage.getItem('tbusuarios'));
    if(this.verificarLogin()){
      this.navController.navigateBack('/menu/' + this.login.id);
    }else{
      alert('O Email a ou senha estão errados.');
    }
  }

  verificarLogin(){
    if(this.usuarios){
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.usuarios[i].email === this.login.email && this.usuarios[i].senha === this.login.senha){
        this.login.id = this.usuarios[i].id;
        return true;
      }
    }
  }
  return false;

}
}

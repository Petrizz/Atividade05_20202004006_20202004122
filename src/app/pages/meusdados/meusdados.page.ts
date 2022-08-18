import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-meusdados',
  templateUrl: './meusdados.page.html',
  styleUrls: ['./meusdados.page.scss'],
})
export class MeusdadosPage implements OnInit {

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

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.usuarios[i].id === Number(this.id)){
        this.cadastro = this.usuarios[i];
      }

    }
  }

  async submitForm(){
    if(this.id){
      this.usuarios[this.id] =  this.cadastro;
    }else{
      this.usuarios.push(this.cadastro);
    }
    localStorage.setItem('tbusuarios', JSON.stringify(this.usuarios));
    alert('Edições realizadas com sucesso!');
    this.navController.navigateBack('/menu/' + this.id);
  }

}

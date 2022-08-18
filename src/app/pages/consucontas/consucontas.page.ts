import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-consucontas',
  templateUrl: './consucontas.page.html',
  styleUrls: ['./consucontas.page.scss'],
})
export class ConsucontasPage implements OnInit {

  contas: any = [];

  constructor(private navController: NavController) { }


  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.contas = JSON.parse(localStorage.getItem('tbcontas'));
    if(!this.contas){
      this.contas = [];
      localStorage.setItem('tbcontas', JSON.stringify(this.contas));
    }
  }
}

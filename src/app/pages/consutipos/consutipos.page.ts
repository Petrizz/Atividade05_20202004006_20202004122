import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-consutipos',
  templateUrl: './consutipos.page.html',
  styleUrls: ['./consutipos.page.scss'],
})
export class ConsutiposPage implements OnInit {

  tipos: any = [];

  constructor(private navController: NavController) { }


  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.tipos = JSON.parse(localStorage.getItem('tbtipos'));
    if(!this.tipos){
      this.tipos = [];
      localStorage.setItem('tbtipos', JSON.stringify(this.tipos));
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalLogOutComponent } from 'src/app/Components/modals/modal-log-out/modal-log-out.component';


@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  usuarioNombre:String;
  usuarioAlias:String;
  usuarioWeb:String;
  usuarioTelefono:String;
  ngOnInit() {
    this.usuarioNombre=JSON.parse(localStorage.getItem('actualUserName'))
    this.usuarioAlias=JSON.parse(localStorage.getItem('actualUser'))
    this.usuarioWeb=JSON.parse(localStorage.getItem('actualUserWeb'))
    this.usuarioTelefono=JSON.parse(localStorage.getItem('actualUserPhone'))

  }
  async presentModal(){
      const modal = await this.modalCtrl.create({
        component: ModalLogOutComponent,
      });
      modal.present();

      const { data, role } = await modal.onWillDismiss();

      if (role === 'confirm') {
        localStorage.setItem('actualUser', JSON.stringify(({data})))
        localStorage.setItem('actualUserName', JSON.stringify(({data})))
        localStorage.setItem('actualUserPhone', JSON.stringify(({data})))
        localStorage.setItem('actualUserWeb', JSON.stringify(({data})))
      }
  }

}

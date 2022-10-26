import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-log-out',
  templateUrl: './modal-log-out.component.html',
  styleUrls: ['./modal-log-out.component.scss'],
})
export class ModalLogOutComponent implements OnInit {

  data:String= ''
  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  confirm() {
    this.router.navigate(['login']);
    return this.modalCtrl.dismiss(this.data,'confirm');
  }

}

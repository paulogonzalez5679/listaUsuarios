import { Component, OnInit } from '@angular/core';
import { GetJsonService } from 'src/app/services/get-json.service';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.page.html',
  styleUrls: ['./tab-list.page.scss'],
})
export class TabListPage implements OnInit {

  public listUsuarios:any=[]
  constructor(private service: GetJsonService) { }

  ngOnInit() {
    this.service.GetAllUsers()
    .subscribe(respuesta=>{
      console.log(respuesta);
      this.listUsuarios=respuesta;
      console.log(this.listUsuarios);

    })
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GamePage } from '../game/game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaAvatar: any

  constructor(public navCtrl: NavController) {
    this.pupularAvatar()
  }

  pupularAvatar() {
    this.listaAvatar = [
      {
        src: "assets/imgs/avatars/avatar01.png",
        name: "Avatar 1"
      },
      {
        src: "assets/imgs/avatars/avatar02.png",
        name: "Avatar 2"
      },
      {
        src: "assets/imgs/avatars/avatar03.png",
        name: "Avatar 3"
      },
      {
        src: "assets/imgs/avatars/avatar04.png",
        name: "Avatar 4"
      },
      {
        src: "assets/imgs/avatars/avatar05.png",
        name: "Avatar 5"
      },
      {
        src: "assets/imgs/avatars/avatar06.png",
        name: "Avatar 6"
      },
      {
        src: "assets/imgs/avatars/avatar07.png",
        name: "Avatar 7"
      },
      {
        src: "assets/imgs/avatars/avatar08.png",
        name: "Avatar 8"
      },
      {
        src: "assets/imgs/avatars/avatar09.png",
        name: "Avatar 9"
      }
    ]
  }

  cadastrar() {
    // Função para efetuar cadastro
    this.navCtrl.push(GamePage);
  }

}

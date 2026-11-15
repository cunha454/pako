import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-app-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.css',
})
export class AppShell {

  menuAberto = signal(false);

  alternarMenu(){
      this.menuAberto.set(!this.menuAberto());
  }

  fecharMenu(){
    this.menuAberto.set(false)
  }

  menuRecolhido = signal(false);

  alternarRecolhimento(){
    this.menuRecolhido.set(!this.menuRecolhido())
  }
}

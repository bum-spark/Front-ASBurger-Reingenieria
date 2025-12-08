import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebSocketsService } from './services/web-sockets.service';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideCharts(withDefaultRegisterables())]
})

export class AppComponent {
  title = 'comanda-hamburguesas';
  private _ws: WebSocketsService = inject(WebSocketsService);
  //Inicia la aplicacion y checa el status del socket
  ngOnInit(){
    this._ws.checkStatus();
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { TicketComponent } from './ticket/ticket.component';
import { NgxEchartsDirective, NgxEchartsModule, provideEcharts } from 'ngx-echarts';
import { QRCodeModule } from 'angularx-qrcode';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from "./table/table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartsComponent, TicketComponent, ButtonModule, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'my-app';
}

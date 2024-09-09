import { Component  } from '@angular/core';

import { QRCodeModule } from 'angularx-qrcode';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [QRCodeModule,TooltipModule,ButtonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  public myAngularxQrCode: any = null;


  constructor () {
    // assign a value

    this.myAngularxQrCode = 'Your QR code data string';
  }
}

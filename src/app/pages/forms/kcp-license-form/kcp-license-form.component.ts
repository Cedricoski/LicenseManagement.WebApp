import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../../../partials/sidebar/sidebar.component';
import { TopbarComponent } from '../../../partials/topbar/topbar.component';
import { FooterComponent } from '../../../partials/footer/footer.component';

@Component({
  selector: 'app-kcp-license-form',
  standalone: true,
  imports: [CommonModule,SidebarComponent,TopbarComponent,FooterComponent],
  templateUrl: './kcp-license-form.component.html',
  styleUrl: './kcp-license-form.component.css'
})
export class KcpLicenseFormComponent {

}

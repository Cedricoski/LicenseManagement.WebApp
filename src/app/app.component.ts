import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SidebarComponent } from "./partials/sidebar/sidebar.component";
@Component({
    selector: 'app-root',
    standalone: true,
    providers: [HttpClientModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, HttpClientModule, RouterOutlet, RouterModule]
})
export class AppComponent {
  title = 'LicenseManagement.WebApp';
}

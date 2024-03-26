import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../../partials/footer/footer.component";
import { TopbarComponent } from "../../partials/topbar/topbar.component";
import { SidebarComponent } from "../../partials/sidebar/sidebar.component";
import { ContextService } from '../../context.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule,SidebarComponent, TopbarComponent, FooterComponent],
    
})
export class HomeComponent implements OnInit {

  isServer: boolean = false;
  constructor(private context:ContextService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isServer = this.context.isServer()
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  state_body:boolean|undefined = false;
  state_button:boolean|undefined = false;
  
  toggle(){
    
    const el_body = document.getElementById('page-top')
    const el_button=document.getElementById('accordionSidebar')
    
    this.state_body = el_body?.classList.contains('sidebar-toggled')
    this.state_button = el_button?.classList.contains('toggled')
    console.log(this.state_body)
    console.log(this.state_button)

    if(this.state_body==false){
        
        el_body?.classList.add('sidebar-toggled')
        this.state_body=true
    }else{
        el_body?.classList.remove('sidebar-toggled')
        this.state_body=false
    }
    
    if(this.state_button==false){
        
        el_button?.classList.add('toggled')
        this.state_button=true
    }else{
        el_button?.classList.remove('toggled')
        this.state_button=false
    }
    

    
   
}
}

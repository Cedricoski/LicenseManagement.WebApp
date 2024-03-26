import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

  state_body:boolean|undefined=false;
  state_button:boolean|undefined=false;
  
  toggle(){
    
    const el_body = document.getElementById('page-top')
    const el_button=document.getElementById('accordionSidebar')
    
    this.state_body = el_body?.classList.contains('sidebar-toggled')
    this.state_button = el_button?.classList.contains('toggled')

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

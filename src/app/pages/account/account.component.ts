import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  running:boolean=false;
  constructor() { }
  public user =localStorage.getItem("username");

  ngOnInit() {
    if(this.user){
      this.running=true;
    }
    this.running=false;
  }
  deletedata(){
    localStorage.removeItem("username");
  }
}

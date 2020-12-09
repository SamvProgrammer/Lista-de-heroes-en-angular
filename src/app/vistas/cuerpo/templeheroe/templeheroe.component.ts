import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-templeheroe',
  templateUrl: './templeheroe.component.html',
  styleUrls: ['./templeheroe.component.css']
})
export class TempleheroeComponent implements OnInit {

  @Input() public item;
  @Input() public id;

  constructor() { }

  ngOnInit(): void {
  }


  public ejecutarEvento(){

  }

}

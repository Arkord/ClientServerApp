import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagetop',
  templateUrl: './pagetop.component.html',
  styleUrls: ['./pagetop.component.css']
})
export class PagetopComponent implements OnInit {
  @Input() folder: string = "";
  @Input() title: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}

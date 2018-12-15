import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit, AfterContentInit {

  constructor() { }
  @ContentChild('h') headerElement: ElementRef;

  ngAfterContentInit(): void {
    console.log(this.headerElement.nativeElement);
  }

  ngOnInit() {
  }

}

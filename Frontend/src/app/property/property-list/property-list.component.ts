import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [{
    "Id":1,
    "Name":"10 Faraday Square",
    "Type":"House",
    "Price":250000

  },
  {
    "Id":2,
    "Name":"45 Gloucester Road",
    "Type":"House",
    "Price":400000

  },
  {
    "Id":3,
    "Name":"Pearl Villa",
    "Type":"Villa",
    "Price":2000000

  },
  {
    "Id":4,
    "Name":"Macro House",
    "Type":"House",
    "Price":140000

  },
  {
    "Id":5,
    "Name":"Vinland Mansion",
    "Type":"Mansion",
    "Price":9000000

  },
  {
    "Id":6,
    "Name":"Sunside Apartment",
    "Type":"Apartment",
    "Price":1300000

  }
]

  constructor() { }

  ngOnInit(): void {
  }

}

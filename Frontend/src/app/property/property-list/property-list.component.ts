import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  ListingType = "Sell";
  properties: Array<IProperty>;

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.ListingType="Rent";
    }
    this.housingService.getAllProperties(this.ListingType).subscribe(
      data=>{
        this.properties=data;
        console.log(data);
        console.log(this.route.snapshot.url.toString())
      }, error => {
        console.log('httperror:');
        console.log(error);
      }
    )
  }

}

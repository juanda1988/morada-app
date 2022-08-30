import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesResponse } from 'src/app/domain/models/Property/property';
import { PropertyUseCase } from 'src/app/domain/usecase/propertyusecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _propertyUseCase: PropertyUseCase, private router: Router) { }
  response: any;
  properties!: PropertiesResponse;
  ngOnInit(): void {
    this.response = this._propertyUseCase.getProperties();
      this.response.subscribe(
        (data: PropertiesResponse) => {
          if (data) {
            this.properties = data
            console.log(this.properties);
          }
        }
      )
  }
  goToDetails(id: String){
    //console.log(id)
    this.router.navigate(['/default/propertydetai'],{queryParams:{id}})
  }

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesResponse, PropertyResponse } from 'src/app/domain/models/Property/property';
import { PropertyRegistered } from 'src/app/domain/models/Property/propertyregistered';
import { PropertyUseCase } from 'src/app/domain/usecase/propertyusecase';

@Component({
  selector: 'app-propertydetai',
  templateUrl: './propertydetai.component.html',
  styleUrls: ['./propertydetai.component.css']
})
export class PropertydetaiComponent implements OnInit {

  constructor(private _propertyUseCase: PropertyUseCase, private router: ActivatedRoute) { }
  response: any;
  property!: PropertyResponse;

  ngOnInit(): void {
    this.router.queryParamMap.subscribe((params)=>{
      var propertyId = params.get('id');
      console.log(propertyId)
      if(propertyId){
        this.response = this._propertyUseCase.getPropertyDetail(propertyId)
        this.response.subscribe(
          (data: PropertyResponse)=>{
            if(data){
              //console.log(data.city)
              this.property = data              
              //console.log(this.property.property._id)
            }             
          }
        )
      }
    })
  }

}

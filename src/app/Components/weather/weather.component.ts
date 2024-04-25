import { Component, OnInit } from '@angular/core';
import { BackGroundColorDirective } from '../../Directives/back-ground-color.directive';
import { ActivatedRoute } from '@angular/router';
import { TempertureConverionPipe } from '../../Pipes/temperture-converion.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [BackGroundColorDirective,TempertureConverionPipe,CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  temperture :number=0;
  unit:string='c';
  constructor(private router:ActivatedRoute){

  }
  ngOnInit(): void {
    this.router.queryParams.subscribe(e=>{
     const temp=e['temperture'];
     if(temp)
      {
        this.temperture=+temp;
      }
    });
  }
  toggleUnit(){
    this.unit=this.unit==='c' ? 'f':'c';
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css',
})
export class WeatherListComponent {
  searchText: string = '';
  sortBy:string='';
  sortAscending:boolean=false;
  filteredWeatherList: any[];
  weatherList: any[] = [
    { city: 'New York', temperture: 2 },
    { city: 'Cairo', temperture: 100 },
    { city: 'Riyadh', temperture: 20 },
    { city: 'Kuwait City', temperture: 12 },
    { city: 'London', temperture: 20 },
    { city: 'Tokyo', temperture: 30 },
    { city: 'Sydney', temperture: 20 },
    { city: 'Paris', temperture: 8 },
    { city: 'Moscow', temperture: 5 },
    { city: 'Beijing', temperture: 10 },
    { city: 'Rio de Janeiro', temperture: 12 },
    { city: 'Los Angeles', temperture: 20 },
    { city: 'Berlin', temperture: 12 },
  ];
  constructor(private router: Router) {
    this.filteredWeatherList = this.weatherList;
  }
  navegatToWeather(temperture: number) {
    this.router.navigate(['/weather'], { queryParams: { temperture } });
  }
  filterWeatherList() {
    if (!this.searchText) {
      this.filteredWeatherList = this.weatherList;
    } else {
      this.filteredWeatherList = this.weatherList.filter((e) => {
        return e.city.toLowerCase().includes(this.searchText.toLowerCase());
      });
    }
  }
  sortWeatherList(property:string){
   this.sortBy=property;
   this.sortAscending=!this.sortAscending;
   this.filteredWeatherList.sort((a,b)=>{
     const aValue=a[property];
     const bValue=b[property];
     if(aValue < bValue)
      {
        return this.sortAscending ? -1 :1;
      }else if (aValue > bValue){
        return this.sortAscending ? 1 :-1;
      }
      return 0;
   });
  }
  getTemperatureColor(temperature: number): string {
    if (temperature < 10) {
      return 'bg-info'; // Cold temperature (blue background)
    } else if (temperature >= 10 && temperature < 25) {
      return 'bg-warning'; // Moderate temperature (orange background)
    } else {
      return 'bg-f'; // Hot temperature (red background)
    }
  }
}

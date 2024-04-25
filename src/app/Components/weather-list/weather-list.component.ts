import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css',
})
export class WeatherListComponent {
  searchText: string = '';
  sortBy:string='';
  sortAscending:boolean=false;
  filteredWeatherList: any[];
  weatherList: any[] = [
    { city: 'Now Yourk', temperture: 2 },
    { city: 'Egypt', temperture: 100 },
    { city: 'Saudia', temperture: 20 },
    { city: 'Kwit', temperture: 12 },
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
}

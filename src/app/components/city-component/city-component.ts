import { Component } from '@angular/core';
import { CityModel } from '../../model/cityModel';
import { CityService } from '../../services/city-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city-component',
  imports: [FormsModule],
  templateUrl: './city-component.html',
  styleUrl: './city-component.css',
})
export class CityComponent {
  idSearch!: number;
  cityData?: CityModel;
  cities: CityModel[] = [];
  page: number = 0
  totalCities: number = 0
  size: number = 2

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.getCities();
  }

  seachCity(id: number) {
    if (id === undefined) {
      alert('Completa los campos')
    } else {

      this.cityService.getById(id).subscribe({
        next: (payload) => {
          this.cityData = payload;
          console.warn('City', payload)
        },
        error: (e) => {
          console.error('Error al consultar la api', e)
        }
      })
    }
  }

  getCities() {
    this.cityService.getAll(this.page, this.size).subscribe({
      next: (payload) => {
        this.cities = payload.content;
        // this.totalCities = payload.totalElements
        // console.log(this.totalCities)
        console.log(this.cities)
      },
      error: (e) => {
        console.error("Error:", e)
      }
    })
  }

  nextPage() {
    this.page++
    this.getCities()
  }

  lastPage() {
    if (this.page > 0) {
      this.page--
      this.getCities()
    }
  }


}



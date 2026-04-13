import { Routes } from '@angular/router';
import { CalculatorExample } from './lessons/calService/calculator-example/calculator-example';
import { ViewChildFather } from './lessons/view-child/example-component/view-child-father/view-child-father';
import { Home } from './components/home/home';
import { CityComponent } from './components/city-component/city-component';

export const routes: Routes = [

    // {path: '', component: Home},
    {path: 'cal', component: CalculatorExample},
    {path: 'view', component: ViewChildFather},
    {path: 'city', component: CityComponent}

];

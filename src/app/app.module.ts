import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/content/home/home.component';
import { BarComponent } from './components/content/bar/bar.component';
import { LineComponent } from './components/content/line/line.component';
import { PieComponent } from './components/content/pie/pie.component';
import { RadarComponent } from './components/content/radar/radar.component';
import { PolarAreaComponent } from './components/content/polar-area/polar-area.component';
import { DoughnutComponent } from './components/content/doughnut/doughnut.component';
import { HorizontalBarComponent } from './components/content/horizontal-bar/horizontal-bar.component';
import { GroupedComponent } from './components/content/grouped/grouped.component';
import { MixedComponent } from './components/content/mixed/mixed.component';
import { BubbleComponent } from './components/content/bubble/bubble.component';

const appRoutes: Routes = [
  //CONTENT
  { path: 'home',      component: HomeComponent },
  { path: 'bar',      component: BarComponent },
  { path: 'line',      component: LineComponent },
  { path: 'pie',      component: PieComponent },
  { path: 'radar',      component: RadarComponent },
  { path: 'polarArea',      component: PolarAreaComponent },
  { path: 'doughnut',      component: DoughnutComponent },
  { path: 'horizontalBar',      component: HorizontalBarComponent },
  { path: 'grouped',      component: GroupedComponent },
  { path: 'mixed',      component: MixedComponent },
  { path: 'bubble',      component: BubbleComponent },

  //INIT
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BarComponent,
    LineComponent,
    PieComponent,
    RadarComponent,
    PolarAreaComponent,
    DoughnutComponent,
    HorizontalBarComponent,
    GroupedComponent,
    MixedComponent,
    BubbleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes )
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

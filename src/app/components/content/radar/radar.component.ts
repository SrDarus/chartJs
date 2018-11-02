import { Component, OnInit, OnDestroy } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {


	chart = [];

  constructor() { }

  ngOnInit() {

  	this.chart = new Chart(document.getElementById("radarChart"), {
	    type: 'radar',
	    data: {
	      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
	      datasets: [
	        {
	          label: "1950",
	          fill: true,
	          backgroundColor: "rgba(179,181,198,0.2)",
	          borderColor: "rgba(179,181,198,1)",
	          pointBorderColor: "#fff",
	          pointBackgroundColor: "rgba(179,181,198,1)",
	          data: [8.77,55.61,21.69,6.62,6.82]
	        }, {
	          label: "2050",
	          fill: true,
	          backgroundColor: "rgba(255,99,132,0.2)",
	          borderColor: "rgba(255,99,132,1)",
	          pointBorderColor: "#fff",
	          pointBackgroundColor: "rgba(255,99,132,1)",
	          //pointBorderColor: "#fff",
	          data: [25.48,54.16,7.61,8.06,4.45]
	        }
	      ]
	    },
	    options: {
	      title: {
	        display: true,
	        text: 'Distribution in % of world population'
	      }
	    }
	});
  }

  NgOnDestroy(){
  	this.chart = null;
  }

}

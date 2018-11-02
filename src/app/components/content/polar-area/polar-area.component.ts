import { Component, OnInit, OnDestroy } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-polar-area',
  templateUrl: './polar-area.component.html',
  styleUrls: ['./polar-area.component.css']
})
export class PolarAreaComponent implements OnInit {


	chart = [];
    constructor() { }

    ngOnInit() {

  	this.chart = new Chart(document.getElementById("polarAreaChart"), {
	    type: 'polarArea',
	    data: {
	      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
	      datasets: [
	        {
	          label: "Population (millions)",
	          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
	          data: [2478,5267,734,784,433]
	        }
	      ]
	    },
	    options: {
	      title: {
	        display: true,
	        text: 'Predicted world population (millions) in 2050'
	      }
	    }
	});
  }

  NgOnDestroy(){
  	this.chart = null;
  }

}

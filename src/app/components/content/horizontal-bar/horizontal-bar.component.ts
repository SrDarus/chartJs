import { Component, OnInit, OnDestroy } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.css']
})
export class HorizontalBarComponent implements OnInit {

	chart = [];

  constructor() { }

  ngOnInit() {

  	this.chart = new Chart(document.getElementById("horizontalBarChart"), {
	    type: 'horizontalBar',
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
	      legend: { display: false },
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

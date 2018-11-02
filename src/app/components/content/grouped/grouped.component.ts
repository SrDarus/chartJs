import { Component, OnInit, OnDestroy } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-grouped',
  templateUrl: './grouped.component.html',
  styleUrls: ['./grouped.component.css']
})
export class GroupedComponent implements OnInit {

	chart = [];

  constructor() { }

  ngOnInit() {

  	this.chart = new Chart(document.getElementById("groupedChart"), {
	    type: 'bar',
	    data: {
	      labels: ["1900", "1950", "1999", "2050"],
	      datasets: [
	        {
	          label: "Africa",
	          backgroundColor: "#3e95cd",
	          data: [133,221,783,2478]
	        }, {
	          label: "Europe",
	          backgroundColor: "#8e5ea2",
	          data: [408,547,675,734]
	        }
	      ]
	    },
	    options: {
	      title: {
	        display: true,
	        text: 'Population growth (millions)'
	      }
	    }
	});
  }

  NgOnDestroy(){
  	this.chart = null;
  }

}

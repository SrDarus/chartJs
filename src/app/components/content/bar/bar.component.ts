import { Component, OnInit, OnDestroy } from '@angular/core';

import { Chart } from 'chart.js'; 

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

	chart = [];

  constructor() { }

  ngOnInit() {
  	this.chart = new Chart(document.getElementById("barChart"), {
	    type: 'bar',
	    data: {
	      labels: ["Marcelo", "Ira", "Claudio"],
	      datasets: [
	        {
	          label: "Victorias en 1c1",
	          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
	          data: [0,1,4]
	        }
	      ]
	    },
	    options: {
	      legend: { display: false },
	      title: {
	        display: true,
	        text: 'Victorias en clash royal'
	      }
	    }
	});
  }

  NgOnDestroy(){
  	this.chart = null;
  }

}

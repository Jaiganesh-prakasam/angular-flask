import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../../env";
import { Chart } from "angular-highcharts";
@Component({
  selector: "app-ram",
  templateUrl: "./ram.component.html",
  styleUrls: ["./ram.component.sass"]
})
export class RamComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: "line"
    },
    title: {
      text: "CPU"
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: "memory utilization",
        data: [],
        type: undefined
      }
    ]
  });
  nameInterval: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCpuPercent();
  }
  getCpuPercent() {
    this.nameInterval = setInterval(
      function() {
        this.http.get(API_URL + "/ram").subscribe(data => {
          // console.log(data.value);
          this.add(data.value);
        });
      }.bind(this),
      1000
    );
  }
  add(x) {
    // console.log(this.chart["options"].series[0].data["length"]);
    if (this.chart["options"].series[0].data["length"] === 5) {
      this.chart.removePoint(0);
    }
    this.chart.addPoint(Number(x));
  }
  pause() {
    this.nameInterval.close();
  }
  resume() {
    this.getCpuPercent();
  }
}

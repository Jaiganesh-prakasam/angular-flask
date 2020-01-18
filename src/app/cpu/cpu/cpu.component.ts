import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../../env";
import { Chart } from "angular-highcharts";

@Component({
  selector: "app-cpu",
  templateUrl: "./cpu.component.html",
  styleUrls: ["./cpu.component.sass"]
})
export class CpuComponent implements OnInit {
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
        name: "cpu percentage",
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
        this.http.get(API_URL).subscribe(data => {
          // console.log(data.value);
          this.add(data.value);
        });
      }.bind(this),
      2000
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
    clearInterval(this.nameInterval);
    console.log(this.nameInterval);
  }
  resume() {
    this.getCpuPercent();
  }
}

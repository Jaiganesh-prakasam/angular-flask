import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../../env";
import { Chart } from "angular-highcharts";
@Component({
  selector: "app-gpu",
  templateUrl: "./gpu.component.html",
  styleUrls: ["./gpu.component.sass"]
})
export class GpuComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: "line"
    },
    title: {
      text: "GPU"
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: "gpu percentage",
        data: [],
        type: undefined
      }
    ]
  });
  nameInterval: any;
  gpuPresence = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCpuPercent();
  }
  getCpuPercent() {
    this.nameInterval = setInterval(
      function() {
        this.http.get(API_URL + "/gpu").subscribe(data => {
          if (data.value !== null) {
            this.gpuPresence = true;
            this.add(data.value);
          } else {
            this.gpuPresence = false;
          }
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

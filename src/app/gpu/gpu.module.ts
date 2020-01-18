import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GpuComponent } from "./gpu/gpu.component";
import { ChartModule } from "angular-highcharts";

@NgModule({
  declarations: [GpuComponent],
  exports: [GpuComponent],
  imports: [CommonModule, ChartModule]
})
export class GpuModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CpuComponent } from "./cpu/cpu.component";
import { ChartModule } from "angular-highcharts";
@NgModule({
  declarations: [CpuComponent],
  exports: [CpuComponent],
  imports: [CommonModule, ChartModule]
})
export class CpuModule {}

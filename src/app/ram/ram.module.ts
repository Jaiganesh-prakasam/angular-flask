import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RamComponent } from "./ram/ram.component";
import { ChartModule } from "angular-highcharts";

@NgModule({
  declarations: [RamComponent],
  exports: [RamComponent],
  imports: [CommonModule, ChartModule]
})
export class RamModule {}

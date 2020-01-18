import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CpuComponent } from "./cpu/cpu.component";

@NgModule({
  declarations: [CpuComponent],
  exports: [CpuComponent],
  imports: [CommonModule]
})
export class CpuModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GpuComponent } from "./gpu/gpu.component";

@NgModule({
  declarations: [GpuComponent],
  exports: [GpuComponent],
  imports: [CommonModule]
})
export class GpuModule {}

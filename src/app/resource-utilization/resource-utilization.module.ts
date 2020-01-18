import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResourcesComponent } from "./resources/resources.component";
import { CpuModule } from "../cpu/cpu.module";
import { GpuModule } from "../gpu/gpu.module";
import { RamModule } from "../ram/ram.module";
@NgModule({
  imports: [CommonModule, CpuModule, GpuModule, RamModule],
  declarations: [ResourcesComponent],
  exports: [ResourcesComponent]
})
export class ResourceUtilizationModule {}

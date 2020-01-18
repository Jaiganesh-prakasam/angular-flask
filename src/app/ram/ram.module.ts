import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RamComponent } from "./ram/ram.component";

@NgModule({
  declarations: [RamComponent],
  exports: [RamComponent],
  imports: [CommonModule]
})
export class RamModule {}

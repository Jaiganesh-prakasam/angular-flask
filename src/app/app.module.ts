import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ResourceUtilizationModule } from "./resource-utilization/resource-utilization.module";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ResourceUtilizationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

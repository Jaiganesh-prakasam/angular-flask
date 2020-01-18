import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.sass"]
})
export class ResourcesComponent implements OnInit {
  resourceSelected = "cpu";
  constructor() {}

  ngOnInit() {}
  selection(selectedValue) {
    this.resourceSelected = selectedValue;
  }
}

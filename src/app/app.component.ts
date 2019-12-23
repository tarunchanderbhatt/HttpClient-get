import { TypeCasting } from "./type-casting";
import { StudentServiceService } from "./student-service.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Coming Soon...";
  stuDetail: TypeCasting[];
  msg: string;
  varParma: TypeCasting[];
  // Inject Service
  constructor(private _service: StudentServiceService) {}

  ngOnInit() {
    this.getStudent();
    this.studentTxt();
    this.getPerameter();
  }

  //Make Method

  getStudent() {
    this._service.getStudent().subscribe(data => {
      this.stuDetail = data;
    });
  }

  studentTxt() {
    this._service.getMess().subscribe(data1 => {
      this.msg = data1;
    });
  }

  //getParame

  getPerameter() {
    this._service.filterStuden(35, "Urmila Bhatt").subscribe(dataPar => {
      this.varParma = dataPar;
    });
  }
}

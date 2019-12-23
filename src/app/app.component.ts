import { TypeCasting } from "./type-casting";
import { StudentServiceService } from "./student-service.service";
import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Coming Soon...";

  stuDetail: TypeCasting[];
  varParma: TypeCasting[];
  msg: string;

  varAsync: Observable<TypeCasting[]>;
  msgAsyinc: Observable<string>;
  queryStrint_asy: Observable<TypeCasting[]>;

  // Inject Service
  constructor(private _service: StudentServiceService) {}

  ngOnInit() {
    this.getStudent();
    this.studentTxt();
    this.getPerameter(35, "Urmila Bhatt");
    this.getStudent_async();
  }

  //Make Method Subscript

  getStudent() {
    this._service.getStudent().subscribe(data => {
      this.stuDetail = data;
    });

    this.varAsync = this._service.getStudent();
  }

  //Make Method Asyinc

  getStudent_async() {
    this.varAsync = this._service.getStudent();
  }

  //Make Text Formate Subscribe and async
  studentTxt() {
    this._service.getMess().subscribe(data1 => {
      this.msg = data1;
    });

    this.msgAsyinc = this._service.getMess();
  }

  //getParame

  getPerameter(age: number, name: string) {
    this._service.filterStuden(age, name).subscribe(dataPar => {
      this.varParma = dataPar;
    });

    this.queryStrint_asy = this._service.filterStuden(age, name);
  }
}

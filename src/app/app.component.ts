import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient,
    private ngxUiLoaderService: NgxUiLoaderService) {

  }

  ngOnInit() {
    this.ngxUiLoaderService.start();
    this.http.get(`https://api.npmjs.org/downloads/range/last-month/ngx-ui-loader`).subscribe((res: any) => {
      console.log(res);
      this.ngxUiLoaderService.stop();
    });
  }
}

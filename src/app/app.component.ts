import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { UaaService } from './uaa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLoggedIn = false;

  constructor(private _service: UaaService) {}

  ngOnInit() {
    this.isLoggedIn = this._service.isLoggedIn();
  }

  login() {
    this._service.obtainAccessToken();
  }

  logout() {
    this._service.logout();
  }
}

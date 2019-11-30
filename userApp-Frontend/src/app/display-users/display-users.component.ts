import { Component, OnInit } from "@angular/core";
import { DisplayUserService } from "../display-user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-display-users",
  templateUrl: "./display-users.component.html",
  styleUrls: ["./display-users.component.css"]
})
export class DisplayUsersComponent implements OnInit {

  public users = [];
  public filteredUsers;
  private _searchStr: string;

  get searchStr(): string {
    return this._searchStr;
  }

  set searchStr(value: string) {
    this._searchStr = value;
  }

  constructor(
    private $userService: DisplayUserService,
    private _router: Router,
  ) {}

  ngOnInit() {
    this.$userService.displayUsers().subscribe(data => (this.users = data));
  }

  editUser(userid: number) {
    this._router.navigate(["/edituser", userid]);
  }

}

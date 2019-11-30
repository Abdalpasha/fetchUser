import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DisplayUserService } from '../display-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;

  sno: number;
  name: string;
  email: string;
  imageurl: string;
  nofreps: number;



  constructor(private _route: ActivatedRoute, private fb: FormBuilder, private $userService: DisplayUserService,
              private _router: Router) { }

  ngOnInit() {

    this.getUser(this._route.snapshot.params['sno'])


    this.userForm = this.fb.group({
      'sno': ['', Validators.required],
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'imageurl': ['', Validators.required],
      'nofreps': ['', Validators.required]
    })
  }

  getUser(id: number){
    this.$userService.getUser(id).subscribe(data => {
      this.userForm.setValue({
      'sno' : data.sno,
      'name' : data.name,
      'email' : data.email,
      'imageurl' : data.imageurl,
      'nofreps' : data.nofreps
    });
  })
  }

  onSave(){
    this.$userService.updateUser(this.userForm.value)
      .subscribe(res => console.log(res), err => console.log(err));
    this._router.navigate(['/home']);
  }

  onDelete(){
    this.$userService.deleteUser(this.userForm.value)
    .subscribe(res => console.log('user Deleted', res), err => console.log(err));
    this._router.navigate(['/home']);

  }

}

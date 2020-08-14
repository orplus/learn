import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    public service: UserService,
    public dialogRef: MatDialogRef<UserComponent>) { }


  ngOnInit(): void {
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}

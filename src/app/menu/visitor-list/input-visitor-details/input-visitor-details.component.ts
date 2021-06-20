import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { VisitorService } from 'src/app/shared/services/visitor.service';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {
  visitorForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    NIK: new FormControl(''),
    name: new FormControl(''),
    gender: new FormControl(''),
    time_arrival: new FormControl(''),
    patient_visited: new FormControl(''),
    patient_room: new FormControl(''),
    expected_duration: new FormControl(''),
    note: new FormControl('')
  });

  constructor(
    private _visitorService: VisitorService,
    public dialogRef: MatDialogRef<InputVisitorDetailsComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.visitorForm.valid) {
      this._visitorService.postVisitors(this.visitorForm.value).subscribe(
        res => console.log('create : ', res)
      );
      return this.onCancel();
    }
    
  }
  onCancel(){
    this.dialogRef.close();
  }
}

import { Component, OnInit } from '@angular/core';
import { VisitorService } from 'src/app/shared/services/visitor.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InputVisitorDetailsComponent } from './input-visitor-details/input-visitor-details.component';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {
  visitors: any;
  page: number = 1;
  pagesAmount: number;

  constructor(
    private _visitorService: VisitorService,
    private _dialog: MatDialog
    ) { }

  ngOnInit() {
    this._visitorService.getVisitors(this.page).subscribe(
      data => {
        this.visitors = data.body;
        this.pagesAmount = data.headers.get('X-Total-Count')/10;
        // console.log(this.visitors);
        // console.log(this.pagesAmount);
        // console.log(this.page);
        
        
      }
    )
  }

  displayedColumns: string[] = ['NIK', 'name', 'gender', 'time_arrival', 'patient_visited', 'patient_room', 'expected_duration'];

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this._dialog.open(InputVisitorDetailsComponent, dialogConfig);
  }

  previous() {
    this.page--;
    return this.ngOnInit();
  }

  next() {
    this.page++;
    return this.ngOnInit();
  }

}

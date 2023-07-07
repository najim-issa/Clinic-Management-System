import { Component, OnInit, ValueEqualityFn, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsService } from '../services/details.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MoreDetailsComponent } from '../more-details/more-details.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {


  displayedColumns: string[] = ['id', 
  'firstName',
  'lastName', 
  'email',
  'address',
  'gender',
  'phonenumber',
  'epnumber',
  'dob',
  'state',
  'action'
];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  endpointService: any;


  ngOnInit(): void {
      this.getDetailsList();
      this.activatedRoute.params.subscribe(val=>{
        this.userIdToUpdated=val['id'];
        this._detailsServices.getDetailsList().subscribe(res=>{this.fillForm(res)})
      })
  }
public userIdToUpdated!: number;

  constructor(private _dialog:MatDialog, private _detailsServices: DetailsService, private activatedRoute: ActivatedRoute){}

getDetailsList(){
  this._detailsServices.getDetailsList().subscribe({
    next: (res) =>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    },
    error:console.log,
  });

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase(); 

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

deleteDetails(id: number){
  this._detailsServices.deleteDetails(id).subscribe({
    next: (res) =>{
      alert ('Patients Deleted');
      this.getDetailsList();
    },
    error:console.log,
  });
}

openAddEditPdetails(data : any){
  this._dialog.open(MoreDetailsComponent, {
    data,
  });
}

update(data: any){}

fillForm(res: any){}


getData(){

  this.endpointService.getEndpointData().subscribe(
    (res : any) => {
      console.log(res);
    },
    (error:any) => {
      console.error(error); 
    }
  );
}


postData() {
  const data = { };
  this.endpointService.postEndpointData(data).subscribe(
    (res : any) => {
      console.log(res); 
    },
    (error:any) => {
      console.error(error); 
    }
  );
}
}


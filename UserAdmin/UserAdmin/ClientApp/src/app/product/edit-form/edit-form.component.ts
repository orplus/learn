import { Component, OnInit } from '@angular/core';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  selectedValue: string;


  categories: Category[] = [
    {value: 'category-0', viewValue: 'Grocery'},
    {value: 'category-1', viewValue: 'Dairy'},
    {value: 'category-2', viewValue: 'Frozen'}
  ];
  service: any;
  ELEMENT_DATA: any;
  dialog: any;
  dataSource: any;
  table: any;
  constructor() { }

  ngOnInit() {
  }

  onClose() {
     this.service.form.close();
     this.service.initializeFormGroup();
  }

  onEdit() {

  }
/*  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(EditFormComponent, {
      data : obj
    });
  dialogRef.afterClosed().subscribe(result => {
    if (result.event === 'Add') {
      this.addRowData(result.data);
    } else if (result.event === 'Update') {
      this.updateRowData(result.data);
    } else if (result.event === 'Delete') {
      this.deleteRowData(result.data);
    }
  });
}
  deleteRowData(data: any) {
    throw new Error ('Method not implemented.');
  }

addRowData(row_obj){
  var d = new Date();
  this.dataSource.push({
    productId:d.getTime(),
    name:row_obj.name
  });
  this.table.renderRows();

}
updateRowData(row_obj){
  this.dataSource = this.dataSource.filter((value,key)=>{
    if(value.id == row_obj.id){
      value.name = row_obj.name;
    }
    return true;
  });
}
*/
}

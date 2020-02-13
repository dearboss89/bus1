import { Component, OnInit, Inject } from '@angular/core';
import { AddressesService } from './addresses.service';
import { AddressViewDto, AddressCreateDto, AddressUpdateDto } from './addresses.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  constructor(private addressesService: AddressesService, public dialog: MatDialog) {
  }

  displayedColumns: string[] = ['longUrl', 'shortUrl', 'created', 'followCount', 'actions'];
  dataSource: AddressViewDto[];
  newUrl: AddressCreateDto = new AddressCreateDto();
  editUrl: AddressUpdateDto = new AddressUpdateDto();
  delUrl: number;
  openDialogCreateUrl(): void {
    const dialogRef = this.dialog.open(DialogOverviewCreateNewUrlTwo, {
      width: '600px',
      data: { newUrl: this.newUrl }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.newUrl.longUrl = result;
        this.createNewUrl();
      }
    });
  }

  openDialogEditUrl(editId: number, oldUrl: string) {
    const dialogRef = this.dialog.open(DialogOverviewEditUrl, {
      width: '600px',
      data: { editUrl: this.editUrl, oldUrl }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.editUrl.id = editId;
        this.editUrl.longUrl = result;
        this.updateUrl();
      }

    });
  }

  openDialogDeleteUrl(delNumber: number, longUrl: string) {
    const dialogRef = this.dialog.open(DialogOverviewDeleteUrl, {
      width: '600px',
      data: { delUrl: this.delUrl, longUrl }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.delUrl = delNumber;
        this.deleteUrl();
      }
    });
  }

  ngOnInit() {
    this.loadUrls();
  }
  loadUrls() {
    this.addressesService.get().subscribe(x => this.dataSource = x);
  }
  createNewUrl() {
    this.addressesService.create(this.newUrl).subscribe(() => this.loadUrls());
  }
  updateUrl() {
    this.addressesService.update(this.editUrl).subscribe(() => this.loadUrls());
  }
  deleteUrl() {
    this.addressesService.delete(this.delUrl).subscribe(() => this.loadUrls());
  }
  openShortUrl(id: number) {
    this.addressesService.getById(id).subscribe(() => this.loadUrls());
  }
  clickShortUrlCount(id: number) {
    this.addressesService.updateFollowCount(id).subscribe(() => this.loadUrls());
  }
}

@Component({
  selector: 'dialog-create-new-url-two',
  templateUrl: 'dialog-create-new-url-tow.html',
  styleUrls: ['./addresses.component.scss']
})

export class DialogOverviewCreateNewUrlTwo {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewCreateNewUrlTwo>,
    @Inject(MAT_DIALOG_DATA) public data: AddressCreateDto) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-edit-url',
  templateUrl: 'dialog-edit-url.html',
  styleUrls: ['./addresses.component.scss']
})

export class DialogOverviewEditUrl {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewEditUrl>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-delete-url',
  templateUrl: 'dialog-delete-url.html',
  styleUrls: ['./addresses.component.scss']
})

export class DialogOverviewDeleteUrl {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDeleteUrl>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}



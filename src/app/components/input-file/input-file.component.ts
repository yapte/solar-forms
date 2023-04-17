import { Component, EventEmitter, Output } from '@angular/core';
import { FilesApi } from 'src/app/services/files-api.service';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
  providers: [FilesApi],
})
export class InputFileComponent {
  inProgress = false;
  @Output() onUpload = new EventEmitter<string>();
  // onChange(guid);

  constructor(private _filesApi: FilesApi) { }

  upload(e: Event) {
    this.inProgress = true;

    const files: File[] = Array.from((e.target as HTMLInputElement).files as FileList);

    this._filesApi.upload(files)
      .subscribe({
        next: guid => {
          this.inProgress = false;
          this.onUpload.emit(guid);
        },
        error: err => {
          this.inProgress = false;
        },
      });

    // const file: File = ((e.target as HTMLInputElement).files as FileList)[0];
    // this._filesApi.upload(file)
    //   .subscribe({
    //     next: guid => {
    //       this.inProgress = false;
    //       this.onUpload.emit(guid);
    //     },
    //     error: err => {
    //       this.inProgress = false;
    //     },
    //   });
  }
}

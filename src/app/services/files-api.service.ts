import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class FilesApi {
    constructor(private _http: HttpClient) { }

    upload(files: File[]): Observable<string> {
        const formData = new FormData();
        files.forEach(file => formData.append('files[]', file, file.name));

        return this._http.post<string>('', formData);
    }

    // upload(file: File): Observable<string> {
    //     const formData = new FormData();
    //     formData.append('file', file, file.name);

    //     return this._http.post<string>('', formData);
    // }
}
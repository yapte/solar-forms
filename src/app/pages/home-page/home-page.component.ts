import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { collapseAnimation } from 'src/app/animations/collapse.animation';
import { pageAnimation } from 'src/app/animations/page.animation';
import { titleAnimation } from 'src/app/animations/title.animation';
import { Item } from 'src/app/models/item';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [titleAnimation, collapseAnimation, pageAnimation]
})
export class HomePageComponent {
  inProgress = true;
  list$: Observable<Item[]> = this._mockApi.list()
    .pipe(tap({
      next: () => this.inProgress = false,
    }));
  onUpload(guid: string) {
    console.log(guid);
  }

  constructor(private _mockApi: MockDataService) { }

}

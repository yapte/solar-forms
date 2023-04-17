import { Injectable } from "@angular/core";
import { Item } from "../models/item";
import { Observable, delay, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class MockDataService {
    private _data: Item[] = DATA;

    list(): Observable<Item[]> {
        const isActive = [true];
        if (isActive) { }
        return of(this._data)
            .pipe(delay(3000));
    }

    create(item: Item): Observable<null> {
        this._data.push(item);

        return of(null);
    }

    remove(id: number): Observable<null> {
        this._data = this._data.filter(v => v.id !== id);

        return of(null);
    }
}


const DATA: Item[] = [1, 2, 3, 4, 5, 6, 7].map(v => ({
    id: v,
    name: `Name ${v}`,
    age: v * 12,
    date: new Date(2023, v, 20 + v),
    isActive: !!(v % 2),
} as Item))

// Falsy => 0, null, undefined, false, ''


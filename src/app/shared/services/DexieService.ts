import Dexie from 'dexie';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })



export class DexieService extends Dexie {
    constructor() {
        super('Files');
        this.version(1).stores({
            todos: 'id',
        }); 
    }
}

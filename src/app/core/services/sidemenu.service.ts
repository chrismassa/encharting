import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidemenuService {

  toggle$ = new Subject<void>();

  toggle(): void {
    this.toggle$.next();
  }

}

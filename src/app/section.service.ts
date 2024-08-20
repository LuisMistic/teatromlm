import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private sectionSubject = new BehaviorSubject<string>('home');
  currentSection$ = this.sectionSubject.asObservable();

  changeSection(section: string) {
    this.sectionSubject.next(section);
  }
}

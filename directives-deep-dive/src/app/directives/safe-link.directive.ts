import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]', // combined with the <a> tag
  standalone: true,
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective created!');
  }
}

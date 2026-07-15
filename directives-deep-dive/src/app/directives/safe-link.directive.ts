import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]', // combined with the <a> tag
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParams = input('my-app', { alias: 'appSafeLink' });
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLinkDirective created!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = confirm('Are you sure you want to leave this page?');

    if (!wantsToLeave) {
      event.preventDefault(); // Prevent the default action of the
    }

    //const address = (event.target as HTMLAnchorElement).href;
    const address = this.hostElementRef.nativeElement.href;
    // (event.target as HTMLAnchorElement).href =
    //   `${address}?from=${this.queryParams()}`;
    this.hostElementRef.nativeElement.href = `${address}?from=${this.queryParams()}`;
  }
}

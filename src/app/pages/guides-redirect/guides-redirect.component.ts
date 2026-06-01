import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

/** Legacy /ios-vpn-guides → home (SEO landings stay on their own URLs). */
@Component({
  selector: 'app-guides-redirect',
  standalone: true,
  template: '',
})
export class GuidesRedirectComponent implements OnInit {
  private readonly router = inject(Router);

  ngOnInit(): void {
    void this.router.navigate(['/'], { replaceUrl: true });
  }
}

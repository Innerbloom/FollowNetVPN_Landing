import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

/** Legacy /ios-vpn-guides → /guides hub. */
@Component({
  selector: 'app-guides-redirect',
  standalone: true,
  template: '',
})
export class GuidesRedirectComponent implements OnInit {
  private readonly router = inject(Router);

  ngOnInit(): void {
    void this.router.navigate(['/guides'], { replaceUrl: true });
  }
}

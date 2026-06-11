import { Component } from '@angular/core';
import { ButtonComponent } from '@/app/shared/ui/button/button.component';
import { LucideLogOut } from '@lucide/angular';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [ButtonComponent, LucideLogOut],
  styleUrl: './header.component.css',
})
export class HeaderComponent {}

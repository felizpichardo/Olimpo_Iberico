import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../shared/navbar/navbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  scrollToHistory(): void {
    const section = document.getElementById('historia');

    if (!section) return;

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <app-header />
    <main class="min-h-[70vh]">
      <router-outlet />
    </main>
    <app-footer />
  `
})
export class App {
  protected readonly title = signal('stockwise-frontend');
}

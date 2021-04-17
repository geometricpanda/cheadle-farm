import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MenuService } from './menu.service';
import { Links } from './menu.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivationEnd, Router } from '@angular/router';
import { filter, skip, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CdkTrapFocus } from '@angular/cdk/a11y';

@Component({
  selector: 'cheadle-farm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('void', style({
        transform: 'translate(-100%)'
      })),
      state('*', style({
        transform: 'translate(0)'
      })),
      transition('void <=> *', [
        animate('250ms ease-in-out')
      ])
    ])
  ]
})
export class MenuComponent implements OnInit, OnDestroy {


  @Input() links: Links;
  @Output() scroll = new EventEmitter<Event>();
  @ViewChild('page') page: ElementRef<HTMLDivElement>;

  $router: Subscription;

  constructor(public menuService: MenuService,
              private router: Router) {
  }

  ngOnInit() {
    this.$router = this.router
      .events
      .pipe(skip(1))
      .pipe(filter(event => event instanceof ActivationEnd))
      .pipe(tap(() => this.scrollToTop()))
      .subscribe(() => this.close());
  }

  scrollToTop() {
    // this.page.nativeElement.scrollTo(0, 0);
  }

  ngOnDestroy() {
    this.$router.unsubscribe();
  }

  onScroll($event) {
    this.scroll.emit($event);
  }

  close() {
    this.menuService.closeMenu();
  }


}

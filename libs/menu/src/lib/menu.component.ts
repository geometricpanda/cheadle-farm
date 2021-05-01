import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MenuService } from './menu.service';
import { Links } from './menu.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivationEnd, Router } from '@angular/router';
import { filter, skip, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cheadle-farm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
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
  @ViewChild('closeButton') closeButton: ElementRef<HTMLButtonElement>;

  $router: Subscription;

  focusOnCloseButtonSub = this.menuService
    .isOpen
    .pipe(filter(value => value === true))
    .subscribe(() => setTimeout(() => this.closeButton.nativeElement.focus(), 100));

  constructor(public menuService: MenuService,
              private router: Router) {
  }

  ngOnInit() {
    this.$router = this.router
      .events
      .pipe(skip(1))
      .pipe(filter(event => event instanceof ActivationEnd))
      .subscribe(() => this.close());
  }

  ngOnDestroy() {
    this.$router.unsubscribe();
  }

  close() {
    this.menuService.closeMenu();
  }

  conditionalClose() {
    this.menuService
      .isOpen
      .pipe(take(1))
      .pipe(filter(isOpen => isOpen === true))
      .subscribe(() => this.menuService.closeMenu());
  }


}

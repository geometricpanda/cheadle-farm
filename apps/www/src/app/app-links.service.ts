import { Injectable } from '@angular/core';
import { Links } from '@cheadle-farm/menu';


@Injectable({providedIn: 'root'})
export class AppLinksService {

  mainLinks: Links = [
    {title: 'Home', routerlink: ['/']},
    {title: 'About Us', routerlink: ['/', 'about-us']},
    {title: 'Products', routerlink: ['/', 'our-products']},
    {title: 'Special Offers', routerlink: ['/', 'special-offers']},
    {title: 'Markets', routerlink: ['/', 'markets']},
    {title: 'Contact', routerlink: ['/', 'contact']},
  ];

  socialLinks: Links = [
    {title: 'Facebook', href: 'https://www.facebook.com/traditionalfarmhousemeat/', icon: 'Facebook'},
    {title: 'Twitter', href: 'https://twitter.com/kenwebbsbeef/', icon: 'Twitter'},
  ];

}

import { Component, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IUser } from 'src/app/services/core/IApp';
import { GlobalsService } from 'src/app/services/core/globals';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  title: string = '';

  userDetails: IUser | undefined;

  @Output() emitSidebarToggle: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private titleService: Title, public globals: GlobalsService) {
    this.globals.router.events.subscribe((val) => {
      this.title = this.titleService.getTitle();
    });
  }

  async ngOnInit() {}

  selectDropdown(event: any) {
    // close other dropdown options
    event.preventDefault();
    let mainElement = event.target;
    const element = document.querySelectorAll('.dropdown-options');
    element.forEach((el) => {
      if (
        el.classList.contains('show') &&
        el !== mainElement.nextElementSibling
      ) {
        el.classList.remove('show');
      }
    });

    if (mainElement.nodeName !== 'BUTTON') mainElement = mainElement.parentNode;

    // add show class to dropdown options
    for (let i = 0; i < mainElement.children.length; i++) {
      if (mainElement.children[i].classList.contains('dropdown-options')) {
        mainElement.children[i].classList.toggle('show');
      }
    }

    // close dropdown options on click outside
    document.addEventListener('mousedown', (e: any) => {
      const element = document.querySelectorAll('.dropdown-options');
      element.forEach((el) => {
        if (!el.contains(e.target)) {
          el.classList.remove('show');
        }
      });
    });
  }

  toggleSidebar() {
    this.emitSidebarToggle.emit(true);
    document.addEventListener('mousedown', (e: any) => {
      const element = document.querySelectorAll('.sidenav');
      element.forEach((el) => {
        if (!el.contains(e.target)) {
          this.emitSidebarToggle.emit(false);
        }
      });
    });
  }

  logOut() {
    this.globals.logOutUser();
  }
}

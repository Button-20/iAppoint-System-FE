import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() totalItems: number = 0; // Total number of items
  @Input() itemsPerPage: number = 0; // Number of items to display per page
  @Input() currentPage: number = 1;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() itemsPerPageChanged: EventEmitter<number> =
    new EventEmitter<number>();

  resultPerPage: number[] = [5, 10, 20, 50];

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  constructor() {}

  ngOnInit(): void {}

  onPageChange(page: any): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChanged.emit(this.currentPage);
    }
  }

  getPagesArray(): (number | string)[] {
    const pagesToShow = 5; // Number of pages to show in the pagination bar
    const pages: (number | string)[] = [];
    const totalPages = this.totalPages;

    let startPage: number;
    let endPage: number;

    // Case 1: If total pages are less than or equal to the number of pages to show,
    // display all pages
    if (totalPages <= pagesToShow) {
      startPage = 1;
      endPage = totalPages;
    }
    // Case 2: If the current page is close to the start of the pagination bar
    else if (this.currentPage <= Math.ceil(pagesToShow / 2)) {
      startPage = 1;
      endPage = pagesToShow;
    }
    // Case 3: If the current page is close to the end of the pagination bar
    else if (this.currentPage + Math.floor(pagesToShow / 2) >= totalPages) {
      startPage = totalPages - pagesToShow + 1;
      endPage = totalPages;
    }
    // Case 4: If the current page is in the middle of the pagination bar
    else {
      startPage = this.currentPage - Math.floor(pagesToShow / 2);
      endPage = this.currentPage + Math.floor(pagesToShow / 2);
    }

    // Generate the array of page numbers to display
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add ellipsis and adjust startPage if necessary
    if (startPage > 2) {
      pages.unshift('...');
      pages.unshift(1);
    } else if (startPage === 2) {
      pages.unshift(startPage - 1);
    }

    // Add ellipsis and adjust endPage if necessary
    if (endPage < totalPages - 1) {
      pages.push('...');
      pages.push(totalPages);
    } else if (endPage === totalPages - 1) {
      pages.push(endPage + 1);
    }

    return pages;
  }

  selectDropdown(event: any) {
    // close other dropdown options
    event.preventDefault();
    const element = document.querySelectorAll('.dropdown-options');
    element.forEach((el) => {
      if (
        el.classList.contains('show') &&
        el !== event.target.nextElementSibling
      ) {
        el.classList.remove('show');
      }
    });

    // add show class to dropdown options
    event.target.children[1]?.classList.toggle('show');

    // close dropdown options when click outside
    document.addEventListener('mousedown', (e: any) => {
      if (!e.target?.classList.contains('dropdown-option')) {
        element.forEach((el) => {
          if (el.classList.contains('show')) {
            el.classList.remove('show');
          }
        });
      }
    });
  }

  changeResultPerPage(resultPerPage: number) {
    this.itemsPerPage = resultPerPage;
    this.itemsPerPageChanged.emit(this.itemsPerPage);
  }

  pageType(page: any): string {
    return typeof page;
  }
}

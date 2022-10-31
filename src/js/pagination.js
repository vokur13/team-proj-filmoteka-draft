import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getMovie } from './api';

const options = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 10,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

export const container = document.getElementById('tui-pagination-container');
export const instance = new Pagination(container, options);

// const pagination = new Pagination('.tui-pagination', options);

// instance.getCurrentPage();
// console.log('getCurrentPage()', instance.getCurrentPage());

// instance.movePageTo(7);
// console.log('movePageTo()', instance.movePageTo(4));

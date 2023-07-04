import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  currentPage: number = 1;
  itemsPerPage: number = 2;
  totalItems: number = 0;
  sortedColumn: string = '';
  sortOrder: string = 'asc';

person:any[]=[
  {name:'shivsoni',age:22,address:'raipur'},
  {
    name:'aliyasoni',age:5,address:'durg'
  },{
    name:'riyasoni',age:3,address:'raipur'
  },
  {
    name:'pushpasoni',age:33,address:'raipur'
  },{
    name:'payalsoni',age:20,address:'raipur'
  }
]

  // Sorting function
  sortData(column: string) {
    if (column === this.sortedColumn) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortOrder = 'asc';
    }

    // Perform sorting logic on your person array here
    this.person.sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });

    // Update pagination after sorting
    this.currentPage = 1;
  }

  // Pagination functions
  goToPage(page: number) {
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages() {
    return Math.ceil(this.person.length / this.itemsPerPage);
  }

  get visibleItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.person.slice(startIndex, endIndex);
  }
}

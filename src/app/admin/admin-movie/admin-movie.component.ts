import {Component, OnInit} from '@angular/core';
import {IMovie} from '../../_shared/movie';
import {MovieService} from '../../_services/movie.service';
import {AdminService} from '../../_services/admin.service';


@Component({
  selector: 'app-admin-movie',
  templateUrl: './admin-movie.component.html',
  styleUrls: ['./admin-movie.component.css']
})
export class AdminMovieComponent implements OnInit {

  i = 0;
  editId: string | null = null;
  listOfData: IMovie[] = [];

  // for edit
  isEdit = false;
  isOkLoading = false;
  itemToEdit: IMovie;

  // for create
  isCreate = false;

  constructor(
    private movieService: MovieService,
    private adminService: AdminService) {
  }

  deleteRow(id: string): void {
    this.adminService.deleteMovie(id).subscribe(data => {
      console.log('xoa thanh cong');
      this.listOfData = this.listOfData.filter(d => d._id !== id);
    });
  }

  ngOnInit(): void {
    this.adminService.getMovies().subscribe(
      data => {
        this.listOfData = data;
      }
    );
  }

  // Edit Movie
  showEdit(data: IMovie): void {
    this.itemToEdit = data;
    this.isEdit = true;
  }

  hideEdit(isHide: boolean): void {
    this.isEdit = false;
  }

  // Create Movie
  showCreate(): void {
    this.isCreate = true;
  }

  hideCreate(isHide: boolean): void {
    this.isCreate = false;
  }
}

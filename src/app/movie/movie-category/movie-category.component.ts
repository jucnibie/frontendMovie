import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {MovieService} from 'src/app/_services/movie.service';
import {ICategory, IMovie} from 'src/app/_shared/movie';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.css']
})
export class MovieCategoryComponent implements OnInit {

  public category: ICategory;

  // custom layout from g-zorro
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map(pramas => pramas.get('name')),
      switchMap(name => this.movieService.getMoviesByCategory(name))
    ).subscribe(
      data => this.category = data,
      error => console.log(error.message)
    );
  }
}

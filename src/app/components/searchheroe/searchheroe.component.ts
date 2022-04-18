import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-searchheroe',
  templateUrl: './searchheroe.component.html'
})
export class SearchHeroeComponent implements OnInit {

  heroes:any[] = []
  termino: string | undefined;

  constructor( private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService,
                private router:Router
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
    this.termino = params['termino']
    this.heroes = this._heroesService.buscarHeroes( params['termino'] )
    console.log(this.heroes);
      
    } )

  }

  public verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
  }

}

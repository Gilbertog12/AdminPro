import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.scss']
})
export class BreadcrumsComponent implements OnInit {

titulo: string

  constructor( private router: Router , private title : Title, private meta : Meta) {

   
    this.GetDataRoute().subscribe(data =>{
        console.log(data);
        this.titulo = data.titulo;
        this.title.setTitle(this.titulo)


        const metatag : MetaDefinition = {

          name: ' descripcion',
          content : this.titulo,
          
        }

        meta.updateTag(metatag)
    });
   }

  ngOnInit(): void {
  }


  GetDataRoute(){

    return this.router.events.pipe(

      filter(event => event instanceof ActivationEnd),
      filter( (event:ActivationEnd) => event.snapshot.firstChild == null),
      map((event:ActivationEnd)=> event.snapshot.data )

    )
  }

}

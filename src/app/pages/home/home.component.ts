import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'SecondApp';
  options: any;
  heroes: any[] = [];

  constructor(private heroService: HeroService) {
    this.options = {
      fileName: 'Heroes',
      columns: [
        {
          title: 'Name',
          name: 'name'
        },
        {
          title: 'Dive',
          name: 'live'
        },
        {
          title: 'Dead',
          name: 'dead'
        },
        {
          title: 'Latest',
          name: 'latest'
        },
        {
          title: 'Oldest',
          name: 'oldest'
        }
      ]
    }
  }

  getData() {
    this.heroService.getData({ key: '87a73fb5-4645-4989-b483-3afecda315f1', lookup: 'builtwith.com' }).subscribe(result => {
      this.heroes = result.groups;
    });
  }

  ngOnInit() {
    this.getData();
  }

}

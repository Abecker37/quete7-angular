import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {
  developer: Developer = new Developer("Becker", "Amaury", 24, "Male", "Web developer", [
  new Skill("PHP", "https://www.php.net/images/logos/new-php-logo.svg", "https://www.php.net/manual/fr/"),
  new Skill("Symfony", "https://symfony.com/logos/symfony_black_03.png", "https://symfony.com/doc/current/index.html"),
  new Skill("Angular", "https://angular.io/assets/images/logos/angular/angular.svg", "https://angular.io/docs"),
  new Skill("JS","https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png", "https://developer.mozilla.org/fr/docs/Web/JavaScript"),
  new Skill("React", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", "https://react.dev/"),
  new Skill("typescript", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png", "https://www.typescriptlang.org/fr"),
  ]
  )

  constructor() {}

  ngOnInit(): void {
    
  }
  
}
import {Component, OnInit} from '@angular/core';
import {PersonneService} from "../../../services/personne.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrls: ['./list-personne.component.css']
})
export class ListPersonneComponent implements OnInit {

  personnes: any;

  constructor(public personneservice: PersonneService, public router: Router) {
  }

  ngOnInit() {
    this.personneservice.listPersonne().subscribe(
      res => {
        console.log("success personne");
        this.personnes = res;
        console.log(this.personnes);
      },
      err => {
        console.log("error personne");
      }
    )
  }

  deletePersonne(id : any) {
    this.personneservice.deletePersonne(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    )
  }
}

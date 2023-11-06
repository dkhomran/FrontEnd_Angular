import {Component, OnInit} from '@angular/core';
import {PersonneService} from "../../../services/personne.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrls: ['./update-personne.component.css']
})
export class UpdatePersonneComponent implements OnInit{
  personne: any;
  id: any;
  constructor(public personneService : PersonneService, private activateRoute: ActivatedRoute, private router: Router) {
  }

  updatePersonne() {
    this.personneService.updatePersonne(this.id, this.personne).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/personne/list']);
      },
      err => {
        console.log(err);
      }
    );
  }
  ngOnInit() {
      this.activateRoute.params.subscribe(
        params => {
          this.id = params['id'];
          this.personneService.getPersonneToUpdate(this.id).subscribe(
            res => {
              this.personne = res;
            },
            err => {
              console.log(err);
            }
          )
        }
      )
  }


}

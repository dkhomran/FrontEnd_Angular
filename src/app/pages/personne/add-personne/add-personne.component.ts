import {Component, OnInit} from '@angular/core';
import { PersonneService } from '../../../services/personne.service'; // Assurez-vous d'importer le service approprié.
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {

  personne = {
    firstname : "",
    lastname : "",
    email : "",
    age : 0
  }

  addPersonne() {
    this.personneservice.storePersonne(this.personne)
      .subscribe(
        res => {
         console.log(res);
         this.router.navigate(['/personne/list'], { queryParams: { successMessage: 'Personne ajoutée avec succès' } });

        },
        err => {
          console.log(err)
        }
      )
  }

  constructor(public personneservice : PersonneService, private router : Router) {}

  ngOnInit() {
  }

}

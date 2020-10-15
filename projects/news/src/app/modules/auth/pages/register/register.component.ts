import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {State} from '../../../../core/redux';
import {Store} from '@ngrx/store';
import {selectAllPrograms} from '../../../../core/redux/program/program.reducer';
import {ProgramsService} from '../../../../core/http/programs/programs.service';
import {Observable, throwError} from 'rxjs';
import {Program} from '../../../../core/redux/program/program.model';
import {RegisterService} from '../../../../core/http/register/register.service';
import {RegisterBody} from '../../../../core/interfaces/register-body';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'ilum-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  programs$: Observable<Program[]>;

  constructor(private fb: FormBuilder,
              private programsService: ProgramsService,
              private store: Store<State>,
              private router: Router,
              private registerService: RegisterService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.programs$ = this.store.select(selectAllPrograms);
    this.programsService.getPrograms()
      .subscribe();
  }


  createForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      interestProgram: ['', [Validators.required]],
      comment: ['', [Validators.required]]
    });
  }

  submit(): void {
    if (this.form.valid) {
      const body: RegisterBody = {
        comment: this.form.controls.comment.value,
        id: this.form.controls.interestProgram.value,
        name: this.form.controls.name.value
      };

      this.registerService.setRegister(body)
        .pipe(
          tap( it => {
            alert('Registro exitoso');
            this.router.navigateByUrl('home');
          }),
          catchError(err =>  {
            alert('El registro no ha podido ser completado, intente nuevamente más tarde');
            return throwError(err);
          })
        )
        .subscribe();
    }
  }
}

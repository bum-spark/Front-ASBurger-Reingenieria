import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProviderService } from '../../../services/provider.service';
import { LocalstorageService } from '../../../services/localstorage.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderDetailComponent } from '../../../private/order-detail/order-detail.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  private _form_builder: FormBuilder = inject(FormBuilder);
  private _router: Router = inject(Router);
  private _provider: ProviderService = inject(ProviderService);
  private _localstorage: LocalstorageService = inject(LocalstorageService);
  private dialog: MatDialog = inject(MatDialog);
  private _snackBar: MatSnackBar = inject(MatSnackBar);
  req: any;

  form_signin: FormGroup = this._form_builder.group({
    name: [null, Validators.required],
    password: [null, Validators.required]
  })

  async signin() {

    if (this.form_signin.valid) {
      try {
        this.req = await this._provider.request('POST', 'auth/signin', this.form_signin.value);


        this._localstorage.setItem('user', this.req);

        const rol = this._localstorage.getItem('user').rol;
        
        switch (rol) {
          case 0:
            this._router.navigate(['private/menu']);
            break;
          case 1:
            this._router.navigate(['private/orders-view']);
            break;
          case 2:
            this._router.navigate(['private/chef-order-view']);
            this.actualOrder();
            break;
          case 3:
            this._router.navigate(['private/menu']);
            break;
        }
      } catch (error) {
        this._snackBar.open('Error de usuario o credenciales. Intenta de nuevo.', '', { duration: 3000 });
      }
    } else {
      this._snackBar.open('Completa todos los campos', '', { duration: 3000 });
    }
  }
  async actualOrder() {

    const orderExist = this._localstorage.getItem('user').actual_order;
    if (orderExist) {
      this.dialog.open(OrderDetailComponent, { data: { idorder: orderExist } });
    }
  }
}

import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { FormComponent } from './collaborators/form/form.component';
import { PasswordRecoveryComponent } from './auth/password-recovery/password-recovery.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: CollaboratorsComponent },
    { path: 'form', component: FormComponent },
    { path: 'recovery', component: PasswordRecoveryComponent }


    
];

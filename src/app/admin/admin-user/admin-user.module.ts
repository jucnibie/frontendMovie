import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminRoutingUserModule } from './admin-routing-user.module';
import { AdminUserComponent } from './admin-user.component';
import {MatButtonModule} from '@angular/material/button';
import {AntModule} from '../../_shared/shared/ant.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AdminUserComponent, CreateUserComponent, EditUserComponent],
    imports: [
        CommonModule,
        AdminRoutingUserModule,
        MatButtonModule,
        AntModule,
        ReactiveFormsModule
    ]
})
export class AdminUserModule { }

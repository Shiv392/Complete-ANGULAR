import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  userForm: FormGroup;
  editForm: FormGroup;
  users: any[] = [];
  isEditModalOpen = false;
  editedUser: any;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const newUser = {
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        password: this.userForm.value.password
      };
      this.users.push(newUser);
      this.userForm.reset();
    }
  }

  deleteUser(user: any) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  openEditModal(user: any) {
    this.editedUser = user;
    this.editForm.patchValue({
      name: user.name,
      email: user.email,
      password: user.password
    });
    this.isEditModalOpen = true;
  }

  onEditSubmit() {
    if (this.editForm.valid && this.editedUser) {
      this.editedUser.name = this.editForm.value.name;
      this.editedUser.email = this.editForm.value.email;
      this.editedUser.password = this.editForm.value.password;
      this.isEditModalOpen = false;
    }
  }

  closeEditModal() {
    this.isEditModalOpen = false;
  }
}

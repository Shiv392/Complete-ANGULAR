import { Component } from '@angular/core';
interface User {
  name: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  users: User[] = [
    { name: 'John Doe', email: 'john@example.com', password: 'password1' },
    { name: 'Jane Smith', email: 'jane@example.com', password: 'password2' },
    { name: 'Bob Johnson', email: 'bob@example.com', password: 'password3' },
  ];
public name:any;
public email:any;
public password:any;
  newUser: User = { name: '', email: '', password: '' };
  editedUser: User = { name: '', email: '', password: '' };
  editedIndex: number = -1;

  clickSubmit(e:any){
    console.log(e);
  }
  addUser() {
  console.log(this.name,this.email,this.password);
  
    this.users.push({ name:this.name, email: this.email, password:this.password });
    // this.newUser = { name: '', email: '', password: '' };
    console.log(this.users);
    
  }


  editUser(index: number) {
    this.editedUser = { ...this.users[index] };
    this.editedIndex = index;
  }

  saveChanges() {
    if (this.editedIndex !== -1) {
      this.users[this.editedIndex] = { ...this.editedUser };
    }
    this.editedUser = { name: '', email: '', password: '' };
    this.editedIndex = -1;
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}

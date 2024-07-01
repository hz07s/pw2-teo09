import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { UserComponent } from './user/user.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HelloWorldComponent, HelloWorldComponent, UserComponent]
})
export class AppComponent {
    users = ['ryan', 'joe', 'cameron', 'john'];
    actividad = false;

    sayHello() {
        alert("Hola desde app.component");
    }

    deleteUser(user : any) {
        for (let i=0; i<this.users.length; i++) {
            if (user == this.users[i]){
                this.users.splice(i,1);
            }
        }
    }

    addUser(newUser : any) {
        this.users.push(newUser.value);
        newUser.value = '';
        newUser.focus();
        return false;
    }

    title = 'my-dream-app';
    name : string;
    email : string;
    webpage :string;
    hobbies : string[];
    showHobbies : boolean;

    constructor() {
        console.log("Constructor is working...");
        this.name = "Hernan Andy";
        this.email = "hchoquehuancaz@unsa.edu.pe";
        this.webpage = "http://www.unsa.edu.pe";
        this.hobbies = ["Futbol", "Programacion", "Ajedrez"];
        this.showHobbies = false;
    }

    toggleHobbies() {
        this.showHobbies = !this.showHobbies;
    }

    newHobby(hobby: any)  {
        this.hobbies.push(hobby.value);
        hobby.value = "";
        return false;
    }
}

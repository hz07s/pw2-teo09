import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from "./hello-world/hello-world.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HelloWorldComponent, HelloWorldComponent]
})
export class AppComponent {
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

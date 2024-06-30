import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'my-dream-app';
    name : string;
    email : string;
    webpage :string;
    hobbies : string[];

    constructor() {
        console.log("Constructor is working...");
        this.name = "Hernan Andy";
        this.email = "hchoquehuancaz@unsa.edu.pe";
        this.webpage = "http://www.unsa.edu.pe";
        this.hobbies = ["Futbol", "Programacion", "Ajedrez"];
    }

    showhobbies() {
        return true;
    }
}

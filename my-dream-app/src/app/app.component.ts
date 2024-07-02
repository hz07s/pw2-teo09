import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Post } from './Post';
import { HttpClientAppModule } from './http-client-app-module';
//import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    template: `
    <h2>Posts</h2>
    <ul>
      <li *ngFor="let post of posts">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  `,
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HelloWorldComponent, HelloWorldComponent,
        UserComponent, FormsModule, HttpClientAppModule]
})
export class AppComponent {
    posts: any[] = []
    constructor(private http: HttpClient) {
        this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.posts = posts;
        console.log(posts)
        });
    }


    // name : string = "Hernan Andy";
    // age : number = 18;
    // username: string = "";

    // users = ['ryan', 'joe', 'cameron', 'john'];
    // actividad = false;

    // sayHello() {
    //     alert("Hola desde app.component");
    // }

    // deleteUser(user : any) {
    //     for (let i=0; i<this.users.length; i++) {
    //         if (user == this.users[i]){
    //             this.users.splice(i,1);
    //         }
    //     }
    // }

    // addUser(newUser : any) {
    //     this.users.push(newUser.value);
    //     newUser.value = '';
    //     newUser.focus();
    //     return false;
    // }

    // title = 'my-dream-app';
    //name : string;
    // email : string;
    // webpage :string;
    // hobbies : string[];
    // showHobbies : boolean;

    // constructor() {
    //     console.log("Constructor is working...");
    //     this.name = "Hernan Andy";
    //     this.email = "hchoquehuancaz@unsa.edu.pe";
    //     this.webpage = "http://www.unsa.edu.pe";
    //     this.hobbies = ["Futbol", "Programacion", "Ajedrez"];
    //     this.showHobbies = false;
    // }

    // toggleHobbies() {
    //     this.showHobbies = !this.showHobbies;
    // }

    // newHobby(hobby: any)  {
    //     this.hobbies.push(hobby.value);
    //     hobby.value = "";
    //     return false;
    // }
}

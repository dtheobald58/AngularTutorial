import { Component } from '@angular/core';

//decorator, identifies class "AppComponent" as a component
@Component({
    //CSS selector, inserts an instance of this component where there is a matching tag in parent HTML
    //in this example the tag would be <my-app>
    selector: 'my-app',
    //template is this component's HTML template, can also be linked to by using "templateUrl"
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    //styleUrls is a link to the above template's stylesheet, can also use "styles" to do CSS inline
    styleUrls: ['./app.component.css'],
})
//make class public/able to be imported by using "export"
export class AppComponent {
    title = 'Tour of Heroes';
}
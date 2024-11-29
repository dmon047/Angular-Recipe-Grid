import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RecipeComponent } from "./components/recipe/recipe.component";


const routes: Routes = [
    {path: '', component: RecipeComponent}
]

@NgModule ({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(routes, {enableTracing: true}),
    ],
    declarations: [
        AppComponent,
        RecipeComponent
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule{}
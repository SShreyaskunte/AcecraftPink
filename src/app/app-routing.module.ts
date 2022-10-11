import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './college/college.component';
import { HomeComponent } from './home/home.component';
import { NotesInfoComponent } from './notes-info/notes-info.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'college',component:CollegeComponent},
  {path:'note',component:NotesInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { OverviewComponent } from './overview.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'contact', component: ContactComponent },
];

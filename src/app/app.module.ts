import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocComponent } from './poc/poc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownFilterPipe } from './filters/dropdown-filter.pipe';
import { WordCupMatchesComponent } from './word-cup-matches/word-cup-matches.component';
import { MatchChosenComponent } from './match-chosen/match-chosen.component';
import { GrocerylistComponent } from './grocerylist/grocerylist.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { AddTestComponent } from './add-test/add-test.component';

@NgModule({
  declarations: [
    AppComponent,
    PocComponent,
    PocComponent,
    DropdownFilterPipe,
    WordCupMatchesComponent,
    MatchChosenComponent,
    GrocerylistComponent,
    AddDishComponent,
    AddTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

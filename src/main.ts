import { bootstrapApplication } from '@angular/platform-browser';

import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { CounterEffects } from './app/store/counter.effects';
import { counterReducer } from './app/store/counter.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({
      counter: counterReducer,
    }),
    provideEffects([CounterEffects]),
  ],
});

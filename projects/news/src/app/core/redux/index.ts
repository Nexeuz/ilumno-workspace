import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromNew from './news/new.reducer';
import * as fromProgram from './program/program.reducer';


export interface State {
  [fromNew.newsFeatureKey]: fromNew.State;
  [fromProgram.programsFeatureKey]: fromProgram.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromNew.newsFeatureKey]: fromNew.reducer,
  [fromProgram.programsFeatureKey]: fromProgram.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];



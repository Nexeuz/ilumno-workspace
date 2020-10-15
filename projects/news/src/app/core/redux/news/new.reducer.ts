import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { New } from './new.model';
import * as NewActions from './new.actions';

export const newsFeatureKey = 'news';

export interface State extends EntityState<New> {
  // additional entities state properties
}

export const adapter: EntityAdapter<New> = createEntityAdapter<New>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(NewActions.addNew,
    (state, action) => adapter.addOne(action.new, state)
  ),
  on(NewActions.upsertNew,
    (state, action) => adapter.upsertOne(action.new, state)
  ),
  on(NewActions.addNews,
    (state, action) => adapter.addMany(action.news, state)
  ),
  on(NewActions.upsertNews,
    (state, action) => adapter.upsertMany(action.news, state)
  ),
  on(NewActions.updateNew,
    (state, action) => adapter.updateOne(action.new, state)
  ),
  on(NewActions.updateNews,
    (state, action) => adapter.updateMany(action.news, state)
  ),
  on(NewActions.deleteNew,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(NewActions.deleteNews,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(NewActions.loadNews,
    (state, action) => adapter.setAll(action.news, state)
  ),
  on(NewActions.clearNews,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();



export const selectNews = createFeatureSelector<State>(newsFeatureKey);


export const selectAllNews = createSelector(
  selectNews,
  selectAll
);

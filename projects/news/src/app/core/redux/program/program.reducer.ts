import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Program} from './program.model';
import * as ProgramActions from './program.actions';
import {newsFeatureKey} from '../news/new.reducer';

export const programsFeatureKey = 'programs';

export interface State extends EntityState<Program> {
  // additional entities state properties

}

export function selectProgramId(a: Program): number {
  return a.id;
}

export const adapter: EntityAdapter<Program> = createEntityAdapter<Program>({
  selectId: selectProgramId
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties

});


export const reducer = createReducer(
  initialState,
  on(ProgramActions.addProgram,
    (state, action) => adapter.addOne(action.program, state)
  ),
  on(ProgramActions.upsertProgram,
    (state, action) => adapter.upsertOne(action.program, state)
  ),
  on(ProgramActions.addPrograms,
    (state, action) => adapter.addMany(action.programs, state)
  ),
  on(ProgramActions.upsertPrograms,
    (state, action) => adapter.upsertMany(action.programs, state)
  ),
  on(ProgramActions.updateProgram,
    (state, action) => adapter.updateOne(action.program, state)
  ),
  on(ProgramActions.updatePrograms,
    (state, action) => adapter.updateMany(action.programs, state)
  ),
  on(ProgramActions.deleteProgram,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ProgramActions.deletePrograms,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ProgramActions.loadPrograms,
    (state, action) => adapter.setAll(action.programs, state)
  ),
  on(ProgramActions.clearPrograms,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();


export const selectPrograms = createFeatureSelector<State>(programsFeatureKey);

export const selectAllPrograms = createSelector(
  selectPrograms,
  selectAll
);

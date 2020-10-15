import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Program } from './program.model';

export const loadPrograms = createAction(
  '[Program/API] Load Programs',
  props<{ programs: Program[] }>()
);

export const addProgram = createAction(
  '[Program/API] Add Program',
  props<{ program: Program }>()
);

export const upsertProgram = createAction(
  '[Program/API] Upsert Program',
  props<{ program: Program }>()
);

export const addPrograms = createAction(
  '[Program/API] Add Programs',
  props<{ programs: Program[] }>()
);

export const upsertPrograms = createAction(
  '[Program/API] Upsert Programs',
  props<{ programs: Program[] }>()
);

export const updateProgram = createAction(
  '[Program/API] Update Program',
  props<{ program: Update<Program> }>()
);

export const updatePrograms = createAction(
  '[Program/API] Update Programs',
  props<{ programs: Update<Program>[] }>()
);

export const deleteProgram = createAction(
  '[Program/API] Delete Program',
  props<{ id: string }>()
);

export const deletePrograms = createAction(
  '[Program/API] Delete Programs',
  props<{ ids: string[] }>()
);

export const clearPrograms = createAction(
  '[Program/API] Clear Programs'
);

import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { New } from './new.model';

export const loadNews = createAction(
  '[New/API] Load News',
  props<{ news: New[] }>()
);

export const addNew = createAction(
  '[New/API] Add New',
  props<{ new: New }>()
);

export const upsertNew = createAction(
  '[New/API] Upsert New',
  props<{ new: New }>()
);

export const addNews = createAction(
  '[New/API] Add News',
  props<{ news: New[] }>()
);

export const upsertNews = createAction(
  '[New/API] Upsert News',
  props<{ news: New[] }>()
);

export const updateNew = createAction(
  '[New/API] Update New',
  props<{ new: Update<New> }>()
);

export const updateNews = createAction(
  '[New/API] Update News',
  props<{ news: Update<New>[] }>()
);

export const deleteNew = createAction(
  '[New/API] Delete New',
  props<{ id: string }>()
);

export const deleteNews = createAction(
  '[New/API] Delete News',
  props<{ ids: string[] }>()
);

export const clearNews = createAction(
  '[New/API] Clear News'
);

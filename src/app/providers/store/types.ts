import type { DeepPartial } from '@reduxjs/toolkit';
import type { rootStore } from '.';

export type AppState = ReturnType<typeof rootStore.getState>;
export type AppPartialState = DeepPartial<AppState>;
export type AppDispatch = typeof rootStore.dispatch;

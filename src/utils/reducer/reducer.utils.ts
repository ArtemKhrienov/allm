import { AnyAction } from 'redux';

export type TMatchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['type'];
  match(action: AnyAction): action is ReturnType<AC>;
};

export type TActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type TAction<T> = {
  type: T;
};

export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): TMatchable<AC>;
// eslint-disable-next-line
export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string; }>(actionCreator: AC): TMatchable<AC>;
// eslint-disable-next-line
export function withMatcher(actionCreator: (...args: any[]) => any) {
  const type = actionCreator().type;

  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

export function createAction<T extends string, P>(
  type: T,
  payload: P
): TActionWithPayload<T, P>;
export function createAction<T extends string>(
  type: T,
  payload: void
): TAction<T>;
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

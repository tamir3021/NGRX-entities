import { Action } from "@ngrx/store";
import { Todo } from "src/app/todos/Todo.model";

export enum TodosActionTypes {
    TodosRequested = 'Todos requested',
    TodosLoaded = 'Todos loaded',
}

export class TodosRequested implements Action {
    readonly type = TodosActionTypes.TodosRequested;
}

export class TodosLoaded implements Action {
    readonly type = TodosActionTypes.TodosLoaded;

    constructor(public payload: {todos: Todo[]}) {}
}

export type TodosActions = 
    TodosRequested
    | TodosLoaded;
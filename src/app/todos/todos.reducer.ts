import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Todo } from "src/app/todos/Todo.model";
import { TodosActions, TodosActionTypes } from "src/app/todos/todos.actions";

export interface State extends EntityState<Todo> {
    isLoading: boolean;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState({ isLoading: false });

export function reducer(
    state = initialState,
    action: TodosActions
): State {
    switch (action.type) {

        case TodosActionTypes.TodosRequested: {
            //tODO: add effect for getting the todos
            return {
                ...state,
                isLoading: true,
            }
        }

        case TodosActionTypes.TodosLoaded: {
            return adapter.setAll(action.payload.todos, state)
        }

        //TODO: add cases for adding and removing todos

        default: {
            return state;
        }
    }
}

export const {
    selectAll
} = adapter.getSelectors();
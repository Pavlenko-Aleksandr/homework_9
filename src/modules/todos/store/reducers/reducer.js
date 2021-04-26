import { ACTION_DELETE_TODO, ACTION_UPDATE_TODO, ACTION_CREATE_TODO } from '../actions/actions';

const INITIAL_STATE = {
    list: [
        { id: 2, title: 'Hello', isDone: true },
        { id: 3, title: 'World', isDone: false },
    ]
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ACTION_DELETE_TODO:
            return {
                ...state,
                list: state.list.filter((item) => item.id !== payload),
            };
        case ACTION_CREATE_TODO:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                    id: new Date(),
                    title: payload,
                    isDone: false
                    }
                ]
            };
        case ACTION_UPDATE_TODO:
            return {
                ...state,
                list: state.list.map((item) => item.id !== payload.id ? item : payload),
            };
        default:
            return state;
    }
}
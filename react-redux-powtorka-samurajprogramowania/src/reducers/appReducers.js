import { ADD, DELETE, EDIT } from "../actions/appActions";

export const appReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case EDIT:
            return state && state.map(currentStateElement => {
                if (currentStateElement.id !== action.payload.id) {
                    return currentStateElement;
                }

                return ({
                    author: action.payload.author,
                    comment: action.payload.comment,
                    id: currentStateElement.id,
                    rate: action.payload.rate,
                })
            });
        case DELETE:
            return state.filter(currentStateElement => currentStateElement.id !== action.payload.id);
        default:
            console.warn(`nie mamy akcji typu: ${action.type}`);
            return state;
    }
}
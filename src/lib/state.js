// global state
let state = {};
// to get the current state
export function getCurrentState() {
    return state;
}

export function setCurrentState(newState) {
    return state = newState;
}


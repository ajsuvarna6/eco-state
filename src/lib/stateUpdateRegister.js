import { getCurrentState } from "./state";

const stateUpdateCallbacks = [];

// for subscribing to update
export function registerToUpdate(callback) {
  stateUpdateCallbacks.push(callback);
  return () => unregisterUpdateCallback(callback);
}

function unregisterUpdateCallback(callback) {
  const registeredCallbackLength = stateUpdateCallbacks.length;
  for (let i = 0; i < registeredCallbackLength; i = i + 1) {
    const registeredCallback = stateUpdateCallbacks[i];
    if (registeredCallback === callback) {
      stateUpdateCallbacks.splice(i, 1);
      break;
    }
  }
}

// update all 
export function notifyAllUpdateListenersOfStateChange() {
  const currentState = getCurrentState();
  for (let registeredCallback of stateUpdateCallbacks) {
    typeof registeredCallback === 'function' && registeredCallback(currentState);
  }
}
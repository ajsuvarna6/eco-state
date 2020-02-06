import { setCurrentState, getCurrentState } from './state';
const listeners = {};

export function getListeners() {
  return listeners;
}

/**
 * 
 * @param {string} listenerType 
 * @param {any} defaultValue 
 * @param {function} listenerHandler 
 */
export function createListeners(listenerType, defaultValue = null, listenerHandler) {
  if (getListeners()[listenerType]) {
    throw Error('Already registered with the same type.')
  }
  getListeners()[listenerType] = listenerHandler;
  setCurrentState({ ...getCurrentState(), [listenerType]: defaultValue});
}

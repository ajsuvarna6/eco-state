import { setCurrentState, getCurrentState } from './state';
import { notifyAllUpdateListenersOfStateChange } from './stateUpdateRegister';
import { getListeners } from './createListener';

/**
 * 
 * @param {string} eventType 
 * @param {any} eventData 
 * @param {function} completionCallback 
 */
export async function eventCreator(eventType, eventData, completionCallback) {
    let eventTypeNewState = await getListeners()[eventType](getCurrentState()[eventType], eventData);
    if (eventTypeNewState) {
        setCurrentState({ ...getCurrentState(), [eventType]: eventTypeNewState });
        typeof completionCallback === 'function' && completionCallback(getCurrentState()[eventType]);
        notifyAllUpdateListenersOfStateChange();
    }
    return getCurrentState();
}
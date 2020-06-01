import { getCurrentState } from './lib/state';
import { createListeners } from './lib/createListener';
import { eventCreator } from './lib/eventCreator';
import { registerToUpdate } from './lib/stateUpdateRegister';

const ecoState = { getCurrentState, createListeners, eventCreator, registerToUpdate };

export default ecoState;

export { getCurrentState, createListeners, eventCreator, registerToUpdate };

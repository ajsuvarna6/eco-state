import { stateType } from "./state";

type eventDataType = any | null;
type completionCallbackType = Function | null | undefined;

/**
 * Function to create events
 * @param {string} eventType 
 * @param {any} eventData 
 * @param {Function} completionCallback 
 */
export declare async function eventCreator<stateType>(eventType: string, eventData: eventDataType, completionCallback: completionCallbackType): Promise<stateType>;

type listenersType = {}
type listenerHandlerFunction = Function;
type defaultValueType = any | null;

declare const listeners: listenersType;

export function getListeners<listenersType>(): listenersType;

/**
 * Function to create listeners
 * @param {string} listenerType 
 * @param {defaultValueType} defaultValue 
 * @param {listenerHandlerFunction} listenerHandler 
 */
export function createListeners(listenerType: string, defaultValue: defaultValueType, listenerHandler: listenerHandlerFunction): void;

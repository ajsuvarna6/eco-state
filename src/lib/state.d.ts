type stateType = {}

declare let state: stateType;

/**
 * Function to get the current state data
 */
export declare function getCurrentState<stateType>() : stateType;

/**
 * Function to update the state
 * @param {stateType} newState
 * @returns stateType
 */
export declare function setCurrentState<stateType>(newState: stateType): stateType;


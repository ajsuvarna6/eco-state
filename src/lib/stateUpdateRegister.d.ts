type stateUpdateCallbacksType = Array<Function>;

declare const stateUpdateCallbacks: stateUpdateCallbacksType;

type unregisterFromUpdateCallback = Function;
type registerToUpdateCallback = Function;

/**
 * for subscribing to update
 * @param {registerToUpdateCallback} callback 
 */
export declare function registerToUpdate<unregisterFromUpdateCallback>(callback: registerToUpdateCallback): unregisterFromUpdateCallback;

declare function unregisterUpdateCallback(callback: registerToUpdateCallback): void;

/**
 * update all subscribers
 */
export declare function notifyAllUpdateListenersOfStateChange(): void;
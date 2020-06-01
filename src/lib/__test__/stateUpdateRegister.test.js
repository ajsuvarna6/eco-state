import { registerToUpdate, notifyAllUpdateListenersOfStateChange } from '../stateUpdateRegister';

describe("testing stateUpdateRegister", () => {
    it('registerToUpdate trigger callback', () => {
        const updateCallbackFn = jest.fn()
        const unregisterFromUpdate = registerToUpdate(updateCallbackFn);
        notifyAllUpdateListenersOfStateChange();
        expect(updateCallbackFn).toBeCalledTimes(1);
        updateCallbackFn.mockClear();
        // unregisterFromUpdate();
    });

    it('test registerToUpdate unregister function triggering', () => {
        const updateCallbackFn = jest.fn();
        const updateCallbackFn2 = jest.fn();
        const unregisterFromUpdate = registerToUpdate(updateCallbackFn);
        const unregisterFromUpdate2 = registerToUpdate(updateCallbackFn2);
        unregisterFromUpdate2();
        notifyAllUpdateListenersOfStateChange();
        expect(updateCallbackFn).toBeCalledTimes(1);
        expect(updateCallbackFn2).toBeCalledTimes(0);
    });
});



import { setCurrentState, getCurrentState } from '../state';

describe('testing state file', () => {
    it('verify state update', () => {
        const updateStateValue = {
            newData: "sample"
        };
        setCurrentState(updateStateValue);
        expect(getCurrentState()).toBe(updateStateValue);
    });
});

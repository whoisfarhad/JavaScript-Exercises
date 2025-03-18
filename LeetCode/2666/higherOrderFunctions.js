var once = function (fn) {
    let hasBeenCalled = false;
    let result;

    return function (...args) {
        if (!hasBeenCalled) {
            result = fn(...args);
            hasBeenCalled = true;
            return result;
        }
        return undefined;
    }
}
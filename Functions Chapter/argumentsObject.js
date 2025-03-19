function max(x) {
    let maxValue = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxValue) maxValue = arguments[i];
    }

    return maxValue;
}

max(1, 1000, 10, 39, 2, 46, 500, 20000);
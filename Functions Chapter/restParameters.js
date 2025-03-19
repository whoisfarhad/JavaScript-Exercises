function max(first = -Infinity, ...rest) {
    let maxValue = first;

    for (let n of rest) {
        if (n > maxValue) {
            maxValue = n;
        }
    }
    return maxValue;
}

max(1, 1000, 10, 39, 2, 46, 500, 20000);
function zero() {
    if (!arguments.length)
        return 0;
    return calculate (0, arguments[0].arg, arguments[0].operation)
}
function one() {
    if (!arguments.length)
        return 1;
    return calculate (1, arguments[0].arg, arguments[0].operation)
}
function two() {
    if (!arguments.length)
        return 2;
    return calculate (2, arguments[0].arg, arguments[0].operation)
}
function three() {
    if (!arguments.length)
        return 3;
    return calculate (3, arguments[0].arg, arguments[0].operation)
}
function four() {
    if (!arguments.length)
        return 4;
    return calculate (4, arguments[0].arg, arguments[0].operation)
}
function five() {
    if (!arguments.length)
        return 5;
    return calculate (5, arguments[0].arg, arguments[0].operation)
}
function six() {
    if (!arguments.length)
        return 6;
    return calculate (6, arguments[0].arg, arguments[0].operation)
}
function seven() {
    if (!arguments.length)
        return 7;
    return calculate (7, arguments[0].arg, arguments[0].operation)
}
function eight() {
    if (!arguments.length)
        return 8;
    return calculate (8, arguments[0].arg, arguments[0].operation)
}
function nine() {
    if (!arguments.length)
        return 9;
    return calculate (9, arguments[0].arg, arguments[0].operation)
}

function plus() {
    return {arg: arguments[0], operation: 'plus'};
}
function minus() {
    return {arg: arguments[0], operation: 'minus'};
}
function times() {
    return {arg: arguments[0], operation: 'times'};
}
function dividedBy() {
    return {arg: arguments[0], operation: 'dividedBy'};
}

function calculate(a, b, operation) {
    switch (operation) {
        case 'plus':
            return a + b;
        case 'minus':
            return a - b;
        case 'times':
            return a * b;
        case 'dividedBy':
            return Math.floor(a / b);
    }
}
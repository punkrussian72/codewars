function sumStrings(str1, str2) {
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    let result = [];
    const sumChars = (arg1, arg2, prevVal = 0) => {
        if (arg1.length === 0) {
            if (prevVal > 0) {
                sumChars(arg2, [prevVal], 0);
            } else result = result.concat(arg2.reverse());
        } else if (arg2.length === 0) {
            if (prevVal > 0) {
                sumChars(arg1, [prevVal], 0);
            } else result = result.concat(arg1.reverse());
        } else {
            let twoCharsSum =
                parseInt(arg1.splice(arg1.length - 1, 1), 10) +
                parseInt(arg2.splice(arg2.length - 1, 1), 10);
            let lastDigitTwoCharsSum = twoCharsSum % 10 + prevVal;
            let newPrevVal;
            if (lastDigitTwoCharsSum > 9) {
                newPrevVal = Math.floor(twoCharsSum / 10) + 1;
            } else newPrevVal = Math.floor(twoCharsSum / 10);
            result.push(lastDigitTwoCharsSum % 10);
            sumChars(arg1, arg2, newPrevVal);
        }
    };
    sumChars(arr1.slice(), arr2.slice());
    return result
        .reverse()
        .join("")
        .replace(/^0*/, "");
}
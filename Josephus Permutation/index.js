function josephus(items,k){
    let result = [];
    let newTail;
    let nextItem;
    while (items.length !== 0) {
        nextItem = k % items.length;
        if (nextItem === 1)
            result.push(items.shift());
        else if (nextItem === 0)
            result.push(items.pop());
        else {
            newTail = items.splice(0, nextItem-1);
            result.push(items.shift());
            items = [...items, ...newTail];
        }
    }
    return result;
}
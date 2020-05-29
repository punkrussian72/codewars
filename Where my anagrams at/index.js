function anagrams(word, words) {
    word = word.split('').sort().join('');
    words = words.filter((w) => {
        if (w.length !== word.length) return false;
        return word === w.split('').sort().join('');
    });
    return words;
}
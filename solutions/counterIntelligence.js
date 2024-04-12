const alphabetLookup = {
    A:1,
    B:2,
    C:3,
    D:4,
    E:5,
    F:6,
    G:7,
    H:
}

function counterIntelligence(encryptedStr){
    const splitStr = encryptedStr.split(' ');
    const key = splitStr[splitStr.length - 1];
    const shift = findShift(key);

    const decrypted = splitStr.map((word) => {
        const splitWord = word.split('');
        let decryptedWord = splitWord.map((char) => {
            let decryptedChar = String.fromCharCode(char.charCodeAt(0) + shift);
            return decryptedChar;
        });
        return decryptedWord.join('');
    });
    
    return decrypted.join(' ')
};

module.exports = counterIntelligence
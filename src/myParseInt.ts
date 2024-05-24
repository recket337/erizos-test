export function myParseInt(str: string, ignoreLetters: boolean = false) {
    let preparsedStr = str.trim();
    const isNegative = preparsedStr[0] === '-';

    if (isNegative) {
        preparsedStr = preparsedStr.substring(1);
    }

    let result = 0;

    for (let i = 0; i < preparsedStr.length; i++) {
        const charCode = preparsedStr.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            result = result * 10 + (charCode - 48);
        } else {
            if (ignoreLetters) {
                continue;
            } else {
                break;
            }
        }
    }

    return isNegative ? result * (-1) : result;
}
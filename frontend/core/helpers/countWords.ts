function countWords(str: string): number {
    str = str.replace(/<\/?[^>]+(>|$)/g, "");

    if (str === "") {
        return 0;
    }
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    str = str.replace(/\n /, "\n");

    return str.split(' ').length;
}

export default countWords

export default (str: string) => {
    let arr = str.split('-');
    let capital = arr.map((item, index) => {
        return index 
            ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() 
            : item
    });
    return capital.join("");
}
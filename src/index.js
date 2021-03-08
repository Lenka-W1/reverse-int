module.exports = function reverse (n) {
    if(n < 0) n = n *(-1);
    let num = String(n);
    let number = num.split('').reverse().join('')
    return number;
}

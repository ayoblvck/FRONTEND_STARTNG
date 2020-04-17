function checkDivisibility(number) {
    var array = [];
    // array of numbers from 1 to number
    for (i = 1; i <= number; i++)
    // test for divisibility
    {
        if (i % 2 === 0 && i % 3 === 0) {
            array.push("yu-gi");
        } else if (i % 3 == 0 && i % 5 === 0) {
            array.push("gi-oh");
        } else if (i % 2 === 0 && i % 5 === 0) {
            array.push("yu-oh");
        } else if (i % 2 === 0) {
            array.push("yu");
        } else if (i % 3 === 0) {
            array.push("gi");
        } else if (i % 5 === 0) {
            array.push("oh");
        } else {
            array.push(i);
        }
    }
    console.log(array);
}
checkDivisibility(100)

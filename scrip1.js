var array = [{
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
];

function Calculator(arr) {
    let interestData = [...arr];
    for (let each of interestData) {
        if (each.principal >= 2500 && each.time > 1 && each.time < 3) {
            each.rate = 3;
        } else if (each.principal >= 2500 && each.time >= 3) {
            each.rate = 4;
        } else if (each.principal < 2500 || each.time <= 2) {
            each.rate = 2;
        } else {
            each.rate = 1;
        }
        each.interest = ((each.principal * each.rate * each.time) / 100)
    }
    console.log(interestData)
    return interestData;
}
Calculator(array);

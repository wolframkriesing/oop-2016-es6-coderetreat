let digitSum = (number) => String(number).split('').reduce((x, y) => Number(x) + Number(y));

console.log(digitSum(4242));



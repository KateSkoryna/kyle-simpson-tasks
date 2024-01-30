function range(start, end) {
    start = Number(start) || 0;

    if (end === undefined) {
        return (end) => {
            return getRange(start, end);
        }

    } else {
        end = Number(end) || 0;
        return getRange(start, end)
    }
    function getRange(start, end) {
        let arr = [];
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
        return arr;
    }

}

console.log(range("3", "10"))
console.log(range(3, 8))
console.log(range(3, 0))

const a = range(3);
console.log(a(3))
console.log(a(10))

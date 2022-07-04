function task1() {
    let triangle = {
        aSide: 0,
        bSide: 0,
        cSide: 0,
        setValues: function () {
            this.aSide = +prompt('Enter number for aSide', '2');
            this.bSide = +prompt('Enter number for bSide', '3');
            this.cSide = +prompt('Enter number for cSide', '4');
            console.log(this.aSide, this.bSide, this.cSide);
        },
        getPerimeter: function () {
            return this.aSide + this.bSide + this.cSide;
        },
        isEqualSides: function () {
            let result = true;
            if (this.aSide !== this.bSide) {
                result = false;
                return result;
            }
            return result;

        }
    }
    triangle.setValues(); // for example 3 3 3
    console.log(triangle.getPerimeter()); // 9
    console.log(triangle.isEqualSides()); // true
}

function task2() {
    const calculator = {
        x: 0,
        y: 0,
        read: function () {
            this.x = +prompt('Enter number for aSide', '2');
            this.y = +prompt('Enter number for bSide', '3');
            console.log(this.x, this.y);
        },
        sum: function () {
            return this.x + this.y;
        },
        multi: function () {
            return this.x * this.y;
        },
        diff: function () {
            return this.x - this.y;
        },
        div: function () {
            return this.x / this.y;
        }
    }
    calculator.read();
    console.log(calculator.sum());
    console.log(calculator.multi());
    console.log(calculator.diff());
    console.log(calculator.div());
}

function task3() {
    let country = {
        name: 'Ukraine',
        language: 'ukrainian',
        capital: {
            name: 'Kyiv',
            population: 2907817,
            area: 847.66
        }
    };
    function format(start, end) {
        console.log(start + this.name + end);
    }

    format.call(country, '', ''); // Ukraine
    format.apply(country, ['[', ']']); // [Ukraine]
    format.call(country.capital, '', ''); // Kyiv
    format.apply(country.capital, ['', '']); // Kyiv
    format.apply(country.capital.name, ['', '']); // undefined
}

function task4() {
    var text = 'outside';
    function logIt(){
        console.log(text);
        var text = 'inside';
    }
    logIt();
    // виведе undefined, тому що ми виклакаємо змінну, яка не ініціалізована, var = let.
}
function Fibonacci(count) {
    this.count = count;

    this[Symbol.iterator] = function () {
        return {
            count: count,
            currentIndex: 0,
            first: 1,
            second: 1,

            next: function () {

                if (this.currentIndex >= this.count) {
                    return {
                        done: true
                    };
                }

                this.currentIndex++;

                if (this.currentIndex === 1) {
                    return {
                        done: false,
                        value: 1
                    };
                }

                if (this.currentIndex === 2) {
                    return {
                        done: false,
                        value: 1
                    };
                }

                const nextValue = this.first + this.second;

                this.first = this.second;
                this.second = nextValue;

                return {
                    done: false,
                    value: nextValue
                };
            }
        };
    };
}

module.exports = Fibonacci;
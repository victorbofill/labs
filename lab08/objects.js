'use strict';

const danny = {
    wants: 'chips',
    budget: 10,
    cart: [],
    buy: function (item) {
        if (this.budget >= item.price) {
            console.log('Danny bought ' + item.name + '!');
            this.cart.push(item);
        } else {
            console.log('Danny can\'t afford ' + item.name + ' :(');
        }
    }
    
};

const chipsOne = {
    name: 'chips',
    price: 15
};

const chipsTwo = {
    name: 'chips',
    price: 10
};

const chipsThree = {
    name: 'chips',
    price: 2.50
};

danny.buy(chipsOne);
console.log(danny);
danny.buy(chipsTwo);
console.log(danny);
danny.buy(chipsThree);
console.log(danny);

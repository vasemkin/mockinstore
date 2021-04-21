const { fake } = require('faker');

module.exports = function(){
    const faker = require('faker');
    const _ = require('lodash');
    faker.locale = 'ru';
    return {
        items : _.times(300, function(n){

            const colors = [1,2,3].map(() => {
                return(faker.commerce.color())
            });

            return {
                id : n,
                productName : faker.commerce.productName(),
                price : faker.commerce.price(),
                department : faker.commerce.department(),
                colors : colors,
                defaultColor : faker.datatype.number({ 'min': 0, 'max': 2 }),
                productMaterial : faker.commerce.productMaterial(),
                productDescription : faker.commerce.productDescription(),
                image : `${faker.image.abstract()}?random=${Date.now()}`,
                purchased : faker.datatype.number()
            }
        }),
        orders : {}
    }
}
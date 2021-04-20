module.exports = function(){
    const faker = require('faker');
    const _ = require('lodash');
    return {
        items : _.times(300, function(n){
            return {
                id : n,
                productName : faker.commerce.productName(),
                price : faker.commerce.price(),
                department : faker.commerce.department(),
                color : faker.commerce.color(),
                productMaterial : faker.commerce.productMaterial(),
                productDescription : faker.commerce.productDescription(),
                image : `${faker.image.abstract()}?random=${Date.now()}`,
                purchased : faker.datatype.number()
            }
        })
    }
}
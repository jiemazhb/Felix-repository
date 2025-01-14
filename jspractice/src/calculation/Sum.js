function sum(a, b) {
    return a + b;
}


function calculateDiscount(price, userType) {
    if (typeof price !== 'number' || price < 0) {
        throw new Error('Invalid price');
    }

    if (!['regular', 'member', 'vip'].includes(userType)) {
        throw new Error('Invalid user type');
    }

    let discount = 0;

    // 根据用户类型设置基础折扣
    switch (userType) {
        case 'regular':
            discount = 0; // 无折扣
            break;
        case 'member':
            discount = 0.1; // 10% 折扣
            break;
        case 'vip':
            discount = 0.2; // 20% 折扣
            break;
    }

    // 如果价格超过 500，额外加 5% 折扣
    if (price > 500) {
        discount += 0.05;
    }

    // 如果价格超过 1000，额外加 10% 折扣
    if (price > 1000) {
        discount += 0.1;
    }

    // 计算折扣后的价格
    const finalPrice = price * (1 - discount);

    // 保证价格最低为 0
    return Math.max(finalPrice, 0);
}

module.exports = {
    calculateDiscount,
    sum
};
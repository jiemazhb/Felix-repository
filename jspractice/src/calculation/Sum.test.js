const { calculateDiscount, sum } = require('./Sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);
});

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
});

test("price is not number or negative number", ()=>{
    expect(() => calculateDiscount("abc", "vip")).toThrow("Invalid price")
})

test("userType does not exist", ()=>{
    expect(() => calculateDiscount(234, "Danny")).toThrow("Invalid user type")
})

test("discount for regular", ()=>{
    expect(calculateDiscount(234, "regular")).toBe(234)
})

test("discount for member", ()=>{
    expect(calculateDiscount(234, "member")).toBe(210.6)
})

test("discount for vip", ()=>{
    expect(calculateDiscount(234, "vip")).toBe(187.20000000000002)
})

test("price greater than 500", ()=>{
    expect(calculateDiscount(600, "regular")).toBe(570)
})

test("price greater than 2000", ()=>{
    expect(calculateDiscount(2000, "regular")).toBe(1700)
})

test("final price", ()=>{
    expect(calculateDiscount(234, "regular")).toBe(234)
})


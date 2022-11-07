const sum= require('./sum');

test("test case1 testing sum method",()=>
{
    expect(sum(12,4)).toBe(16)
});

test("test case2 testing sum method",()=>
{
    expect(sum(12,4)).toBe(15)
});
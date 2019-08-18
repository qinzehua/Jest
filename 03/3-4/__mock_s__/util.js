const Util = jest.fn(() => {
    console.log('xxx');
});

Util.prototype.a = jest.fn()
Util.prototype.b = jest.fn()

export { Util }
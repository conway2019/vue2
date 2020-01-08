const MyMath = require('../src/myMath')
const assert = require('assert')
const expect = require('chai').expect;
describe("测试MyMath", function () {
    let mym;
    before(function () {
        mym = new MyMath();

    })

    after(function () {
        console.log("测试结束")
    })
    beforeEach(function () {
        console.log("before each...")
    })
    afterEach(function () {
        console.log("after each...")
    });

    it("测试加法", function (done) {
        mym.sum(1, 2, function (m1) {
            // assert.ok(m1==4)
            expect(m1).to.equal(3)
            done();
        });
    })
    it("测试乘法", function () {
        let m1 = mym.multi(1, 2);
        assert.ok(m1 == 2)
    })
    it('test111', function () {
        expect({x: {a: 1}}).to.have.deep.property('x', {a: 1});
        expect({x: {a: 1}}).to.not.have.property('x', {a: 1});

    })

})


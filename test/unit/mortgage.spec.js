
const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    
    beforeEach(()=>{
        mortgage = new Mortgage();
    
    })
    it('should calculate monthlyPayment', ()=>{
        expect(mortgage.monthlyPayment).to.exist;
    })

    it('should calculate mortgage correctly', ()=>{
        const myMortgage = new Mortgage(100000, .2, 30, 12);
        expect(myMortgage.monthlyPayment()).to.equal(286.2175800076101);
    })

    it('should return monthly payment amount', ()=>{
        const myMortgage = new Mortgage(300000, .4, 25,12);
        expect(myMortgage.monthlyPayment()).to.equal(1050.9997130977545);
    })

    it('should return monthly payment amount', ()=>{
        const myMortgage = new Mortgage(500000, .7, 28,12);
        expect(myMortgage.monthlyPayment()).to.equal(1639.1220122738346);
    })
});
const expect = require('expect');

const utils = require('./utils');

describe('Utils', ()=>{

    describe('#add', ()=>{
        it('should add two numbers', () => {
            let res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });

        it('sould async add two numbers', (done)=>{
            utils.asyncAdd(4, 3, (sum)=>{
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        })
    })


    it('should square a number', () => {
        let res = utils.square(2);
        expect(res).toBe(4).toBeA('number');
    })

    it('should async square a number', (done) => {
        utils.asyncSquare( 3, (square)=>{
            expect(square).toBe(9).toBeA('number');
            done();
        })
    })

    it('should verify first and last name are set', () => {
        let user = {age: 30, location: 'Caracas'}
        let res = utils.setName(user, 'Leonardo Gedler');

        // expect(res).toEqual(user);
        expect(res).toBeA('object').toInclude({firstName: 'Leonardo', lastName: 'Gedler'});
    })

    // it('should expect some values', () => {
    //     // expect(12).toNotBe(11);
    //     // expect({name: 'Leo'}).toEqual({name: 'Leo'});
    //     // expect([2,3,4]).toExclude(5);
    //     expect({
    //         name: 'Leo',
    //         age: 30,
    //         location: 'Caracas'
    //     }).toInclude({
    //         age: 30
    //     })
    // });
})


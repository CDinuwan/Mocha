describe('Mocha Hooks',function(){

    before('Execute Before All Tests',function(){
        console.log('Execute Before All Tests');
    });

    beforeEach('Execute Before Each Tests',function(){
        console.log('Execute Before Each Test');
    });

    after('Execute After All Tests',function(){
        console.log('Execute After All Tests');
    });

    before('Execute After Each Tests',function(){
        console.log('Execute After Each Test');
    });

    it('Mocha Hook Tests',function(){
        console.log('Mocha - This is a Test for Mocha Hooks')
    });
});
import * as angular from 'angular';
import {IQService, IRootScopeService} from 'angular';
import 'angular-mocks';

import {IAsyncPalindromeService} from './i-async-palindrome.service';
import {AsyncPalindromeService} from './async-palindrome.service';
import {PalindromeServiceMock} from '../../palindrome/service/palindrome.service.mock';


describe('AsyncPalindromeService', () => {
    let service: IAsyncPalindromeService;
    let $rootScope: IRootScopeService;
    let $q: IQService;
    let palindromeService: PalindromeServiceMock;

    beforeEach(() => {
        angular
            .module('test', [])
            .service('asyncPalindromeService', AsyncPalindromeService)
            .service('palindromeService', PalindromeServiceMock);
        angular.mock.module('test');
    });

    beforeEach(inject((_$q_, _$rootScope_, _asyncPalindromeService_, _palindromeService_) => {
        $q = _$q_;
        $rootScope = _$rootScope_;
        service = _palindromeService_;
        palindromeService = _palindromeService_;
    }));

    it('should return a deferred palindrome check', done => {
        // given
        const value = 'Anna';
        const palindrome = true;

        palindromeService.isPalindrome.and.returnValue($q.resolve(palindrome));

        // when
        service.isPalindrome(value).then((result: boolean) => {
            // then
            expect(result).toBe(palindrome);
            done();
        });

        $rootScope.$apply();
    });
});

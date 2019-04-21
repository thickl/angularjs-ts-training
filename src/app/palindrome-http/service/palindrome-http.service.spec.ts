import * as angular from 'angular';
import {IHttpBackendService} from 'angular';
import 'angular-mocks';

import {PalindromeHttpService} from './palindrome-http.service';
import {IsPalindromeResponse} from './is-palindrome.response';
import {IPalindromeHttpService} from './i-palindrome-http.service';

describe('PalindromeHttpService', () => {
    let service: IPalindromeHttpService;
    let $httpBackend: IHttpBackendService;

    beforeEach(() => {
        angular
            .module('test', [])
            .service('palindromeService', PalindromeHttpService);
        angular.mock.module('test');
    });

    beforeEach(inject(($injector, _palindromeService_) => {
        $httpBackend = $injector.get('$httpBackend');
        service = _palindromeService_;
    }));

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should call the api and return a palindrome check', done => {
        // given
        const value = 'Anna';
        const palindrome = true;

        $httpBackend.expectPOST(`/api/palindromes/${value}`, {}).respond({ value, palindrome });

        // when
        service.isPalindrome(value).then((response: IsPalindromeResponse) => {
            // then
            expect(response.value).toBe(value);
            expect(response.palindrome).toBe(palindrome);
            done();
        });

        $httpBackend.flush();
    });

    it('should call the api to get palindromes', done => {
        // given
        const values = ['Anna', 'Rotor'];

        $httpBackend.expectGET(`/api/palindromes`).respond(values);

        // when
        service.getPalindromes(false).then(palindromes => {
            // then
            expect(palindromes).toEqual(values);
            done();
        });

        $httpBackend.flush();
    });

    it('should call the api to get palindromes and non-palindromes', done => {
        // given
        const values = ['Anna', 'Rotor', 'Other'];

        $httpBackend.expectGET(`/api/palindromes?include=all`).respond(values);

        // when
        service.getPalindromes(true).then(palindromes => {
            // then
            expect(palindromes).toEqual(values);
            done();
        });

        $httpBackend.flush();
    });
});

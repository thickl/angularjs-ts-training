import * as angular from 'angular';
import 'angular-mocks';
import {PalindromeService} from './palindrome.service';

describe('PalindromeService', () => {
    let service: PalindromeService;

    beforeEach(() => {
        angular
            .module('test', [])
            .service('palindromeService', PalindromeService);
        angular.mock.module('test');
    });

    beforeEach(inject((_palindromeService_) => {
        service = _palindromeService_;
    }));

    it('should check a palindrome', () => {
        expect(service.isPalindrome('Anna')).toBe(true);
    });

    it('should check a word that is no palindrome', () => {
        expect(service.isPalindrome('Not')).toBe(false);
    });
});

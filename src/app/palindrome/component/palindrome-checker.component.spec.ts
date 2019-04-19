import * as angular from 'angular';
import 'angular-mocks';
import {PalindromeCheckerComponent, palindromeCheckerComponentOptions} from './palindrome-checker.component';
import {PalindromeServiceMock} from '../service/palindrome.service.mock';

describe('PalindromeCheckerComponent', () => {
    let component: PalindromeCheckerComponent;
    let palindromeService: PalindromeServiceMock;

    beforeEach(() => {
        angular
            .module('test', [])
            .component('component', palindromeCheckerComponentOptions)
            .service('palindromeService', PalindromeServiceMock);
        angular.mock.module('test');
    });

    beforeEach(inject(($componentController, _palindromeService_) => {
        component = $componentController('component', {}, {});
        palindromeService = _palindromeService_;
    }));

    it('should initially set the name to "Anna"', () => {
        // when
        component.$onInit();

        // then
        expect(component.name).toBe('Anna');
    });

    it('should check name with palindrome service', () => {
        // given
        const name = 'Thomas';
        palindromeService.isPalindrome.and.returnValue(false);

        // when
        component.check(name);

        // then
        expect(palindromeService.isPalindrome).toHaveBeenCalledWith(name);
    });
});

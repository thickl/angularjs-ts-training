import * as angular from 'angular';
import 'angular-mocks';

import {AsyncPalindromeCheckerComponent, asyncPalindromeCheckerComponentOptions} from './async-palindrome-checker.component';
import {AsyncPalindromeServiceMock} from '../service/async-palindrome.service.mock';
import {IQService, IRootScopeService} from 'angular';

describe('AsyncPalindromeCheckerComponent', () => {
    let component: AsyncPalindromeCheckerComponent;
    let palindromeService: AsyncPalindromeServiceMock;
    let $q: IQService;
    let $rootScope: IRootScopeService;

    beforeEach(() => {
        angular
            .module('test', [])
            .component('component', asyncPalindromeCheckerComponentOptions)
            .service('asyncPalindromeService', AsyncPalindromeServiceMock);
        angular.mock.module('test');
    });

    beforeEach(inject(($componentController, _asyncPalindromeService_, _$q_, _$rootScope_) => {
        component = $componentController('component', {}, {});
        palindromeService = _asyncPalindromeService_;
        $q = _$q_;
        $rootScope = _$rootScope_;
    }));

    it('should set default values', () => {
        // when
        component.$onInit();

        // then
        expect(component.name).toBe('Anna');
        expect(component.loading).toBe(false);
        expect(component.lastCheck).not.toBeDefined();
    });

    it('should check name with palindrome service', () => {
        // given
        const name = 'Thomas';
        palindromeService.isPalindrome.and.returnValue($q.resolve(false));

        // when
        component.check(name);

        // then
        expect(component.loading).toBe(true);
        expect(palindromeService.isPalindrome).toHaveBeenCalledWith(name);
        $rootScope.$digest();
        expect(component.loading).toBe(false);
    });
});

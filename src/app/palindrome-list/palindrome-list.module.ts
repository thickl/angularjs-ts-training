import * as angular from 'angular';

import {palindromeCheckerComponentOptions} from './component/palindrome-list-checker.component';
import {PalindromeService} from '../palindrome/service/palindrome.service';
import {palindromeCheckFilter} from './filter/palindrome-check.filter';

export const palindromeListModule = angular
    .module('palindromeList', [])
    .component('palindromeListChecker', palindromeCheckerComponentOptions)
    .service('palindromeService', PalindromeService)
    .filter('palindromeCheck', () => palindromeCheckFilter)
    .name;

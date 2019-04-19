import * as angular from 'angular';

import {PalindromeService} from './service/palindrome.service';
import {palindromeCheckerComponentOptions} from './component/palindrome-checker.component';

export const palindromeModule = angular
    .module('palindrome', [])
    .component('palindromeChecker', palindromeCheckerComponentOptions)
    .service('palindromeService', PalindromeService)
    .name;

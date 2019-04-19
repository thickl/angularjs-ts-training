import * as angular from 'angular';

import {AsyncPalindromeService} from './service/async-palindrome.service';
import {asyncPalindromeCheckerComponentOptions} from './component/async-palindrome-checker.component';
import {PalindromeService} from '../palindrome/service/palindrome.service';

export const asyncPalindromeModule = angular
    .module('palindromeAsync', [])
    .component('asyncPalindromeChecker', asyncPalindromeCheckerComponentOptions)
    .service('asyncPalindromeService', AsyncPalindromeService)
    .service('palindromeService', PalindromeService)
    .name;

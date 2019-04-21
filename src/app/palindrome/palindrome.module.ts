import * as angular from 'angular';

import {PalindromeService} from './service/palindrome.service';
import {palindromeComponentOptions} from './component/palindrome.component';

export const palindromeModule = angular
    .module('palindrome', [])
    .component('palindrome', palindromeComponentOptions)
    .service('palindromeService', PalindromeService)
    .name;

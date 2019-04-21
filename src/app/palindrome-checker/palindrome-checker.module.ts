import * as angular from 'angular';

import {palindromeCheckerComponentOptions} from './component/palindrome-checker.component';
import {palindromeModule} from '../palindrome/palindrome.module';

export const palindromeCheckerModule = angular
    .module('palindromeChecker', [
        palindromeModule,
    ])
    .component('palindromeChecker', palindromeCheckerComponentOptions)
    .name;

import * as angular from 'angular';

import {PalindromeHttpService} from './service/palindrome-http.service';
import {palindromeCheckerComponentOptions} from './component/palindrome-http-checker.component';
import {palindromeListModule} from '../palindrome-list/palindrome-list.module';

export const palindromeHttpModule = angular
    .module('palindromeHttp', [
        palindromeListModule,
    ])
    .component('palindromeHttpChecker', palindromeCheckerComponentOptions)
    .service('palindromeHttpService', PalindromeHttpService)
    .name;

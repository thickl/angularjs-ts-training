import * as angular from 'angular';

import {configuration} from './app.configuration';
import {greeterModule} from './greeter/greeter.module';
import {palindromeModule} from './palindrome/palindrome.module';
import {appComponentOptions} from './app.component';
import {asyncPalindromeModule} from './palindrome-async/async-palindrome.module';
import {palindromeListModule} from './palindrome-list/palindrome-list.module';
import {clickCounterModule} from './click-counter/click-counter.module';
import {lifecycleModule} from './lifecycle/lifecycle.module';
import {palindromeHttpModule} from './palindrome-http/palindrome-http.module';
import {palindromeCheckerModule} from './palindrome-checker/palindrome-checker.module';

export const appModule = angular
    .module('application', [
        greeterModule,
        palindromeModule,
        palindromeCheckerModule,
        asyncPalindromeModule,
        palindromeHttpModule,
        palindromeListModule,
        clickCounterModule,
        lifecycleModule,
    ])
    .component('app', appComponentOptions)
    .config(configuration)
    .name;

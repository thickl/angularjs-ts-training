import * as angular from 'angular';

import {configuration} from './app.configuration';
import {greeterModule} from './greeter/greeter.module';
import {palindromeModule} from './palindrome/palindrome.module';
import {appComponentOptions} from './app.component';
import {asyncPalindromeModule} from './palindrome-async/async-palindrome.module';
import {palindromeListModule} from './palindrome-list/palindrome-list.module';
import {clickCounterModule} from './click-counter/click-counter.module';

export const appModule = angular
    .module('application', [
        greeterModule,
        palindromeModule,
        asyncPalindromeModule,
        palindromeListModule,
        clickCounterModule,
    ])
    .component('app', appComponentOptions)
    .config(configuration)
    .name;

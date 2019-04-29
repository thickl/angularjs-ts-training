import {IDeferred, IPromise, IQService, ITimeoutService} from 'angular';

import {IAsyncPalindromeService} from './i-async-palindrome.service';
import {PalindromeService} from '../../palindrome/service/palindrome.service';

export class AsyncPalindromeService implements IAsyncPalindromeService {
    constructor(private $q: IQService,
                private $timeout: ITimeoutService,
                private palindromeService: PalindromeService) {
        'ngInject';
    }

    isPalindrome(value: string = ''): IPromise<boolean> {
        const defer: IDeferred<boolean> = this.$q.defer<boolean>();

        this.$timeout(() => {
            defer.resolve(this.palindromeService.isPalindrome(value));
        }, 2500);

        return defer.promise;
    }
}

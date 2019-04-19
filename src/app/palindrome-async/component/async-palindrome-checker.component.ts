import {IOnInit} from 'angular';

import {IAsyncPalindromeService} from '../service/i-async-palindrome.service';
import './async-palindrome-checker.component.scss';

export class AsyncPalindromeCheckerComponent implements IOnInit {
    name: string;
    loading: boolean;
    lastCheck: string;

    constructor(private asyncPalindromeService: IAsyncPalindromeService) {
    }

    $onInit(): void {
        this.loading = false;
        this.name = 'Anna';
    }

    check(name: string): void {
        this.loading = true;
        this.asyncPalindromeService.isPalindrome(name)
            .then((palindrome: boolean) => {
                this.lastCheck = `"${name}" is ${palindrome ? '' : 'not '}a palindrome`;
                this.loading = false;
            });
    }
}

export const asyncPalindromeCheckerComponentOptions: ng.IComponentOptions = {
    templateUrl: './async-palindrome-checker.component.html',
    controller: AsyncPalindromeCheckerComponent,
    bindings: {
        name: '<',
    }
};

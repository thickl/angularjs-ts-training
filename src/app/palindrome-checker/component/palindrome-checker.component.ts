import {IComponentOptions, IOnInit} from 'angular';

import {IPalindromeService} from '../../palindrome/service/i-palindrome.service';

export class PalindromeCheckerComponent implements IOnInit {
    name: string;
    lastCheck: string;

    constructor(private palindromeService: IPalindromeService) {
        'ngInject';
    }

    $onInit(): void {
        this.name = 'Anna';
    }

    check(name: string): void {
        const palindrome = this.palindromeService.isPalindrome(name);
        this.lastCheck = `"${name}" is ${palindrome ? '' : 'not '}a palindrome`;
    }
}

import './palindrome-checker.component.scss';

export const palindromeCheckerComponentOptions: IComponentOptions = {
    templateUrl: './palindrome-checker.component.html',
    controller: PalindromeCheckerComponent,
    bindings: {
        name: '<',
    }
};

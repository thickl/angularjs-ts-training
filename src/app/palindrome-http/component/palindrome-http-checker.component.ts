import {IPalindromeHttpService} from '../service/i-palindrome-http.service';
import {IComponentOptions, IOnInit} from 'angular';

export class PalindromeHttpCheckerComponent implements IOnInit {
    names: string[];
    loading: boolean;
    lastCheck: string;
    includeAll: boolean;

    constructor(private palindromeHttpService: IPalindromeHttpService) {
        'ngInject';
    }

    $onInit(): void {
        this.includeAll = false;
        this.reloadPalindromes(this.includeAll);
    }

    check(name: string = ''): void {
        this.loading = true;
        this.palindromeHttpService.isPalindrome(name)
            .then(response => {
                this.lastCheck = `"${name}" is ${response.palindrome ? '' : 'not '}a palindrome`;
                this.loading = false;
            })
            .catch(() => {
                this.lastCheck = `The entered input "${name}" could not be checked.`;
                this.loading = false;
            });
    }

    reloadPalindromes(includeAll: boolean): void {
        this.palindromeHttpService.getPalindromes(includeAll)
            .then(palindromes => {
                this.names = palindromes;
            });
    }
}

import './palindrome-http-checker.component.scss';

export const palindromeCheckerComponentOptions: IComponentOptions = {
    templateUrl: './palindrome-http-checker.component.html',
    controller: PalindromeHttpCheckerComponent,
    bindings: {
        name: '<',
    }
};

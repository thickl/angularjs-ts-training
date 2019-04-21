import {IPalindromeService} from '../service/i-palindrome.service';
import {IComponentOptions} from 'angular';

export class PalindromeComponent {
    name: string;
    palindrome: boolean;

    constructor(private palindromeService: IPalindromeService) {
        this.name = 'Thomas';
        this.palindrome = this.palindromeService.isPalindrome(this.name);
    }
}

import './palindrome.component.scss';

export const palindromeComponentOptions: IComponentOptions = {
    templateUrl: './palindrome.component.html',
    controller: PalindromeComponent,
};

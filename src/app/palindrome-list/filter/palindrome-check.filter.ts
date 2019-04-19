import {PalindromeCheckModel} from '../models/palindrome-check.model';

export function palindromeCheckFilter(check: PalindromeCheckModel): string {
    return check ? `"${check.name}" is ${check.palindrome ? '' : 'not '}a palindrome` : '';
}

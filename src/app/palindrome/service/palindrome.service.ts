import {IPalindromeService} from './i-palindrome.service';

export class PalindromeService implements IPalindromeService {
    isPalindrome(value: string = ''): boolean {
        const trimmedValue = value.trim();
        return trimmedValue && trimmedValue.toLowerCase() === trimmedValue.split('').reverse().join('').toLocaleLowerCase();
    }
}

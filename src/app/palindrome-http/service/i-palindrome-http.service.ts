import {IPromise} from 'angular';
import {IsPalindromeResponse} from './is-palindrome.response';

export interface IPalindromeHttpService {
    getPalindromes(includeAll: boolean): IPromise<string[]>;

    isPalindrome(value: string): IPromise<IsPalindromeResponse>;
}

import {IPromise} from 'angular';

export interface IAsyncPalindromeService {
    isPalindrome(value: string): IPromise<boolean>;
}

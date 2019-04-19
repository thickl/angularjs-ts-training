import {IAsyncPalindromeService} from './i-async-palindrome.service';

export class AsyncPalindromeServiceMock implements IAsyncPalindromeService {
    isPalindrome: jasmine.Spy = jasmine.createSpy('isPalindrome');
}

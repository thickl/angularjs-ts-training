import {IPalindromeService} from './i-palindrome.service';

export class PalindromeServiceMock implements IPalindromeService {
    isPalindrome: jasmine.Spy = jasmine.createSpy('isPalindrome');
}

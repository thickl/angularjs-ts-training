import {IPalindromeHttpService} from './i-palindrome-http.service';

export class PalindromeHttpServiceMock implements IPalindromeHttpService {
    isPalindrome: jasmine.Spy = jasmine.createSpy('isPalindrome');

    getPalindromes: jasmine.Spy = jasmine.createSpy('getPalindromes');
}

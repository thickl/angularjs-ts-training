import {IPalindromeHttpService} from './i-palindrome-http.service';
import {IHttpService, IPromise} from 'angular';
import {IsPalindromeResponse} from './is-palindrome.response';

export class PalindromeHttpService implements IPalindromeHttpService {
    readonly host: string = '/api';
    readonly baseUrl: string = 'palindromes';

    constructor(private $http: IHttpService) {
        'ngInject';
    }

    isPalindrome(value: string = ''): IPromise<IsPalindromeResponse> {
        return this.$http.post<IsPalindromeResponse>(`${this.host}/${this.baseUrl}/${value}`, {})
            .then(response => response.data);
    }

    getPalindromes(includeAll: boolean): IPromise<string[]> {
        return this.$http.get<string[]>(`${this.host}/${this.baseUrl}${includeAll ? '?include=all' : ''}`)
            .then(response => response.data);
    }
}

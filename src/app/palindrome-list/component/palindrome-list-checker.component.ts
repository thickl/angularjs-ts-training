import {IPalindromeService} from '../../palindrome/service/i-palindrome.service';
import {IComponentOptions, IOnInit} from 'angular';

export class PalindromeListCheckerComponent implements IOnInit {
    input: string;
    names: string[];
    lastCheck: PalindromeCheckModel[];

    constructor(private palindromeService: IPalindromeService) {
        'ngInject';
    }

    $onInit(): void {
        this.input = '';
        this.names = ['Anna'];
        this.check();
    }

    addName(name: string = ''): void {
        if (this.isValidInput(name)) {
            this.names.push(name);
            this.input = '';
        }
    }

    isValidInput(input: string = ''): boolean {
        return Boolean(input) && Boolean(input.trim());
    }

    check(): void {
        this.lastCheck = this.updatePalindromes(this.names);
    }

    updatePalindromes(names: string[]): PalindromeCheckModel[] {
        return names.map(name => this.checkName(name));
    }

    removeName(index: number): void {
        this.names.splice(index, 1);
    }

    private checkName(name: string): PalindromeCheckModel {
        return {
            name,
            palindrome: this.palindromeService.isPalindrome(name),
        };
    }
}

import './palindrome-list-checker.component.scss';
import {PalindromeCheckModel} from '../models/palindrome-check.model';

export const palindromeCheckerComponentOptions: IComponentOptions = {
    templateUrl: './palindrome-list-checker.component.html',
    controller: PalindromeListCheckerComponent,
    bindings: {
        name: '<',
    }
};

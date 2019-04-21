import {IAttributes, IAugmentedJQuery, IDirective, IRootScopeService} from 'angular';

interface ClickCounterDirectiveScope extends IRootScopeService {
    onClickCounterChanged(event: { counter: number }): void;
}

export class ClickCounterDirective implements IDirective {
    restrict = 'A';
    replace = true;

    scope = {
        onClickCounterChanged: '&',
    };

    counter: number = 0;

    link(scope: ClickCounterDirectiveScope, element: IAugmentedJQuery, attributes: IAttributes) {
        element.on('click', () => {
            scope.onClickCounterChanged({ counter: ++this.counter });
            scope.$apply();
        });
    }

}

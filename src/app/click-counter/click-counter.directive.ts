export class ClickCounterDirective implements ng.IDirective {
    restrict = 'A';
    replace = true;

    count: number = 0;

    link(scope: ng.IRootScopeService, element: ng.IAugmentedJQuery, attributes: ng.IAttributes) {
        element.on('click', () => {
            console.log('clicked ' + this.count++ + ' times!');
        });
    }
}

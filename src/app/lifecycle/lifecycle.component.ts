import {IDoCheck, ILogService, IOnChanges, IOnDestroy, IOnInit, IPostLink} from 'angular';

export class LifecycleComponent implements IOnInit, IOnChanges, IDoCheck, IOnDestroy, IPostLink {

    someValue: string;

    initialized: boolean;
    changes: number;
    checked: boolean;

    constructor(private $log: ILogService) {
        this.initialized = false;
        this.changes = 0;
        this.checked = false;
    }

    $onChanges(onChangesObj: angular.IOnChangesObject): void {
        this.$log.info('LifecycleComponent.$onChanges', onChangesObj, '"Called whenever one-way bindings are updated."');
        this.changes++;
    }

    $onInit(): void {
        this.$log.info('LifecycleComponent.$onInit', '"This is a good place to put initialization code for your controller/component."');
        this.initialized = true;
    }

    $doCheck(): void {
        this.$log.info('LifecycleComponent.$doCheck', '"Called on each turn of the digest cycle. Provides an opportunity to detect and act on changes."');
        this.checked = true;
    }

    $postLink(): void {
        this.$log.info('LifecycleComponent.$postLink', '"Called after this controller\'s element and its children have been linked. Allows to set up DOM event handlers and do direct DOM manipulation."');
    }

    $onDestroy(): void {
        this.$log.info('LifecycleComponent.$onDestroy', '"Called on a controller when its containing scope is destroyed. Use this hook for releasing external resources, watches and event handlers."');
    }

}

export const lifecycleComponentOptions: ng.IComponentOptions = {
    templateUrl: './lifecycle.component.html',
    controller: LifecycleComponent,
    bindings: {
        someValue: '<'
    }
};

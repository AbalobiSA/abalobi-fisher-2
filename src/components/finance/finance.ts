import {Component} from '@angular/core';
import {DataProvider} from "../../providers/data/data";


/**
 * Generated class for the FinanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'finance',
    templateUrl: 'finance.html'
})
export class FinanceComponent {


    constructor(data: DataProvider) {
        console.log('Hello FinanceComponent Component');
    }

}

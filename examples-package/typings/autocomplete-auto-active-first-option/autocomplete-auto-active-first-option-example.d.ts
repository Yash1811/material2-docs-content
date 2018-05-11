import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
/**
 * @title Highlight the first autocomplete option
 */
export declare class AutocompleteAutoActiveFirstOptionExample {
    myControl: FormControl;
    options: string[];
    filteredOptions: Observable<string[]>;
    ngOnInit(): void;
    filter(val: string): string[];
}

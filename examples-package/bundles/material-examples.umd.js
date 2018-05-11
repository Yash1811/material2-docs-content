/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/cdk'), require('@angular/material'), require('rxjs/add/operator/startWith'), require('rxjs/add/operator/map'), require('rxjs/BehaviorSubject'), require('rxjs/add/observable/merge'), require('@angular/platform-browser'), require('@angular/http'), require('rxjs/Observable'), require('rxjs/add/operator/first'), require('rxjs/add/operator/catch'), require('rxjs/add/operator/switchMap'), require('rxjs/add/observable/of'), require('rxjs/add/observable/interval'), require('rxjs/add/operator/debounceTime'), require('rxjs/add/operator/distinctUntilChanged'), require('rxjs/add/observable/fromEvent')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/cdk', '@angular/material', 'rxjs/add/operator/startWith', 'rxjs/add/operator/map', 'rxjs/BehaviorSubject', 'rxjs/add/observable/merge', '@angular/platform-browser', '@angular/http', 'rxjs/Observable', 'rxjs/add/operator/first', 'rxjs/add/operator/catch', 'rxjs/add/operator/switchMap', 'rxjs/add/observable/of', 'rxjs/add/observable/interval', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/observable/fromEvent'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['material-examples'] = global.ng['material-examples'] || {}),global.ng.core,global.ng.forms,global.ng.common,global.ng.cdk,global.ng.material,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx,global.Rx.Observable,global.ng.platformBrowser,global.ng.http,global.Rx));
}(this, (function (exports,_angular_core,_angular_forms,_angular_common,_angular_cdk,_angular_material,rxjs_add_operator_startWith,rxjs_add_operator_map,rxjs_BehaviorSubject,rxjs_add_observable_merge,_angular_platformBrowser,_angular_http,rxjs_Observable) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var ExampleMaterialModule = (function () {
    function ExampleMaterialModule() {
    }
    return ExampleMaterialModule;
}());
ExampleMaterialModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                exports: [
                    _angular_cdk.CdkTableModule,
                    _angular_material.MdAutocompleteModule,
                    _angular_material.MdButtonModule,
                    _angular_material.MdButtonToggleModule,
                    _angular_material.MdCardModule,
                    _angular_material.MdCheckboxModule,
                    _angular_material.MdChipsModule,
                    _angular_material.MdDatepickerModule,
                    _angular_material.MdDialogModule,
                    _angular_material.MdGridListModule,
                    _angular_material.MdIconModule,
                    _angular_material.MdInputModule,
                    _angular_material.MdListModule,
                    _angular_material.MdMenuModule,
                    _angular_material.MdProgressBarModule,
                    _angular_material.MdProgressSpinnerModule,
                    _angular_material.MdRadioModule,
                    _angular_material.MdSelectModule,
                    _angular_material.MdSlideToggleModule,
                    _angular_material.MdSliderModule,
                    _angular_material.MdSidenavModule,
                    _angular_material.MdSnackBarModule,
                    _angular_material.MdTabsModule,
                    _angular_material.MdToolbarModule,
                    _angular_material.MdTooltipModule,
                    _angular_material.MdPaginatorModule,
                    _angular_material.MdSortModule,
                    _angular_material.MdTableModule
                ]
            },] },
];
/**
 * @nocollapse
 */
ExampleMaterialModule.ctorParameters = function () { return []; };
/**
 * \@title Basic autocomplete
 */
var AutocompleteOverviewExample = (function () {
    function AutocompleteOverviewExample() {
        var _this = this;
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ];
        this.stateCtrl = new _angular_forms.FormControl();
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterStates(name); });
    }
    /**
     * @param {?} val
     * @return {?}
     */
    AutocompleteOverviewExample.prototype.filterStates = function (val) {
        return val ? this.states.filter(function (s) { return s.toLowerCase().indexOf(val.toLowerCase()) === 0; })
            : this.states;
    };
    return AutocompleteOverviewExample;
}());
AutocompleteOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'autocomplete-overview-example',
                template: "<md-input-container><input mdInput placeholder=\"State\" [mdAutocomplete]=\"auto\" [formControl]=\"stateCtrl\"></md-input-container><md-autocomplete #auto=\"mdAutocomplete\"><md-option *ngFor=\"let state of filteredStates | async\" [value]=\"state\">{{ state }}</md-option></md-autocomplete>",
            },] },
];
/**
 * @nocollapse
 */
AutocompleteOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Basic buttons
 */
var ButtonOverviewExample = (function () {
    function ButtonOverviewExample() {
    }
    return ButtonOverviewExample;
}());
ButtonOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'button-overview-example',
                template: "<button md-button>Click me!</button>",
            },] },
];
/**
 * @nocollapse
 */
ButtonOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Exclusive selection
 */
var ButtonToggleExclusiveExample = (function () {
    function ButtonToggleExclusiveExample() {
    }
    return ButtonToggleExclusiveExample;
}());
ButtonToggleExclusiveExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'button-toggle-exclusive-example',
                template: "<md-button-toggle-group #group=\"mdButtonToggleGroup\"><md-button-toggle value=\"left\"><md-icon>format_align_left</md-icon></md-button-toggle><md-button-toggle value=\"center\"><md-icon>format_align_center</md-icon></md-button-toggle><md-button-toggle value=\"right\"><md-icon>format_align_right</md-icon></md-button-toggle><md-button-toggle value=\"justify\" disabled=\"disabled\"><md-icon>format_align_justify</md-icon></md-button-toggle></md-button-toggle-group><div class=\"example-selected-value\">Selected value: {{group.value}}</div>",
                styles: [".example-selected-value { margin: 15px 0; } "],
            },] },
];
/**
 * @nocollapse
 */
ButtonToggleExclusiveExample.ctorParameters = function () { return []; };
/**
 * \@title Basic button-toggles
 */
var ButtonToggleOverviewExample = (function () {
    function ButtonToggleOverviewExample() {
    }
    return ButtonToggleOverviewExample;
}());
ButtonToggleOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'button-toggle-overview-example',
                template: "<md-button-toggle>Toggle me!</md-button-toggle>",
            },] },
];
/**
 * @nocollapse
 */
ButtonToggleOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Button varieties
 */
var ButtonTypesExample = (function () {
    function ButtonTypesExample() {
    }
    return ButtonTypesExample;
}());
ButtonTypesExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'button-types-example',
                template: "<h3>Basic Buttons</h3><div class=\"button-row\"><button md-button>Basic</button> <button md-button color=\"primary\">Primary</button> <button md-button color=\"accent\">Accent</button> <button md-button color=\"warn\">Warn</button> <button md-button disabled=\"disabled\">Disabled</button> <a md-button routerLink=\".\">Link</a></div><h3>Raised Buttons</h3><div class=\"button-row\"><button md-raised-button>Basic</button> <button md-raised-button color=\"primary\">Primary</button> <button md-raised-button color=\"accent\">Accent</button> <button md-raised-button color=\"warn\">Warn</button> <button md-raised-button disabled=\"disabled\">Disabled</button> <a md-raised-button routerLink=\".\">Link</a></div><h3>Icon Buttons</h3><div class=\"button-row\"><button md-icon-button><md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">favorite</md-icon></button> <button md-icon-button color=\"primary\"><md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">favorite</md-icon></button> <button md-icon-button color=\"accent\"><md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">favorite</md-icon></button> <button md-icon-button color=\"warn\"><md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">favorite</md-icon></button> <button md-icon-button disabled=\"disabled\"><md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">favorite</md-icon></button></div><h3>Fab Buttons</h3><div class=\"button-row\"><button md-fab>Basic</button> <button md-fab color=\"primary\">Primary</button> <button md-fab color=\"accent\">Accent</button> <button md-fab color=\"warn\">Warn</button> <button md-fab disabled=\"disabled\">Disabled</button> <button md-fab><md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">favorite</md-icon></button> <a md-fab routerLink=\".\">Link</a></div><h3>Mini Fab Buttons</h3><div class=\"button-row\"><button md-mini-fab>Basic</button> <button md-mini-fab color=\"primary\">Primary</button> <button md-mini-fab color=\"accent\">Accent</button> <button md-mini-fab color=\"warn\">Warn</button> <button md-mini-fab disabled=\"disabled\">Disabled</button> <button md-mini-fab><md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">favorite</md-icon></button> <a md-mini-fab routerLink=\".\">Link</a></div>",
                styles: [".example-button-row { display: flex; align-items: center; justify-content: space-around; } "],
            },] },
];
/**
 * @nocollapse
 */
ButtonTypesExample.ctorParameters = function () { return []; };
/**
 * \@title Card with multiple sections
 */
var CardFancyExample = (function () {
    function CardFancyExample() {
    }
    return CardFancyExample;
}());
CardFancyExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'card-fancy-example',
                template: "<md-card class=\"example-card\"><md-card-header><div md-card-avatar class=\"example-header-image\"></div><md-card-title>Shiba Inu</md-card-title><md-card-subtitle>Dog Breed</md-card-subtitle></md-card-header><img md-card-image src=\"assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"><md-card-content><p>The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.</p></md-card-content><md-card-actions><button md-button>LIKE</button> <button md-button>SHARE</button></md-card-actions></md-card>",
                styles: [".example-card { width: 400px; } .example-header-image { background-image: url('../../../assets/img/examples/shiba1.jpg'); background-size: cover; } "],
            },] },
];
/**
 * @nocollapse
 */
CardFancyExample.ctorParameters = function () { return []; };
/**
 * \@title Basic cards
 */
var CardOverviewExample = (function () {
    function CardOverviewExample() {
    }
    return CardOverviewExample;
}());
CardOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'card-overview-example',
                template: "<md-card>Simple card</md-card>",
            },] },
];
/**
 * @nocollapse
 */
CardOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Basic CDK data-table
 */
var CdkTableBasicExample = (function () {
    function CdkTableBasicExample() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase();
    }
    /**
     * @return {?}
     */
    CdkTableBasicExample.prototype.ngOnInit = function () {
        this.dataSource = new ExampleDataSource(this.exampleDatabase);
    };
    return CdkTableBasicExample;
}());
CdkTableBasicExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'cdk-table-basic-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; min-width: 300px; } /* * Styles to make the demo's cdk-table match the material design spec * https://material.io/guidelines/components/data-tables.html */ .example-table { flex: 1 1 auto; overflow: auto; max-height: 500px; } .example-header-row, .example-row { display: flex; border-bottom: 1px solid #ccc; align-items: center; height: 32px; padding: 0 8px; } .example-cell, .example-header-cell { flex: 1; } .example-header-cell { font-size: 12px; font-weight: bold; color: rgba(0, 0, 0, 0.54); } .example-cell { font-size: 13px; color: rgba(0, 0, 0, 0.87); } "],
                template: "<div class=\"example-container mat-elevation-z8\"><cdk-table #table [dataSource]=\"dataSource\" class=\"example-table\"><ng-container cdkColumnDef=\"userId\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">ID</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\">{{row.id}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"progress\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">Progress</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\">{{row.progress}}%</cdk-cell></ng-container><ng-container cdkColumnDef=\"userName\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">Name</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\">{{row.name}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"color\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">Color</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\" [style.color]=\"row.color\">{{row.color}}</cdk-cell></ng-container><cdk-header-row *cdkHeaderRowDef=\"displayedColumns\" class=\"example-header-row\"></cdk-header-row><cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\" class=\"example-row\"></cdk-row></cdk-table></div>",
            },] },
];
/**
 * @nocollapse
 */
CdkTableBasicExample.ctorParameters = function () { return []; };
/**
 * Constants used to fill up our data base.
 */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
var ExampleDatabase = (function () {
    function ExampleDatabase() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new rxjs_BehaviorSubject.BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    ExampleDatabase.prototype.addUser = function () {
        var /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    ExampleDatabase.prototype.createNewUser = function () {
        var /** @type {?} */ name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    /**
     * @param {?} _exampleDatabase
     */
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        return _this;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    ExampleDataSource.prototype.connect = function () {
        return this._exampleDatabase.dataChange;
    };
    /**
     * @return {?}
     */
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(_angular_cdk.DataSource));
/**
 * \@title Configurable checkbox
 */
var CheckboxConfigurableExample = (function () {
    function CheckboxConfigurableExample() {
        this.checked = false;
        this.indeterminate = false;
        this.align = 'start';
        this.disabled = false;
    }
    return CheckboxConfigurableExample;
}());
CheckboxConfigurableExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'checkbox-configurable-example',
                template: "<md-card><md-card-content><h2 class=\"example-h2\">Checkbox configuration</h2><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</md-checkbox><md-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</md-checkbox></section><section class=\"example-section\"><label class=\"example-margin\">Align:</label><md-radio-group [(ngModel)]=\"align\"><md-radio-button class=\"example-margin\" value=\"start\">Start</md-radio-button><md-radio-button class=\"example-margin\" value=\"end\">End</md-radio-button></md-radio-group></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</md-checkbox></section></md-card-content></md-card><md-card class=\"result\"><md-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><md-checkbox class=\"example-margin\" [checked]=\"checked\" [indeterminate]=\"indeterminate\" [align]=\"align\" [disabled]=\"disabled\">I'm a checkbox</md-checkbox></section></md-card-content></md-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
CheckboxConfigurableExample.ctorParameters = function () { return []; };
/**
 * \@title Basic checkboxes
 */
var CheckboxOverviewExample = (function () {
    function CheckboxOverviewExample() {
    }
    return CheckboxOverviewExample;
}());
CheckboxOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'checkbox-overview-example',
                template: "<md-checkbox>Check me!</md-checkbox>",
            },] },
];
/**
 * @nocollapse
 */
CheckboxOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Basic chips
 */
var ChipsOverviewExample = (function () {
    function ChipsOverviewExample() {
    }
    return ChipsOverviewExample;
}());
ChipsOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'chips-overview-example',
                template: "<md-chip-list><md-chip>One fish</md-chip><md-chip>Two fish</md-chip><md-chip color=\"primary\" selected=\"true\">Primary fish</md-chip><md-chip color=\"accent\" selected=\"true\">Accent fish</md-chip></md-chip-list>",
            },] },
];
/**
 * @nocollapse
 */
ChipsOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Stacked chips
 */
var ChipsStackedExample = (function () {
    function ChipsStackedExample() {
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    return ChipsStackedExample;
}());
ChipsStackedExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'chips-stacked-example',
                template: "<md-chip-list class=\"mat-chip-list-stacked\"><md-chip *ngFor=\"let chipColor of availableColors\" selected=\"true\" color=\"{{chipColor.color}}\">{{chipColor.name}}</md-chip></md-chip-list>",
                styles: ["md-chip { max-width: 200px; } "],
            },] },
];
/**
 * @nocollapse
 */
ChipsStackedExample.ctorParameters = function () { return []; };
/**
 * \@title Datepicker API
 */
var DatepickerApiExample = (function () {
    function DatepickerApiExample() {
    }
    return DatepickerApiExample;
}());
DatepickerApiExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'datepicker-api-example',
                template: "<md-input-container class=\"example-full-width\"><input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"></md-input-container><md-datepicker #picker></md-datepicker><button md-raised-button (click)=\"picker.open()\">Open</button>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerApiExample.ctorParameters = function () { return []; };
/**
 * \@title Datepicker Filter
 */
var DatepickerFilterExample = (function () {
    function DatepickerFilterExample() {
        this.myFilter = function (d) {
            var /** @type {?} */ day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    return DatepickerFilterExample;
}());
DatepickerFilterExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'datepicker-filter-example',
                template: "<md-input-container class=\"example-full-width\"><input mdInput [mdDatepickerFilter]=\"myFilter\" [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"> <button mdSuffix [mdDatepickerToggle]=\"picker\"></button></md-input-container><md-datepicker #picker></md-datepicker>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerFilterExample.ctorParameters = function () { return []; };
/**
 * \@title Datepicker Min Max
 */
var DatepickerMinMaxExample = (function () {
    function DatepickerMinMaxExample() {
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
    }
    return DatepickerMinMaxExample;
}());
DatepickerMinMaxExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'datepicker-min-max-example',
                template: "<md-input-container class=\"example-full-width\"><input mdInput [min]=\"minDate\" [max]=\"maxDate\" [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"> <button mdSuffix [mdDatepickerToggle]=\"picker\"></button></md-input-container><md-datepicker #picker></md-datepicker>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerMinMaxExample.ctorParameters = function () { return []; };
/**
 * \@title Basic datepicker
 */
var DatepickerOverviewExample = (function () {
    function DatepickerOverviewExample() {
    }
    return DatepickerOverviewExample;
}());
DatepickerOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'datepicker-overview-example',
                template: "<md-input-container><input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"> <button mdSuffix [mdDatepickerToggle]=\"picker\"></button></md-input-container><md-datepicker #picker></md-datepicker>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Datepicker start date
 */
var DatepickerStartViewExample = (function () {
    function DatepickerStartViewExample() {
        this.startDate = new Date(1990, 0, 1);
    }
    return DatepickerStartViewExample;
}());
DatepickerStartViewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'datepicker-start-view-example',
                template: "<md-input-container><input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"> <button mdSuffix [mdDatepickerToggle]=\"picker\"></button></md-input-container><md-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></md-datepicker>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerStartViewExample.ctorParameters = function () { return []; };
/**
 * \@title Datepicker Touch
 */
var DatepickerTouchExample = (function () {
    function DatepickerTouchExample() {
    }
    return DatepickerTouchExample;
}());
DatepickerTouchExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'datepicker-touch-example',
                template: "<md-input-container class=\"example-full-width\"><input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"> <button mdSuffix [mdDatepickerToggle]=\"picker\"></button></md-input-container><md-datepicker touchUi=\"true\" #picker></md-datepicker>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerTouchExample.ctorParameters = function () { return []; };
/**
 * \@title Dialog with header, scrollable content and actions
 */
var DialogContentExample = (function () {
    /**
     * @param {?} dialog
     */
    function DialogContentExample(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    DialogContentExample.prototype.openDialog = function () {
        var /** @type {?} */ dialogRef = this.dialog.open(DialogContentExampleDialog, {
            height: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    return DialogContentExample;
}());
DialogContentExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'dialog-content-example',
                template: "<button md-button (click)=\"openDialog()\">Open dialog</button>",
            },] },
];
/**
 * @nocollapse
 */
DialogContentExample.ctorParameters = function () { return [
    { type: _angular_material.MdDialog, },
]; };
var DialogContentExampleDialog = (function () {
    function DialogContentExampleDialog() {
    }
    return DialogContentExampleDialog;
}());
DialogContentExampleDialog.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'dialog-content-example-dialog',
                template: "<h2 md-dialog-title>Install Angular</h2><md-dialog-content><h3>DEVELOP ACROSS ALL PLATFORMS</h3><p>Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.</p><h3>SPEED & PERFORMANCE</h3><p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.</p><h3>INCREDIBLE TOOLING</h3><p>Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.</p><h3>LOVED BY MILLIONS</h3><p>From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.</p></md-dialog-content><md-dialog-actions><button md-button [md-dialog-close]=\"true\" tabindex=\"1\">Install</button> <button md-button md-dialog-close tabindex=\"-1\">Cancel</button></md-dialog-actions>",
            },] },
];
/**
 * @nocollapse
 */
DialogContentExampleDialog.ctorParameters = function () { return []; };
/**
 * \@title Injecting data when opening a dialog
 */
var DialogDataExample = (function () {
    /**
     * @param {?} dialog
     */
    function DialogDataExample(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    DialogDataExample.prototype.openDialog = function () {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: 'panda'
            }
        });
    };
    return DialogDataExample;
}());
DialogDataExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'dialog-data-example',
                template: "<button md-button (click)=\"openDialog()\">Open dialog</button>",
            },] },
];
/**
 * @nocollapse
 */
DialogDataExample.ctorParameters = function () { return [
    { type: _angular_material.MdDialog, },
]; };
var DialogDataExampleDialog = (function () {
    /**
     * @param {?} data
     */
    function DialogDataExampleDialog(data) {
        this.data = data;
    }
    return DialogDataExampleDialog;
}());
DialogDataExampleDialog.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'dialog-data-example-dialog',
                template: "<h1 md-dialog-title>Favorite Animal</h1><div md-dialog-content>My favorite animal is:<ul><li><span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda</li><li><span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn</li><li><span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion</li></ul></div>",
            },] },
];
/**
 * @nocollapse
 */
DialogDataExampleDialog.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_material.MD_DIALOG_DATA,] },] },
]; };
/**
 * \@title Dialog elements
 */
var DialogElementsExample = (function () {
    /**
     * @param {?} dialog
     */
    function DialogElementsExample(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    DialogElementsExample.prototype.openDialog = function () {
        this.dialog.open(DialogElementsExampleDialog);
    };
    return DialogElementsExample;
}());
DialogElementsExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'dialog-elements-example',
                template: "<button md-button (click)=\"openDialog()\">Launch dialog</button>",
            },] },
];
/**
 * @nocollapse
 */
DialogElementsExample.ctorParameters = function () { return [
    { type: _angular_material.MdDialog, },
]; };
var DialogElementsExampleDialog = (function () {
    function DialogElementsExampleDialog() {
    }
    return DialogElementsExampleDialog;
}());
DialogElementsExampleDialog.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'dialog-elements-example-dialog',
                template: "<h1 md-dialog-title>Dialog with elements</h1><div md-dialog-content>This dialog showcases the title, close, content and actions elements.</div><div md-dialog-actions><button md-button md-dialog-close>Close</button></div>",
            },] },
];
/**
 * @nocollapse
 */
DialogElementsExampleDialog.ctorParameters = function () { return []; };
/**
 * \@title Dialog Overview
 */
var DialogOverviewExample = (function () {
    /**
     * @param {?} dialog
     */
    function DialogOverviewExample(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    DialogOverviewExample.prototype.openDialog = function () {
        var _this = this;
        var /** @type {?} */ dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    return DialogOverviewExample;
}());
DialogOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'dialog-overview-example',
                template: "<ol><li><md-input-container><input mdInput [(ngModel)]=\"name\" placeholder=\"What's your name?\"></md-input-container></li><li><button md-raised-button (click)=\"openDialog()\">Pick one</button></li><li *ngIf=\"animal\">You chose: <i>{{animal}}</i></li></ol>"
            },] },
];
/**
 * @nocollapse
 */
DialogOverviewExample.ctorParameters = function () { return [
    { type: _angular_material.MdDialog, },
]; };
var DialogOverviewExampleDialog = (function () {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return DialogOverviewExampleDialog;
}());
DialogOverviewExampleDialog.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'dialog-overview-example-dialog',
                template: "<h1 md-dialog-title>Hi {{data.name}}</h1><div md-dialog-content><p>What's your favorite animal?</p><md-input-container><input mdInput tabindex=\"1\" [(ngModel)]=\"data.animal\"></md-input-container></div><div md-dialog-actions><button md-button [md-dialog-close]=\"data.animal\" tabindex=\"2\">Ok</button> <button md-button (click)=\"onNoClick()\" tabindex=\"-1\">No Thanks</button></div>",
            },] },
];
/**
 * @nocollapse
 */
DialogOverviewExampleDialog.ctorParameters = function () { return [
    { type: _angular_material.MdDialogRef, },
    { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_material.MD_DIALOG_DATA,] },] },
]; };
/**
 * \@title Dynamic grid-list
 */
var GridListDynamicExample = (function () {
    function GridListDynamicExample() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    return GridListDynamicExample;
}());
GridListDynamicExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'grid-list-dynamic-example',
                template: "<md-grid-list cols=\"4\" rowHeight=\"100px\"><md-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">{{tile.text}}</md-grid-tile></md-grid-list>",
            },] },
];
/**
 * @nocollapse
 */
GridListDynamicExample.ctorParameters = function () { return []; };
/**
 * \@title Basic grid-list
 */
var GridListOverviewExample = (function () {
    function GridListOverviewExample() {
    }
    return GridListOverviewExample;
}());
GridListOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'grid-list-overview-example',
                styles: ["md-grid-tile { background: lightblue; } "],
                template: "<md-grid-list cols=\"2\" rowHeight=\"2:1\"><md-grid-tile>1</md-grid-tile><md-grid-tile>2</md-grid-tile><md-grid-tile>3</md-grid-tile><md-grid-tile>4</md-grid-tile></md-grid-list>",
            },] },
];
/**
 * @nocollapse
 */
GridListOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Basic icons
 */
var IconOverviewExample = (function () {
    function IconOverviewExample() {
    }
    return IconOverviewExample;
}());
IconOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'icon-overview-example',
                template: "<md-icon>home</md-icon>",
            },] },
];
/**
 * @nocollapse
 */
IconOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title SVG icons
 */
var IconSvgExample = (function () {
    /**
     * @param {?} iconRegistry
     * @param {?} sanitizer
     */
    function IconSvgExample(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
    return IconSvgExample;
}());
IconSvgExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'icon-svg-example',
                template: "<md-icon svgIcon=\"thumbs-up\"></md-icon>",
            },] },
];
/**
 * @nocollapse
 */
IconSvgExample.ctorParameters = function () { return [
    { type: _angular_material.MdIconRegistry, },
    { type: _angular_platformBrowser.DomSanitizer, },
]; };
/**
 * \@title Input Clearable
 */
var InputClearableExample = (function () {
    function InputClearableExample() {
        this.value = 'Clear me';
    }
    return InputClearableExample;
}());
InputClearableExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'input-clearable-example',
                template: "<md-input-container class=\"example-input-container\"><input mdInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\"> <button md-button *ngIf=\"value\" mdSuffix md-icon-button aria-label=\"Clear\" (click)=\"value=''\"><md-icon>close</md-icon></button></md-input-container>",
                styles: [".example-input-container { width: 200px; } "],
            },] },
];
/**
 * @nocollapse
 */
InputClearableExample.ctorParameters = function () { return []; };
var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
/**
 * \@title Input Errors
 */
var InputErrorsExample = (function () {
    function InputErrorsExample() {
        this.emailFormControl = new _angular_forms.FormControl('', [
            _angular_forms.Validators.required,
            _angular_forms.Validators.pattern(EMAIL_REGEX)
        ]);
    }
    return InputErrorsExample;
}());
InputErrorsExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'input-errors-example',
                template: "<form class=\"example-form\"><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"Email\" [formControl]=\"emailFormControl\"><md-error *ngIf=\"emailFormControl.hasError('pattern')\">Please enter a valid email address</md-error><md-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></md-error></md-input-container></form>",
                styles: [".example-form { width: 500px; max-width: 100%; } .example-full-width { width: 100%; } "],
            },] },
];
/**
 * @nocollapse
 */
InputErrorsExample.ctorParameters = function () { return []; };
/**
 * \@title Inputs in a form
 */
var InputFormExample = (function () {
    function InputFormExample() {
    }
    return InputFormExample;
}());
InputFormExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'input-form-example',
                template: "<form class=\"example-form\"><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"Company (disabled)\" disabled=\"disabled\" value=\"Google\"></md-input-container><table class=\"example-full-width\" cellspacing=\"0\"><tr><td><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"First name\"></md-input-container></td><td><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"Long Last Name That Will Be Truncated\"></md-input-container></td></tr></table><p><md-input-container class=\"example-full-width\"><textarea mdInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea></md-input-container><md-input-container class=\"example-full-width\"><textarea mdInput placeholder=\"Address 2\"></textarea></md-input-container></p><table class=\"example-full-width\" cellspacing=\"0\"><tr><td><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"City\"></md-input-container></td><td><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"State\"></md-input-container></td><td><md-input-container class=\"example-full-width\"><input mdInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\"><md-hint align=\"end\">{{postalCode.value.length}} / 5</md-hint></md-input-container></td></tr></table></form>",
                styles: [".example-form { width: 500px; max-width: 100%; } .example-full-width { width: 100%; } "],
            },] },
];
/**
 * @nocollapse
 */
InputFormExample.ctorParameters = function () { return []; };
/**
 * \@title Input hints
 */
var InputHintExample = (function () {
    function InputHintExample() {
    }
    return InputHintExample;
}());
InputHintExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'input-hint-example',
                template: "<form class=\"example-form\"><md-input-container class=\"example-full-width\"><input mdInput #message maxlength=\"256\" placeholder=\"Message\"><md-hint align=\"start\"><strong>Don't disclose personal info</strong></md-hint><md-hint align=\"end\">{{message.value.length}} / 256</md-hint></md-input-container></form>",
                styles: [".example-form { width: 500px; max-width: 100%; } .example-full-width { width: 100%; } "],
            },] },
];
/**
 * @nocollapse
 */
InputHintExample.ctorParameters = function () { return []; };
/**
 * \@title Basic Inputs
 */
var InputOverviewExample = (function () {
    function InputOverviewExample() {
    }
    return InputOverviewExample;
}());
InputOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'input-overview-example',
                template: "<md-input-container><input mdInput placeholder=\"Favorite food\" value=\"Sushi\"></md-input-container>",
            },] },
];
/**
 * @nocollapse
 */
InputOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Input Prefixes and Suffixes
 */
var InputPrefixSuffixExample = (function () {
    function InputPrefixSuffixExample() {
    }
    return InputPrefixSuffixExample;
}());
InputPrefixSuffixExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'input-prefix-suffix-example',
                template: "<form class=\"example-form\"><md-input-container class=\"example-full-width\"><span mdPrefix>+1 &nbsp;</span> <input type=\"tel\" mdInput placeholder=\"Telephone\"><md-icon mdSuffix>mode_edit</md-icon></md-input-container></form>",
                styles: [".example-form { width: 500px; max-width: 100%; } .example-full-width { width: 100%; } "],
            },] },
];
/**
 * @nocollapse
 */
InputPrefixSuffixExample.ctorParameters = function () { return []; };
/**
 * \@title Basic list
 */
var ListOverviewExample = (function () {
    function ListOverviewExample() {
    }
    return ListOverviewExample;
}());
ListOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'list-overview-example',
                template: "<md-list><md-list-item>Item 1</md-list-item><md-list-item>Item 2</md-list-item><md-list-item>Item 3</md-list-item></md-list>",
            },] },
];
/**
 * @nocollapse
 */
ListOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title List with sections
 */
var ListSectionsExample = (function () {
    function ListSectionsExample() {
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
    }
    return ListSectionsExample;
}());
ListSectionsExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'list-sections-example',
                styles: [".mat-list-icon { color: rgba(0, 0, 0, 0.54); } "],
                template: "<md-list><h3 md-subheader>Folders</h3><md-list-item *ngFor=\"let folder of folders\"><md-icon md-list-icon>folder</md-icon><h4 md-line>{{folder.name}}</h4><p md-line>{{folder.updated | date}}</p></md-list-item><md-divider></md-divider><h3 md-subheader>Notes</h3><md-list-item *ngFor=\"let note of notes\"><md-icon md-list-icon>note</md-icon><h4 md-line>{{note.name}}</h4><p md-line>{{note.updated | date}}</p></md-list-item></md-list>",
            },] },
];
/**
 * @nocollapse
 */
ListSectionsExample.ctorParameters = function () { return []; };
/**
 * \@title Menu with icons
 */
var MenuIconsExample = (function () {
    function MenuIconsExample() {
    }
    return MenuIconsExample;
}());
MenuIconsExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'menu-icons-example',
                template: "<button md-icon-button [mdMenuTriggerFor]=\"menu\"><md-icon>more_vert</md-icon></button><md-menu #menu=\"mdMenu\"><button md-menu-item><md-icon>dialpad</md-icon><span>Redial</span></button> <button md-menu-item disabled=\"disabled\"><md-icon>voicemail</md-icon><span>Check voicemail</span></button> <button md-menu-item><md-icon>notifications_off</md-icon><span>Disable alerts</span></button></md-menu>",
            },] },
];
/**
 * @nocollapse
 */
MenuIconsExample.ctorParameters = function () { return []; };
/**
 * \@title Basic menu
 */
var MenuOverviewExample = (function () {
    function MenuOverviewExample() {
    }
    return MenuOverviewExample;
}());
MenuOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'menu-overview-example',
                template: "<button md-button [mdMenuTriggerFor]=\"menu\">Menu</button><md-menu #menu=\"mdMenu\"><button md-menu-item>Item 1</button> <button md-menu-item>Item 2</button></md-menu>",
            },] },
];
/**
 * @nocollapse
 */
MenuOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Configurable paginator
 */
var PaginatorConfigurableExample = (function () {
    function PaginatorConfigurableExample() {
        // MdPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    /**
     * @param {?} setPageSizeOptionsInput
     * @return {?}
     */
    PaginatorConfigurableExample.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    return PaginatorConfigurableExample;
}());
PaginatorConfigurableExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'paginator-configurable-example',
                template: "<md-input-container>List length: <input mdInput [(ngModel)]=\"length\"></md-input-container><md-input-container>Page size: <input mdInput [(ngModel)]=\"pageSize\"></md-input-container><md-input-container>Page size options: <input mdInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"></md-input-container><md-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvent = $event\"></md-paginator><div *ngIf=\"pageEvent\"><h5>Page Change Event Properties</h5><div>List length: {{pageEvent.length}}</div><div>Page size: {{pageEvent.pageSize}}</div><div>Page index: {{pageEvent.pageIndex}}</div></div>",
            },] },
];
/**
 * @nocollapse
 */
PaginatorConfigurableExample.ctorParameters = function () { return []; };
/**
 * \@title Paginator
 */
var PaginatorOverviewExample = (function () {
    function PaginatorOverviewExample() {
    }
    return PaginatorOverviewExample;
}());
PaginatorOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'paginator-overview-example',
                template: "<md-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></md-paginator>",
            },] },
];
/**
 * @nocollapse
 */
PaginatorOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Configurable progress-bar
 */
var ProgressBarConfigurableExample = (function () {
    function ProgressBarConfigurableExample() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
    return ProgressBarConfigurableExample;
}());
ProgressBarConfigurableExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'progress-bar-configurable-example',
                template: "<md-card><md-card-content><h2 class=\"example-h2\">Progress bar configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><md-radio-group [(ngModel)]=\"color\"><md-radio-button class=\"example-margin\" value=\"primary\">Primary</md-radio-button><md-radio-button class=\"example-margin\" value=\"accent\">Accent</md-radio-button><md-radio-button class=\"example-margin\" value=\"warn\">Warn</md-radio-button></md-radio-group></section><section class=\"example-section\"><label class=\"example-margin\">Mode:</label><md-radio-group [(ngModel)]=\"mode\"><md-radio-button class=\"example-margin\" value=\"determinate\">Determinate</md-radio-button><md-radio-button class=\"example-margin\" value=\"indeterminate\">Indeterminate</md-radio-button><md-radio-button class=\"example-margin\" value=\"buffer\">Buffer</md-radio-button><md-radio-button class=\"example-margin\" value=\"query\">Query</md-radio-button></md-radio-group></section><section class=\"example-section\" *ngIf=\"mode == 'determinate' || mode == 'buffer'\"><label class=\"example-margin\">Progress:</label><md-slider class=\"example-margin\" [(ngModel)]=\"value\"></md-slider></section><section class=\"example-section\" *ngIf=\"mode == 'buffer'\"><label class=\"example-margin\">Buffer:</label><md-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></md-slider></section></md-card-content></md-card><md-card><md-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><md-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\"></md-progress-bar></section></md-card-content></md-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
ProgressBarConfigurableExample.ctorParameters = function () { return []; };
/**
 * \@title Basic progress-bar
 */
var ProgressBarOverviewExample = (function () {
    function ProgressBarOverviewExample() {
    }
    return ProgressBarOverviewExample;
}());
ProgressBarOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'progress-bar-overview-example',
                template: "<md-progress-bar mode=\"indeterminate\"></md-progress-bar>",
            },] },
];
/**
 * @nocollapse
 */
ProgressBarOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Configurable progress spinner
 */
var ProgressSpinnerConfigurableExample = (function () {
    function ProgressSpinnerConfigurableExample() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
    return ProgressSpinnerConfigurableExample;
}());
ProgressSpinnerConfigurableExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'progress-spinner-configurable-example',
                template: "<md-card><md-card-content><h2 class=\"example-h2\">Progress spinner configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><md-radio-group [(ngModel)]=\"color\"><md-radio-button class=\"example-margin\" value=\"primary\">Primary</md-radio-button><md-radio-button class=\"example-margin\" value=\"accent\">Accent</md-radio-button><md-radio-button class=\"example-margin\" value=\"warn\">Warn</md-radio-button></md-radio-group></section><section class=\"example-section\"><label class=\"example-margin\">Mode:</label><md-radio-group [(ngModel)]=\"mode\"><md-radio-button class=\"example-margin\" value=\"determinate\">Determinate</md-radio-button><md-radio-button class=\"example-margin\" value=\"indeterminate\">Indeterminate</md-radio-button></md-radio-group></section><section class=\"example-section\" *ngIf=\"mode == 'determinate'\"><label class=\"example-margin\">Progress:</label><md-slider class=\"example-margin\" [(ngModel)]=\"value\"></md-slider></section></md-card-content></md-card><md-card><md-card-content><h2 class=\"example-h2\">Result</h2><md-progress-spinner class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"></md-progress-spinner></md-card-content></md-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
ProgressSpinnerConfigurableExample.ctorParameters = function () { return []; };
/**
 * \@title Basic progress-spinner
 */
var ProgressSpinnerOverviewExample = (function () {
    function ProgressSpinnerOverviewExample() {
    }
    return ProgressSpinnerOverviewExample;
}());
ProgressSpinnerOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'progress-spinner-overview-example',
                template: "<md-spinner></md-spinner>",
            },] },
];
/**
 * @nocollapse
 */
ProgressSpinnerOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Radios with ngModel
 */
var RadioNgModelExample = (function () {
    function RadioNgModelExample() {
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
    return RadioNgModelExample;
}());
RadioNgModelExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'radio-ng-model-example',
                template: "<md-radio-group class=\"example-radio-group\" [(ngModel)]=\"favoriteSeason\"><md-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">{{season}}</md-radio-button></md-radio-group><div class=\"example-selected-value\">Your favorite season is: {{favoriteSeason}}</div>",
                styles: [".example-radio-group { display: inline-flex; flex-direction: column; } .example-radio-button { margin: 5px; } .example-selected-value { margin: 15px 0; } "],
            },] },
];
/**
 * @nocollapse
 */
RadioNgModelExample.ctorParameters = function () { return []; };
/**
 * \@title Basic radios
 */
var RadioOverviewExample = (function () {
    function RadioOverviewExample() {
    }
    return RadioOverviewExample;
}());
RadioOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'radio-overview-example',
                template: "<md-radio-group><md-radio-button value=\"1\">Option 1</md-radio-button><md-radio-button value=\"2\">Option 2</md-radio-button></md-radio-group>",
            },] },
];
/**
 * @nocollapse
 */
RadioOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Select in a form
 */
var SelectFormExample = (function () {
    function SelectFormExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    return SelectFormExample;
}());
SelectFormExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'select-form-example',
                template: "<form><md-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\"><md-option *ngFor=\"let food of foods\" [value]=\"food.value\">{{food.viewValue}}</md-option></md-select><p>Selected value: {{selectedValue}}</p></form>",
            },] },
];
/**
 * @nocollapse
 */
SelectFormExample.ctorParameters = function () { return []; };
/**
 * \@title Basic select
 */
var SelectOverviewExample = (function () {
    function SelectOverviewExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    return SelectOverviewExample;
}());
SelectOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'select-overview-example',
                template: "<md-select placeholder=\"Favorite food\"><md-option *ngFor=\"let food of foods\" [value]=\"food.value\">{{ food.viewValue }}</md-option></md-select>",
            },] },
];
/**
 * @nocollapse
 */
SelectOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Sidenav with a FAB
 */
var SidenavFabExample = (function () {
    function SidenavFabExample() {
    }
    return SidenavFabExample;
}());
SidenavFabExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'sidenav-fab-example',
                template: "<md-sidenav-container class=\"example-sidenav-fab-container\"><md-sidenav #sidenav mode=\"side\" opened=\"true\"><button md-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\"><md-icon>add</md-icon></button><div class=\"example-scrolling-content\">Lorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus, fusce vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam nunc id, neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna aliquam magna. Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor vel urna occaecat cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at, ligula ipsum dui sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu enim fringilla. Arcu erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis, tristique vehicula nibh ipsum vivamus, proin proin. Porta commodo nibh quis libero amet. Taciti dui, sapien consectetuer.</div></md-sidenav><button md-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\"><md-icon>add</md-icon></button><div class=\"example-scrolling-content\">Lorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus, fusce vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam nunc id, neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna aliquam magna. Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor vel urna occaecat cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at, ligula ipsum dui sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu enim fringilla. Arcu erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis, tristique vehicula nibh ipsum vivamus, proin proin. Porta commodo nibh quis libero amet. Taciti dui, sapien consectetuer.</div></md-sidenav-container>",
                styles: [".example-sidenav-fab-container { width: 500px; height: 300px; border: 1px solid rgba(0, 0, 0, 0.5); } .example-sidenav-fab-container md-sidenav { max-width: 200px; } .example-sidenav-fab-container .mat-sidenav-content, .example-sidenav-fab-container md-sidenav { display: flex; overflow: visible; } .example-scrolling-content { overflow: auto; } .example-fab { position: absolute; right: 20px; bottom: 10px; } "],
                encapsulation: _angular_core.ViewEncapsulation.None,
            },] },
];
/**
 * @nocollapse
 */
SidenavFabExample.ctorParameters = function () { return []; };
/**
 * \@title Basic sidenav
 */
var SidenavOverviewExample = (function () {
    function SidenavOverviewExample() {
    }
    return SidenavOverviewExample;
}());
SidenavOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'sidenav-overview-example',
                template: "<md-sidenav-container class=\"example-container\"><md-sidenav #sidenav class=\"example-sidenav\">Jolly good!</md-sidenav><div class=\"example-sidenav-content\"><button type=\"button\" md-button (click)=\"sidenav.open()\">Open sidenav</button></div></md-sidenav-container>",
                styles: [".example-container { width: 500px; height: 300px; border: 1px solid rgba(0, 0, 0, 0.5); } .example-sidenav-content { display: flex; height: 100%; align-items: center; justify-content: center; } .example-sidenav { padding: 20px; } "],
            },] },
];
/**
 * @nocollapse
 */
SidenavOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Configurable slide-toggle
 */
var SlideToggleConfigurableExample = (function () {
    function SlideToggleConfigurableExample() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
    return SlideToggleConfigurableExample;
}());
SlideToggleConfigurableExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'slide-toggle-configurable-example',
                template: "<md-card><md-card-content><h2 class=\"example-h2\">Slider configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><md-radio-group [(ngModel)]=\"color\"><md-radio-button class=\"example-margin\" value=\"primary\">Primary</md-radio-button><md-radio-button class=\"example-margin\" value=\"accent\">Accent</md-radio-button><md-radio-button class=\"example-margin\" value=\"warn\">Warn</md-radio-button></md-radio-group></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</md-checkbox></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</md-checkbox></section></md-card-content></md-card><md-card class=\"result\"><md-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><md-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"checked\" [disabled]=\"disabled\">Slide me!</md-slide-toggle></section></md-card-content></md-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
SlideToggleConfigurableExample.ctorParameters = function () { return []; };
/**
 * \@title Slide-toggle with forms
 */
var SlideToggleFormsExample = (function () {
    /**
     * @param {?} formBuilder
     */
    function SlideToggleFormsExample(formBuilder) {
        this.isChecked = true;
        this.formGroup = formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', _angular_forms.Validators.requiredTrue]
        });
    }
    /**
     * @param {?} formValue
     * @return {?}
     */
    SlideToggleFormsExample.prototype.onFormSubmit = function (formValue) {
        alert(JSON.stringify(formValue, null, 2));
    };
    return SlideToggleFormsExample;
}());
SlideToggleFormsExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'slide-toggle-forms-example',
                template: "<p>Slide Toggle using a simple NgModel.</p><md-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{ isChecked }}</md-slide-toggle><p>Slide Toggle inside of a Template-driven form</p><form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"onFormSubmit(form.value)\" ngNativeValidate><md-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</md-slide-toggle><md-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</md-slide-toggle><button md-raised-button type=\"submit\">Save Settings</button></form><p>Slide Toggle inside of a Reactive form</p><form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"onFormSubmit(formGroup.value)\" ngNativeValidate><md-slide-toggle formControlName=\"enableWifi\">Enable Wifi</md-slide-toggle><md-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</md-slide-toggle><p>Form Group Status: {{ formGroup.status}}</p><button md-rasied-button type=\"submit\">Save Settings</button></form>",
                styles: [".example-form md-slide-toggle { margin: 8px 0; display: block; } "],
            },] },
];
/**
 * @nocollapse
 */
SlideToggleFormsExample.ctorParameters = function () { return [
    { type: _angular_forms.FormBuilder, },
]; };
/**
 * \@title Basic slide-toggles
 */
var SlideToggleOverviewExample = (function () {
    function SlideToggleOverviewExample() {
    }
    return SlideToggleOverviewExample;
}());
SlideToggleOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'slide-toggle-overview-example',
                template: "<md-slide-toggle>Slide me!</md-slide-toggle>",
            },] },
];
/**
 * @nocollapse
 */
SlideToggleOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Configurable slider
 */
var SliderConfigurableExample = (function () {
    function SliderConfigurableExample() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
    }
    Object.defineProperty(SliderConfigurableExample.prototype, "tickInterval", {
        /**
         * @return {?}
         */
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            this._tickInterval = Number(v);
        },
        enumerable: true,
        configurable: true
    });
    return SliderConfigurableExample;
}());
SliderConfigurableExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'slider-configurable-example',
                template: "<md-card><md-card-content><h2 class=\"example-h2\">Slider configuration</h2><section class=\"example-section\"><md-input-container class=\"example-margin\"><input mdInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\"></md-input-container><md-input-container class=\"example-margin\"><input mdInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\"></md-input-container><md-input-container class=\"example-margin\"><input mdInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\"></md-input-container><md-input-container class=\"example-margin\"><input mdInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\"></md-input-container></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</md-checkbox><md-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">Auto ticks</md-checkbox><md-input-container class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\"><input mdInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\"></md-input-container></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</md-checkbox></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</md-checkbox><md-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</md-checkbox></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</md-checkbox></section></md-card-content></md-card><md-card class=\"result\"><md-card-content><h2 class=\"example-h2\">Result</h2><md-slider class=\"example-margin\" [disabled]=\"disabled\" [invert]=\"invert\" [max]=\"max\" [min]=\"min\" [step]=\"step\" [thumb-label]=\"thumbLabel\" [tick-interval]=\"tickInterval\" [value]=\"value\" [vertical]=\"vertical\"></md-slider></md-card-content></md-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } .mat-slider-horizontal { width: 300px; } .mat-slider-vertical { height: 300px; } "],
                encapsulation: _angular_core.ViewEncapsulation.None,
            },] },
];
/**
 * @nocollapse
 */
SliderConfigurableExample.ctorParameters = function () { return []; };
/**
 * \@title Basic slider
 */
var SliderOverviewExample = (function () {
    function SliderOverviewExample() {
    }
    return SliderOverviewExample;
}());
SliderOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'slider-overview-example',
                template: "<md-slider></md-slider>",
                styles: ["/** No CSS for this example */ md-slider { width: 300px; } "],
            },] },
];
/**
 * @nocollapse
 */
SliderOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Snack-bar with a custom component
 */
var SnackBarComponentExample = (function () {
    /**
     * @param {?} snackBar
     */
    function SnackBarComponentExample(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * @return {?}
     */
    SnackBarComponentExample.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 500,
        });
    };
    return SnackBarComponentExample;
}());
SnackBarComponentExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'snack-bar-component-example',
                template: "<button md-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">Pizza party</button>",
            },] },
];
/**
 * @nocollapse
 */
SnackBarComponentExample.ctorParameters = function () { return [
    { type: _angular_material.MdSnackBar, },
]; };
var PizzaPartyComponent = (function () {
    function PizzaPartyComponent() {
    }
    return PizzaPartyComponent;
}());
PizzaPartyComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'snack-bar-component-example-snack',
                template: "<span class=\"example-pizza-party\">🍕🍕🍕🍕🍕 Pizza party!!! 🍕🍕🍕🍕🍕</span>",
                styles: [".example-pizza-party { color: hotpink; } "],
            },] },
];
/**
 * @nocollapse
 */
PizzaPartyComponent.ctorParameters = function () { return []; };
/**
 * \@title Basic snack-bar
 */
var SnackBarOverviewExample = (function () {
    /**
     * @param {?} snackBar
     */
    function SnackBarOverviewExample(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    SnackBarOverviewExample.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    return SnackBarOverviewExample;
}());
SnackBarOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'snack-bar-overview-example',
                template: "<md-input-container><input mdInput value=\"Disco party!\" placeholder=\"Message\" #message></md-input-container><md-input-container><input mdInput value=\"Dance\" placeholder=\"Action\" #action></md-input-container><button md-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>",
            },] },
];
/**
 * @nocollapse
 */
SnackBarOverviewExample.ctorParameters = function () { return [
    { type: _angular_material.MdSnackBar, },
]; };
/**
 * \@title Sorting overview
 */
var SortOverviewExample = (function () {
    function SortOverviewExample() {
        this.desserts = [
            { name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4' },
            { name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4' },
            { name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6' },
            { name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4' },
            { name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4' },
        ];
        this.sortedData = this.desserts.slice();
    }
    /**
     * @param {?} sort
     * @return {?}
     */
    SortOverviewExample.prototype.sortData = function (sort) {
        var /** @type {?} */ data = this.desserts.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var /** @type {?} */ isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(+a.calories, +b.calories, isAsc);
                case 'fat': return compare(+a.fat, +b.fat, isAsc);
                case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
                case 'protein': return compare(+a.protein, +b.protein, isAsc);
                default: return 0;
            }
        });
    };
    return SortOverviewExample;
}());
SortOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'sort-overview-example',
                template: "<table mdSort (mdSortChange)=\"sortData($event)\"><tr><th md-sort-header=\"name\">Dessert (100g)</th><th md-sort-header=\"calories\">Calories</th><th md-sort-header=\"fat\">Fat (g)</th><th md-sort-header=\"carbs\">Carbs (g)</th><th md-sort-header=\"protein\">Protein (g)</th></tr><tr *ngFor=\"let dessert of sortedData\"><td>{{dessert.name}}</td><td>{{dessert.calories}}</td><td>{{dessert.fat}}</td><td>{{dessert.carbs}}</td><td>{{dessert.protein}}</td></tr></table>",
                styles: [".mat-sort-header-container { align-items: center; } "],
            },] },
];
/**
 * @nocollapse
 */
SortOverviewExample.ctorParameters = function () { return []; };
/**
 * @param {?} a
 * @param {?} b
 * @param {?} isAsc
 * @return {?}
 */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
/**
 * \@title Basic table
 */
var TableBasicExample = (function () {
    function TableBasicExample() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase$1();
    }
    /**
     * @return {?}
     */
    TableBasicExample.prototype.ngOnInit = function () {
        this.dataSource = new ExampleDataSource$1(this.exampleDatabase);
    };
    return TableBasicExample;
}());
TableBasicExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'table-basic-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; min-width: 300px; } .example-header { min-height: 64px; display: flex; align-items: center; padding-left: 24px; font-size: 20px; } .mat-table { overflow: auto; max-height: 500px; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><md-table #table [dataSource]=\"dataSource\"><ng-container cdkColumnDef=\"userId\"><md-header-cell *cdkHeaderCellDef>ID</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.id}}</md-cell></ng-container><ng-container cdkColumnDef=\"progress\"><md-header-cell *cdkHeaderCellDef>Progress</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.progress}}%</md-cell></ng-container><ng-container cdkColumnDef=\"userName\"><md-header-cell *cdkHeaderCellDef>Name</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.name}}</md-cell></ng-container><ng-container cdkColumnDef=\"color\"><md-header-cell *cdkHeaderCellDef>Color</md-header-cell><md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row></md-table></div>",
            },] },
];
/**
 * @nocollapse
 */
TableBasicExample.ctorParameters = function () { return []; };
/**
 * Constants used to fill up our data base.
 */
var COLORS$1 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES$1 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
var ExampleDatabase$1 = (function () {
    function ExampleDatabase$1() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new rxjs_BehaviorSubject.BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase$1.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    ExampleDatabase$1.prototype.addUser = function () {
        var /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    ExampleDatabase$1.prototype.createNewUser = function () {
        var /** @type {?} */ name = NAMES$1[Math.round(Math.random() * (NAMES$1.length - 1))] + ' ' +
            NAMES$1[Math.round(Math.random() * (NAMES$1.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS$1[Math.round(Math.random() * (COLORS$1.length - 1))]
        };
    };
    return ExampleDatabase$1;
}());
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource$1 = (function (_super) {
    __extends(ExampleDataSource$1, _super);
    /**
     * @param {?} _exampleDatabase
     */
    function ExampleDataSource$1(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        return _this;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    ExampleDataSource$1.prototype.connect = function () {
        return this._exampleDatabase.dataChange;
    };
    /**
     * @return {?}
     */
    ExampleDataSource$1.prototype.disconnect = function () { };
    return ExampleDataSource$1;
}(_angular_cdk.DataSource));
var TableHttpExample = (function () {
    /**
     * @param {?} http
     */
    function TableHttpExample(http) {
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        this.exampleDatabase = new ExampleHttpDao(http);
    }
    /**
     * @return {?}
     */
    TableHttpExample.prototype.ngOnInit = function () {
        this.dataSource = new ExampleDataSource$2(/** @type {?} */ ((this.exampleDatabase)), this.sort, this.paginator);
    };
    return TableHttpExample;
}());
TableHttpExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'table-http-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; max-height: 500px; min-width: 300px; position: relative; } .example-header { min-height: 64px; display: flex; align-items: center; padding-left: 24px; font-size: 20px; } .example-table { overflow: auto; min-height: 300px; } .mat-column-title { text-overflow: ellipsis; white-space: nowrap; flex: 1; overflow: hidden; } /* Column Widths */ .mat-column-number, .mat-column-state { max-width: 64px; } .mat-column-created { max-width: 124px; } .example-loading-shade { position: absolute; top: 0; left: 0; bottom: 56px; right: 0; background: rgba(0, 0, 0, 0.15); z-index: 1; display: flex; align-items: center; justify-content: center; } .example-rate-limit-reached { color: #980000; max-width: 360px; text-align: center; }"],
                template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-loading-shade\" *ngIf=\"dataSource.isLoadingResults || dataSource.isRateLimitReached\"><md-spinner *ngIf=\"dataSource.isLoadingResults\"></md-spinner><div class=\"example-rate-limit-reached\" *ngIf=\"dataSource.isRateLimitReached\">GitHub's API rate limit has been reached. It will be reset in one minute.</div></div><md-table #table [dataSource]=\"dataSource\" class=\"example-table\" mdSort mdSortActive=\"created\" mdSortDisableClear mdSortDirection=\"asc\"><ng-container cdkColumnDef=\"number\"><md-header-cell *cdkHeaderCellDef>Number</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.number}}</md-cell></ng-container><ng-container cdkColumnDef=\"title\"><md-header-cell *cdkHeaderCellDef>Title</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.title}}</md-cell></ng-container><ng-container cdkColumnDef=\"state\"><md-header-cell *cdkHeaderCellDef>State</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.state}}</md-cell></ng-container><ng-container cdkColumnDef=\"created\"><md-header-cell *cdkHeaderCellDef md-sort-header disableClear=\"true\">Created</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.created.toDateString()}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row></md-table><md-paginator [length]=\"dataSource.resultsLength\" [pageSize]=\"30\"></md-paginator></div>",
            },] },
];
/**
 * @nocollapse
 */
TableHttpExample.ctorParameters = function () { return [
    { type: _angular_http.Http, },
]; };
TableHttpExample.propDecorators = {
    'paginator': [{ type: _angular_core.ViewChild, args: [_angular_material.MdPaginator,] },],
    'sort': [{ type: _angular_core.ViewChild, args: [_angular_material.MdSort,] },],
};
/**
 * An example database that the data source uses to retrieve data for the table.
 */
var ExampleHttpDao = (function () {
    /**
     * @param {?} http
     */
    function ExampleHttpDao(http) {
        this.http = http;
    }
    /**
     * @param {?} sort
     * @param {?} order
     * @param {?} page
     * @return {?}
     */
    ExampleHttpDao.prototype.getRepoIssues = function (sort, order, page) {
        var /** @type {?} */ href = 'https://api.github.com/search/issues';
        var /** @type {?} */ requestUrl = href + "?q=repo:angular/material2&sort=" + sort + "&order=" + order + "&page=" + (page + 1);
        return this.http.get(requestUrl);
    };
    return ExampleHttpDao;
}());
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleHttpDao. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource$2 = (function (_super) {
    __extends(ExampleDataSource$2, _super);
    /**
     * @param {?} _exampleDatabase
     * @param {?} _sort
     * @param {?} _paginator
     */
    function ExampleDataSource$2(_exampleDatabase, _sort, _paginator) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._sort = _sort;
        _this._paginator = _paginator;
        // The number of issues returned by github matching the query.
        _this.resultsLength = 0;
        return _this;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    ExampleDataSource$2.prototype.connect = function () {
        var _this = this;
        var /** @type {?} */ displayDataChanges = [
            this._sort.mdSortChange,
            this._paginator.page,
        ];
        // If the user changes the sort order, reset back to the first page.
        this._sort.mdSortChange.subscribe(function () {
            _this._paginator.pageIndex = 0;
        });
        return rxjs_Observable.Observable.merge.apply(rxjs_Observable.Observable, displayDataChanges).startWith(null)
            .switchMap(function () {
            _this.isLoadingResults = true;
            return _this._exampleDatabase.getRepoIssues(_this._sort.active, _this._sort.direction, _this._paginator.pageIndex);
        })
            .catch(function () {
            // Catch if the GitHub API has reached its rate limit. Return empty result.
            _this.isRateLimitReached = true;
            return rxjs_Observable.Observable.of(null);
        })
            .map(function (result) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            return result;
        })
            .map(function (result) {
            if (!result) {
                return [];
            }
            _this.isRateLimitReached = false;
            _this.resultsLength = result.json().total_count;
            return _this.readGithubResult(result);
        });
    };
    /**
     * @return {?}
     */
    ExampleDataSource$2.prototype.disconnect = function () { };
    /**
     * @param {?} result
     * @return {?}
     */
    ExampleDataSource$2.prototype.readGithubResult = function (result) {
        return result.json().items.map(function (issue) {
            return {
                number: issue.number,
                created: new Date(issue.created_at),
                state: issue.state,
                title: issue.title,
            };
        });
    };
    return ExampleDataSource$2;
}(_angular_cdk.DataSource));
/**
 * \@title Table with filtering
 */
var TableFilteringExample = (function () {
    function TableFilteringExample() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase$2();
    }
    /**
     * @return {?}
     */
    TableFilteringExample.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new ExampleDataSource$3(this.exampleDatabase);
        rxjs_Observable.Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    return TableFilteringExample;
}());
TableFilteringExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'table-filtering-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; min-width: 300px; } .example-header { min-height: 64px; display: flex; align-items: center; padding-left: 24px; font-size: 20px; } .example-header { min-height: 64px; display: flex; align-items: baseline; padding: 8px 24px 0; font-size: 20px; justify-content: space-between; } .mat-input-container { font-size: 14px; flex-grow: 1; margin-left: 32px; } .mat-table { overflow: auto; max-height: 500px; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-header\"><md-input-container floatPlaceholder=\"never\"><input mdInput #filter placeholder=\"Filter users\"></md-input-container></div><md-table #table [dataSource]=\"dataSource\"><ng-container cdkColumnDef=\"userId\"><md-header-cell *cdkHeaderCellDef>ID</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.id}}</md-cell></ng-container><ng-container cdkColumnDef=\"progress\"><md-header-cell *cdkHeaderCellDef>Progress</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.progress}}%</md-cell></ng-container><ng-container cdkColumnDef=\"userName\"><md-header-cell *cdkHeaderCellDef>Name</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.name}}</md-cell></ng-container><ng-container cdkColumnDef=\"color\"><md-header-cell *cdkHeaderCellDef>Color</md-header-cell><md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row></md-table></div>",
            },] },
];
/**
 * @nocollapse
 */
TableFilteringExample.ctorParameters = function () { return []; };
TableFilteringExample.propDecorators = {
    'filter': [{ type: _angular_core.ViewChild, args: ['filter',] },],
};
/**
 * Constants used to fill up our data base.
 */
var COLORS$2 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES$2 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
var ExampleDatabase$2 = (function () {
    function ExampleDatabase$2() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new rxjs_BehaviorSubject.BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase$2.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    ExampleDatabase$2.prototype.addUser = function () {
        var /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    ExampleDatabase$2.prototype.createNewUser = function () {
        var /** @type {?} */ name = NAMES$2[Math.round(Math.random() * (NAMES$2.length - 1))] + ' ' +
            NAMES$2[Math.round(Math.random() * (NAMES$2.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS$2[Math.round(Math.random() * (COLORS$2.length - 1))]
        };
    };
    return ExampleDatabase$2;
}());
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource$3 = (function (_super) {
    __extends(ExampleDataSource$3, _super);
    /**
     * @param {?} _exampleDatabase
     */
    function ExampleDataSource$3(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._filterChange = new rxjs_BehaviorSubject.BehaviorSubject('');
        return _this;
    }
    Object.defineProperty(ExampleDataSource$3.prototype, "filter", {
        /**
         * @return {?}
         */
        get: function () { return this._filterChange.value; },
        /**
         * @param {?} filter
         * @return {?}
         */
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    ExampleDataSource$3.prototype.connect = function () {
        var _this = this;
        var /** @type {?} */ displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._filterChange,
        ];
        return rxjs_Observable.Observable.merge.apply(rxjs_Observable.Observable, displayDataChanges).map(function () {
            return _this._exampleDatabase.data.slice().filter(function (item) {
                var /** @type {?} */ searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
        });
    };
    /**
     * @return {?}
     */
    ExampleDataSource$3.prototype.disconnect = function () { };
    return ExampleDataSource$3;
}(_angular_cdk.DataSource));
/**
 * \@title Feature-rich data table
 */
var TableOverviewExample = (function () {
    function TableOverviewExample() {
        this.displayedColumns = ['select', 'userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase$3();
        this.selection = new _angular_material.SelectionModel(true, []);
    }
    /**
     * @return {?}
     */
    TableOverviewExample.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new ExampleDataSource$4(this.exampleDatabase, this.paginator, this.sort);
        rxjs_Observable.Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    /**
     * @return {?}
     */
    TableOverviewExample.prototype.isAllSelected = function () {
        if (!this.dataSource) {
            return false;
        }
        if (this.selection.isEmpty()) {
            return false;
        }
        if (this.filter.nativeElement.value) {
            return this.selection.selected.length == this.dataSource.renderedData.length;
        }
        else {
            return this.selection.selected.length == this.exampleDatabase.data.length;
        }
    };
    /**
     * @return {?}
     */
    TableOverviewExample.prototype.masterToggle = function () {
        var _this = this;
        if (!this.dataSource) {
            return;
        }
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else if (this.filter.nativeElement.value) {
            this.dataSource.renderedData.forEach(function (data) { return _this.selection.select(data.id); });
        }
        else {
            this.exampleDatabase.data.forEach(function (data) { return _this.selection.select(data.id); });
        }
    };
    return TableOverviewExample;
}());
TableOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'table-overview-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; min-width: 300px; } .example-header { min-height: 56px; max-height: 56px; display: flex; align-items: center; padding: 8px 24px 0; font-size: 20px; justify-content: space-between; border-bottom: 1px solid transparent; } .mat-input-container { font-size: 14px; flex-grow: 1; margin-left: 32px; margin-top: 8px; } .example-no-results { display: flex; justify-content: center; padding: 24px; font-size: 12px; font-style: italic; } /** Selection styles */ .example-selection-header { font-size: 18px; background: rgba(255, 64, 129, 0.3); border-bottom: 1px solid #d696ac; } .mat-column-select { max-width: 54px; } .mat-row:hover, .example-selected-row { background: #f5f5f5; } .mat-row:active, .mat-row.example-selected-row { background: #eaeaea; } .mat-table { overflow: auto; max-height: 500px; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-header\" [style.display]=\"selection.isEmpty() ? '' : 'none'\"><md-input-container floatPlaceholder=\"never\"><input mdInput #filter placeholder=\"Filter users\"></md-input-container></div><div class=\"example-header example-selection-header\" *ngIf=\"!selection.isEmpty()\">{{selection.selected.length}} {{selection.selected.length == 1 ? 'user' : 'users'}} selected</div><md-table #table [dataSource]=\"dataSource\" mdSort><ng-container cdkColumnDef=\"select\"><md-header-cell *cdkHeaderCellDef><md-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\"></md-checkbox></md-header-cell><md-cell *cdkCellDef=\"let row\"><md-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row.id) : null\" [checked]=\"selection.isSelected(row.id)\"></md-checkbox></md-cell></ng-container><ng-container cdkColumnDef=\"userId\"><md-header-cell *cdkHeaderCellDef md-sort-header>ID</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.id}}</md-cell></ng-container><ng-container cdkColumnDef=\"progress\"><md-header-cell *cdkHeaderCellDef md-sort-header>Progress</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.progress}}%</md-cell></ng-container><ng-container cdkColumnDef=\"userName\"><md-header-cell *cdkHeaderCellDef md-sort-header>Name</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.name}}</md-cell></ng-container><ng-container cdkColumnDef=\"color\"><md-header-cell *cdkHeaderCellDef md-sort-header>Color</md-header-cell><md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\" [class.example-selected-row]=\"selection.isSelected(row.id)\" (click)=\"selection.toggle(row.id)\"></md-row></md-table><div class=\"example-no-results\" [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">No users found matching filter.</div><md-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"25\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></md-paginator></div>",
            },] },
];
/**
 * @nocollapse
 */
TableOverviewExample.ctorParameters = function () { return []; };
TableOverviewExample.propDecorators = {
    'paginator': [{ type: _angular_core.ViewChild, args: [_angular_material.MdPaginator,] },],
    'sort': [{ type: _angular_core.ViewChild, args: [_angular_material.MdSort,] },],
    'filter': [{ type: _angular_core.ViewChild, args: ['filter',] },],
};
/**
 * Constants used to fill up our data base.
 */
var COLORS$3 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES$3 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
var ExampleDatabase$3 = (function () {
    function ExampleDatabase$3() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new rxjs_BehaviorSubject.BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase$3.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    ExampleDatabase$3.prototype.addUser = function () {
        var /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    ExampleDatabase$3.prototype.createNewUser = function () {
        var /** @type {?} */ name = NAMES$3[Math.round(Math.random() * (NAMES$3.length - 1))] + ' ' +
            NAMES$3[Math.round(Math.random() * (NAMES$3.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS$3[Math.round(Math.random() * (COLORS$3.length - 1))]
        };
    };
    return ExampleDatabase$3;
}());
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource$4 = (function (_super) {
    __extends(ExampleDataSource$4, _super);
    /**
     * @param {?} _exampleDatabase
     * @param {?} _paginator
     * @param {?} _sort
     */
    function ExampleDataSource$4(_exampleDatabase, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new rxjs_BehaviorSubject.BehaviorSubject('');
        _this.filteredData = [];
        _this.renderedData = [];
        return _this;
    }
    Object.defineProperty(ExampleDataSource$4.prototype, "filter", {
        /**
         * @return {?}
         */
        get: function () { return this._filterChange.value; },
        /**
         * @param {?} filter
         * @return {?}
         */
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    ExampleDataSource$4.prototype.connect = function () {
        var _this = this;
        // Listen for any changes in the base data, sorting, filtering, or pagination
        var /** @type {?} */ displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.mdSortChange,
            this._filterChange,
            this._paginator.page,
        ];
        return rxjs_Observable.Observable.merge.apply(rxjs_Observable.Observable, displayDataChanges).map(function () {
            // Filter data
            _this.filteredData = _this._exampleDatabase.data.slice().filter(function (item) {
                var /** @type {?} */ searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
            // Sort filtered data
            var /** @type {?} */ sortedData = _this.sortData(_this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            var /** @type {?} */ startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
        });
    };
    /**
     * @return {?}
     */
    ExampleDataSource$4.prototype.disconnect = function () { };
    /**
     * Returns a sorted copy of the database data.
     * @param {?} data
     * @return {?}
     */
    ExampleDataSource$4.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction == '') {
            return data;
        }
        return data.sort(function (a, b) {
            var /** @type {?} */ propertyA = '';
            var /** @type {?} */ propertyB = '';
            switch (_this._sort.active) {
                case 'userId':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'userName':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'progress':
                    _c = [a.progress, b.progress], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'color':
                    _d = [a.color, b.color], propertyA = _d[0], propertyB = _d[1];
                    break;
            }
            var /** @type {?} */ valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var /** @type {?} */ valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
            var _a, _b, _c, _d;
        });
    };
    return ExampleDataSource$4;
}(_angular_cdk.DataSource));
/**
 * \@title Table with pagination
 */
var TablePaginationExample = (function () {
    function TablePaginationExample() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase$4();
    }
    /**
     * @return {?}
     */
    TablePaginationExample.prototype.ngOnInit = function () {
        this.dataSource = new ExampleDataSource$5(this.exampleDatabase, this.paginator);
    };
    return TablePaginationExample;
}());
TablePaginationExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'table-pagination-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; min-width: 300px; } .example-header { min-height: 64px; display: flex; align-items: center; padding-left: 24px; font-size: 20px; } .mat-table { overflow: auto; max-height: 500px; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><md-table #table [dataSource]=\"dataSource\"><ng-container cdkColumnDef=\"userId\"><md-header-cell *cdkHeaderCellDef>ID</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.id}}</md-cell></ng-container><ng-container cdkColumnDef=\"progress\"><md-header-cell *cdkHeaderCellDef>Progress</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.progress}}%</md-cell></ng-container><ng-container cdkColumnDef=\"userName\"><md-header-cell *cdkHeaderCellDef>Name</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.name}}</md-cell></ng-container><ng-container cdkColumnDef=\"color\"><md-header-cell *cdkHeaderCellDef>Color</md-header-cell><md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row></md-table><md-paginator #paginator [length]=\"exampleDatabase.data.length\" [pageIndex]=\"0\" [pageSize]=\"25\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></md-paginator></div>",
            },] },
];
/**
 * @nocollapse
 */
TablePaginationExample.ctorParameters = function () { return []; };
TablePaginationExample.propDecorators = {
    'paginator': [{ type: _angular_core.ViewChild, args: [_angular_material.MdPaginator,] },],
};
/**
 * Constants used to fill up our data base.
 */
var COLORS$4 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES$4 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
var ExampleDatabase$4 = (function () {
    function ExampleDatabase$4() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new rxjs_BehaviorSubject.BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase$4.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    ExampleDatabase$4.prototype.addUser = function () {
        var /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    ExampleDatabase$4.prototype.createNewUser = function () {
        var /** @type {?} */ name = NAMES$4[Math.round(Math.random() * (NAMES$4.length - 1))] + ' ' +
            NAMES$4[Math.round(Math.random() * (NAMES$4.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS$4[Math.round(Math.random() * (COLORS$4.length - 1))]
        };
    };
    return ExampleDatabase$4;
}());
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource$5 = (function (_super) {
    __extends(ExampleDataSource$5, _super);
    /**
     * @param {?} _exampleDatabase
     * @param {?} _paginator
     */
    function ExampleDataSource$5(_exampleDatabase, _paginator) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        return _this;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    ExampleDataSource$5.prototype.connect = function () {
        var _this = this;
        var /** @type {?} */ displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._paginator.page,
        ];
        return rxjs_Observable.Observable.merge.apply(rxjs_Observable.Observable, displayDataChanges).map(function () {
            var /** @type {?} */ data = _this._exampleDatabase.data.slice();
            // Grab the page's slice of data.
            var /** @type {?} */ startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            return data.splice(startIndex, _this._paginator.pageSize);
        });
    };
    /**
     * @return {?}
     */
    ExampleDataSource$5.prototype.disconnect = function () { };
    return ExampleDataSource$5;
}(_angular_cdk.DataSource));
/**
 * \@title Table with sorting
 */
var TableSortingExample = (function () {
    function TableSortingExample() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase$5();
    }
    /**
     * @return {?}
     */
    TableSortingExample.prototype.ngOnInit = function () {
        this.dataSource = new ExampleDataSource$6(this.exampleDatabase, this.sort);
    };
    return TableSortingExample;
}());
TableSortingExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'table-sorting-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; min-width: 300px; } .example-header { min-height: 64px; display: flex; align-items: center; padding-left: 24px; font-size: 20px; } .mat-table { overflow: auto; max-height: 500px; } .mat-header-cell .mat-sort-header-sorted { color: black; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><md-table #table [dataSource]=\"dataSource\" mdSort><ng-container cdkColumnDef=\"userId\"><md-header-cell *cdkHeaderCellDef md-sort-header>ID</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.id}}</md-cell></ng-container><ng-container cdkColumnDef=\"progress\"><md-header-cell *cdkHeaderCellDef md-sort-header>Progress</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.progress}}%</md-cell></ng-container><ng-container cdkColumnDef=\"userName\"><md-header-cell *cdkHeaderCellDef md-sort-header>Name</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.name}}</md-cell></ng-container><ng-container cdkColumnDef=\"color\"><md-header-cell *cdkHeaderCellDef md-sort-header>Color</md-header-cell><md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row></md-table></div>",
            },] },
];
/**
 * @nocollapse
 */
TableSortingExample.ctorParameters = function () { return []; };
TableSortingExample.propDecorators = {
    'sort': [{ type: _angular_core.ViewChild, args: [_angular_material.MdSort,] },],
};
/**
 * Constants used to fill up our data base.
 */
var COLORS$5 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES$5 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
var ExampleDatabase$5 = (function () {
    function ExampleDatabase$5() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new rxjs_BehaviorSubject.BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase$5.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    ExampleDatabase$5.prototype.addUser = function () {
        var /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    ExampleDatabase$5.prototype.createNewUser = function () {
        var /** @type {?} */ name = NAMES$5[Math.round(Math.random() * (NAMES$5.length - 1))] + ' ' +
            NAMES$5[Math.round(Math.random() * (NAMES$5.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS$5[Math.round(Math.random() * (COLORS$5.length - 1))]
        };
    };
    return ExampleDatabase$5;
}());
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource$6 = (function (_super) {
    __extends(ExampleDataSource$6, _super);
    /**
     * @param {?} _exampleDatabase
     * @param {?} _sort
     */
    function ExampleDataSource$6(_exampleDatabase, _sort) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._sort = _sort;
        return _this;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    ExampleDataSource$6.prototype.connect = function () {
        var _this = this;
        var /** @type {?} */ displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.mdSortChange,
        ];
        return rxjs_Observable.Observable.merge.apply(rxjs_Observable.Observable, displayDataChanges).map(function () {
            return _this.getSortedData();
        });
    };
    /**
     * @return {?}
     */
    ExampleDataSource$6.prototype.disconnect = function () { };
    /**
     * Returns a sorted copy of the database data.
     * @return {?}
     */
    ExampleDataSource$6.prototype.getSortedData = function () {
        var _this = this;
        var /** @type {?} */ data = this._exampleDatabase.data.slice();
        if (!this._sort.active || this._sort.direction == '') {
            return data;
        }
        return data.sort(function (a, b) {
            var /** @type {?} */ propertyA = '';
            var /** @type {?} */ propertyB = '';
            switch (_this._sort.active) {
                case 'userId':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'userName':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'progress':
                    _c = [a.progress, b.progress], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'color':
                    _d = [a.color, b.color], propertyA = _d[0], propertyB = _d[1];
                    break;
            }
            var /** @type {?} */ valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var /** @type {?} */ valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
            var _a, _b, _c, _d;
        });
    };
    return ExampleDataSource$6;
}(_angular_cdk.DataSource));
/**
 * \@title Basic tabs
 */
var TabsOverviewExample = (function () {
    function TabsOverviewExample() {
    }
    return TabsOverviewExample;
}());
TabsOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'tabs-overview-example',
                template: "<md-tab-group><md-tab label=\"Tab 1\">Content 1</md-tab><md-tab label=\"Tab 2\">Content 2</md-tab></md-tab-group>",
            },] },
];
/**
 * @nocollapse
 */
TabsOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Coming soon!
 */
var TabsTemplateLabelExample = (function () {
    function TabsTemplateLabelExample() {
    }
    return TabsTemplateLabelExample;
}());
TabsTemplateLabelExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'tabs-template-label-example',
                template: "More examples coming soon!",
            },] },
];
/**
 * @nocollapse
 */
TabsTemplateLabelExample.ctorParameters = function () { return []; };
/**
 * \@title Multi-row toolbar
 */
var ToolbarMultirowExample = (function () {
    function ToolbarMultirowExample() {
    }
    return ToolbarMultirowExample;
}());
ToolbarMultirowExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'toolbar-multirow-example',
                template: "<md-toolbar color=\"primary\"><span>Custom Toolbar</span><md-toolbar-row><span>Second Line</span> <span class=\"example-spacer\"></span><md-icon class=\"example-icon\">verified_user</md-icon></md-toolbar-row><md-toolbar-row><span>Third Line</span> <span class=\"example-spacer\"></span><md-icon class=\"example-icon\">favorite</md-icon><md-icon class=\"example-icon\">delete</md-icon></md-toolbar-row></md-toolbar>",
                styles: [".example-icon { padding: 0 14px; } .example-spacer { flex: 1 1 auto; } "],
            },] },
];
/**
 * @nocollapse
 */
ToolbarMultirowExample.ctorParameters = function () { return []; };
/**
 * \@title Basic toolbar
 */
var ToolbarOverviewExample = (function () {
    function ToolbarOverviewExample() {
    }
    return ToolbarOverviewExample;
}());
ToolbarOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'toolbar-overview-example',
                template: "<md-toolbar>My App</md-toolbar>",
            },] },
];
/**
 * @nocollapse
 */
ToolbarOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Basic tooltip
 */
var TooltipOverviewExample = (function () {
    function TooltipOverviewExample() {
    }
    return TooltipOverviewExample;
}());
TooltipOverviewExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'tooltip-overview-example',
                template: "<span mdTooltip=\"Tooltip!\">I have a tooltip</span>",
            },] },
];
/**
 * @nocollapse
 */
TooltipOverviewExample.ctorParameters = function () { return []; };
/**
 * \@title Tooltip with custom position
 */
var TooltipPositionExample = (function () {
    function TooltipPositionExample() {
        this.position = 'before';
    }
    return TooltipPositionExample;
}());
TooltipPositionExample.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'tooltip-position-example',
                template: "<div class=\"example-tooltip-host\" mdTooltip=\"Tooltip!\" [mdTooltipPosition]=\"position\"><span>Show tooltip</span><md-select class=\"example-select\" [(ngModel)]=\"position\"><md-option value=\"before\">Before</md-option><md-option value=\"after\">After</md-option><md-option value=\"above\">Above</md-option><md-option value=\"below\">Below</md-option><md-option value=\"left\">Left</md-option><md-option value=\"right\">Right</md-option></md-select></div>",
                styles: [".example-tooltip-host { display: inline-flex; align-items: center; margin: 50px; } .example-select { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
TooltipPositionExample.ctorParameters = function () { return []; };
/* tslint:disable */
/** DO NOT MANUALLY EDIT THIS FILE, IT IS GENERATED VIA GULP 'build-examples-module' */
var EXAMPLE_COMPONENTS = {
    'autocomplete-overview': {
        title: 'Basic autocomplete',
        component: AutocompleteOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'button-overview': {
        title: 'Basic buttons',
        component: ButtonOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'button-toggle-exclusive': {
        title: 'Exclusive selection',
        component: ButtonToggleExclusiveExample,
        additionalFiles: null,
        selectorName: null
    },
    'button-toggle-overview': {
        title: 'Basic button-toggles',
        component: ButtonToggleOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'button-types': {
        title: 'Button varieties',
        component: ButtonTypesExample,
        additionalFiles: null,
        selectorName: null
    },
    'card-fancy': {
        title: 'Card with multiple sections',
        component: CardFancyExample,
        additionalFiles: null,
        selectorName: null
    },
    'card-overview': {
        title: 'Basic cards',
        component: CardOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'cdk-table-basic': {
        title: 'Basic CDK data-table',
        component: CdkTableBasicExample,
        additionalFiles: null,
        selectorName: null
    },
    'checkbox-configurable': {
        title: 'Configurable checkbox',
        component: CheckboxConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'checkbox-overview': {
        title: 'Basic checkboxes',
        component: CheckboxOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'chips-overview': {
        title: 'Basic chips',
        component: ChipsOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'chips-stacked': {
        title: 'Stacked chips',
        component: ChipsStackedExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-api': {
        title: 'Datepicker API',
        component: DatepickerApiExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-filter': {
        title: 'Datepicker Filter',
        component: DatepickerFilterExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-min-max': {
        title: 'Datepicker Min Max',
        component: DatepickerMinMaxExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-overview': {
        title: 'Basic datepicker',
        component: DatepickerOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-start-view': {
        title: 'Datepicker start date',
        component: DatepickerStartViewExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-touch': {
        title: 'Datepicker Touch',
        component: DatepickerTouchExample,
        additionalFiles: null,
        selectorName: null
    },
    'dialog-content': {
        title: 'Dialog with header, scrollable content and actions',
        component: DialogContentExample,
        additionalFiles: ["dialog-content-example-dialog.html"],
        selectorName: 'DialogContentExample, DialogContentExampleDialog'
    },
    'dialog-data': {
        title: 'Injecting data when opening a dialog',
        component: DialogDataExample,
        additionalFiles: ["dialog-data-example-dialog.html"],
        selectorName: 'DialogDataExample, DialogDataExampleDialog'
    },
    'dialog-elements': {
        title: 'Dialog elements',
        component: DialogElementsExample,
        additionalFiles: ["dialog-elements-example-dialog.html"],
        selectorName: 'DialogElementsExample, DialogElementsExampleDialog'
    },
    'dialog-overview': {
        title: 'Dialog Overview',
        component: DialogOverviewExample,
        additionalFiles: ["dialog-overview-example-dialog.html"],
        selectorName: 'DialogOverviewExample, DialogOverviewExampleDialog'
    },
    'grid-list-dynamic': {
        title: 'Dynamic grid-list',
        component: GridListDynamicExample,
        additionalFiles: null,
        selectorName: null
    },
    'grid-list-overview': {
        title: 'Basic grid-list',
        component: GridListOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'icon-overview': {
        title: 'Basic icons',
        component: IconOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'icon-svg': {
        title: 'SVG icons',
        component: IconSvgExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-clearable': {
        title: 'Input Clearable',
        component: InputClearableExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-errors': {
        title: 'Input Errors',
        component: InputErrorsExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-form': {
        title: 'Inputs in a form',
        component: InputFormExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-hint': {
        title: 'Input hints',
        component: InputHintExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-overview': {
        title: 'Basic Inputs',
        component: InputOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-prefix-suffix': {
        title: 'Input Prefixes and Suffixes',
        component: InputPrefixSuffixExample,
        additionalFiles: null,
        selectorName: null
    },
    'list-overview': {
        title: 'Basic list',
        component: ListOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'list-sections': {
        title: 'List with sections',
        component: ListSectionsExample,
        additionalFiles: null,
        selectorName: null
    },
    'menu-icons': {
        title: 'Menu with icons',
        component: MenuIconsExample,
        additionalFiles: null,
        selectorName: null
    },
    'menu-overview': {
        title: 'Basic menu',
        component: MenuOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'paginator-configurable': {
        title: 'Configurable paginator',
        component: PaginatorConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'paginator-overview': {
        title: 'Paginator',
        component: PaginatorOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'progress-bar-configurable': {
        title: 'Configurable progress-bar',
        component: ProgressBarConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'progress-bar-overview': {
        title: 'Basic progress-bar',
        component: ProgressBarOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'progress-spinner-configurable': {
        title: 'Configurable progress spinner',
        component: ProgressSpinnerConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'progress-spinner-overview': {
        title: 'Basic progress-spinner',
        component: ProgressSpinnerOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'radio-ng-model': {
        title: 'Radios with ngModel',
        component: RadioNgModelExample,
        additionalFiles: null,
        selectorName: null
    },
    'radio-overview': {
        title: 'Basic radios',
        component: RadioOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-form': {
        title: 'Select in a form',
        component: SelectFormExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-overview': {
        title: 'Basic select',
        component: SelectOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'sidenav-fab': {
        title: 'Sidenav with a FAB',
        component: SidenavFabExample,
        additionalFiles: null,
        selectorName: null
    },
    'sidenav-overview': {
        title: 'Basic sidenav',
        component: SidenavOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'slide-toggle-configurable': {
        title: 'Configurable slide-toggle',
        component: SlideToggleConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'slide-toggle-forms': {
        title: 'Slide-toggle with forms',
        component: SlideToggleFormsExample,
        additionalFiles: null,
        selectorName: null
    },
    'slide-toggle-overview': {
        title: 'Basic slide-toggles',
        component: SlideToggleOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'slider-configurable': {
        title: 'Configurable slider',
        component: SliderConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'slider-overview': {
        title: 'Basic slider',
        component: SliderOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'snack-bar-component': {
        title: 'Snack-bar with a custom component',
        component: SnackBarComponentExample,
        additionalFiles: ["snack-bar-component-example-snack.html"],
        selectorName: 'SnackBarComponentExample, PizzaPartyComponent'
    },
    'snack-bar-overview': {
        title: 'Basic snack-bar',
        component: SnackBarOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'sort-overview': {
        title: 'Sorting overview',
        component: SortOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-basic': {
        title: 'Basic table',
        component: TableBasicExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-http': {
        title: 'Table retrieving data through HTTP',
        component: TableHttpExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-filtering': {
        title: 'Table with filtering',
        component: TableFilteringExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-overview': {
        title: 'Feature-rich data table',
        component: TableOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-pagination': {
        title: 'Table with pagination',
        component: TablePaginationExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-sorting': {
        title: 'Table with sorting',
        component: TableSortingExample,
        additionalFiles: null,
        selectorName: null
    },
    'tabs-overview': {
        title: 'Basic tabs',
        component: TabsOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'tabs-template-label': {
        title: 'Coming soon!',
        component: TabsTemplateLabelExample,
        additionalFiles: null,
        selectorName: null
    },
    'toolbar-multirow': {
        title: 'Multi-row toolbar',
        component: ToolbarMultirowExample,
        additionalFiles: null,
        selectorName: null
    },
    'toolbar-overview': {
        title: 'Basic toolbar',
        component: ToolbarOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'tooltip-overview': {
        title: 'Basic tooltip',
        component: TooltipOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'tooltip-position': {
        title: 'Tooltip with custom position',
        component: TooltipPositionExample,
        additionalFiles: null,
        selectorName: null
    },
};
var EXAMPLE_LIST = [
    AutocompleteOverviewExample,
    ButtonOverviewExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
    ButtonTypesExample,
    CardFancyExample,
    CardOverviewExample,
    CdkTableBasicExample,
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
    ChipsOverviewExample,
    ChipsStackedExample,
    DatepickerApiExample,
    DatepickerFilterExample,
    DatepickerMinMaxExample,
    DatepickerOverviewExample,
    DatepickerStartViewExample,
    DatepickerTouchExample,
    DialogContentExampleDialog, DialogContentExample,
    DialogDataExampleDialog, DialogDataExample,
    DialogElementsExampleDialog, DialogElementsExample,
    DialogOverviewExampleDialog, DialogOverviewExample,
    GridListDynamicExample,
    GridListOverviewExample,
    IconOverviewExample,
    IconSvgExample,
    InputClearableExample,
    InputErrorsExample,
    InputFormExample,
    InputHintExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
    ListOverviewExample,
    ListSectionsExample,
    MenuIconsExample,
    MenuOverviewExample,
    PaginatorConfigurableExample,
    PaginatorOverviewExample,
    ProgressBarConfigurableExample,
    ProgressBarOverviewExample,
    ProgressSpinnerConfigurableExample,
    ProgressSpinnerOverviewExample,
    RadioNgModelExample,
    RadioOverviewExample,
    SelectFormExample,
    SelectOverviewExample,
    SidenavFabExample,
    SidenavOverviewExample,
    SlideToggleConfigurableExample,
    SlideToggleFormsExample,
    SlideToggleOverviewExample,
    SliderConfigurableExample,
    SliderOverviewExample,
    PizzaPartyComponent, SnackBarComponentExample,
    SnackBarOverviewExample,
    SortOverviewExample,
    TableBasicExample,
    TableFilteringExample,
    TableHttpExample,
    TableOverviewExample,
    TablePaginationExample,
    TableSortingExample,
    TabsOverviewExample,
    TabsTemplateLabelExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
    TooltipOverviewExample,
    TooltipPositionExample,
];
var ExampleModule = (function () {
    function ExampleModule() {
    }
    return ExampleModule;
}());
ExampleModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                declarations: EXAMPLE_LIST,
                entryComponents: EXAMPLE_LIST,
                imports: [
                    ExampleMaterialModule,
                    _angular_forms.FormsModule,
                    _angular_forms.ReactiveFormsModule,
                    _angular_common.CommonModule
                ]
            },] },
];
/**
 * @nocollapse
 */
ExampleModule.ctorParameters = function () { return []; };
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
var ExampleData = (function () {
    /**
     * @param {?} example
     */
    function ExampleData(example) {
        // TODO: figure out how do we get these variables.
        this.description = 'Some description for material';
        // TODO: use real example and delete the example/ folder.
        this.examplePath = '/assets/example/';
        this.exampleFiles = ['button-demo.html', 'button-demo.scss', 'button-demo.ts'];
        // TODO: extract these variables from example code.
        this.selectorName = 'button-demo';
        this.indexFilename = 'button-demo';
        this.componentName = 'ButtonDemo';
        if (example && EXAMPLE_COMPONENTS[example]) {
            this.examplePath = "/assets/plunker/examples/" + example + "/";
            // TODO(tinayuangao): Do not hard-code extensions
            this.exampleFiles = ['html', 'ts', 'css']
                .map(function (extension) { return example + "-example." + extension; });
            if (EXAMPLE_COMPONENTS[example].additionalFiles) {
                this.exampleFiles = this.exampleFiles.concat(EXAMPLE_COMPONENTS[example].additionalFiles);
            }
            this.selectorName = this.indexFilename = example + "-example";
            var exampleName = example.replace(/(?:^\w|\b\w)/g, function (letter) { return letter.toUpperCase(); });
            if (EXAMPLE_COMPONENTS[example].title) {
                this.description = EXAMPLE_COMPONENTS[example].title;
            }
            else {
                this.description = exampleName.replace(/[\-]+/g, ' ') + ' Example';
            }
            if (EXAMPLE_COMPONENTS[example].selectorName) {
                this.componentName = EXAMPLE_COMPONENTS[example].selectorName;
            }
            else {
                this.componentName = exampleName.replace(/[\-]+/g, '') + 'Example';
            }
        }
    }
    return ExampleData;
}());

exports.ExampleData = ExampleData;
exports.EXAMPLE_COMPONENTS = EXAMPLE_COMPONENTS;
exports.EXAMPLE_LIST = EXAMPLE_LIST;
exports.ExampleModule = ExampleModule;
exports.DatepickerOverviewExample = DatepickerOverviewExample;
exports.CardFancyExample = CardFancyExample;
exports.ɵa = AutocompleteOverviewExample;
exports.ɵb = ButtonOverviewExample;
exports.ɵc = ButtonToggleExclusiveExample;
exports.ɵd = ButtonToggleOverviewExample;
exports.ɵe = ButtonTypesExample;
exports.ɵf = CardOverviewExample;
exports.ɵg = CdkTableBasicExample;
exports.ɵh = CheckboxConfigurableExample;
exports.ɵi = CheckboxOverviewExample;
exports.ɵj = ChipsOverviewExample;
exports.ɵk = ChipsStackedExample;
exports.ɵl = DatepickerApiExample;
exports.ɵm = DatepickerFilterExample;
exports.ɵn = DatepickerMinMaxExample;
exports.ɵo = DatepickerStartViewExample;
exports.ɵp = DatepickerTouchExample;
exports.ɵq = DialogContentExample;
exports.ɵr = DialogContentExampleDialog;
exports.ɵs = DialogDataExample;
exports.ɵt = DialogDataExampleDialog;
exports.ɵu = DialogElementsExample;
exports.ɵv = DialogElementsExampleDialog;
exports.ɵw = DialogOverviewExample;
exports.ɵx = DialogOverviewExampleDialog;
exports.ɵy = GridListDynamicExample;
exports.ɵz = GridListOverviewExample;
exports.ɵba = IconOverviewExample;
exports.ɵbb = IconSvgExample;
exports.ɵbc = InputClearableExample;
exports.ɵbd = InputErrorsExample;
exports.ɵbe = InputFormExample;
exports.ɵbf = InputHintExample;
exports.ɵbg = InputOverviewExample;
exports.ɵbh = InputPrefixSuffixExample;
exports.ɵbi = ListOverviewExample;
exports.ɵbj = ListSectionsExample;
exports.ɵct = ExampleMaterialModule;
exports.ɵbk = MenuIconsExample;
exports.ɵbl = MenuOverviewExample;
exports.ɵbm = PaginatorConfigurableExample;
exports.ɵbn = PaginatorOverviewExample;
exports.ɵbo = ProgressBarConfigurableExample;
exports.ɵbp = ProgressBarOverviewExample;
exports.ɵbq = ProgressSpinnerConfigurableExample;
exports.ɵbr = ProgressSpinnerOverviewExample;
exports.ɵbs = RadioNgModelExample;
exports.ɵbt = RadioOverviewExample;
exports.ɵbu = SelectFormExample;
exports.ɵbv = SelectOverviewExample;
exports.ɵbw = SidenavFabExample;
exports.ɵbx = SidenavOverviewExample;
exports.ɵby = SlideToggleConfigurableExample;
exports.ɵbz = SlideToggleFormsExample;
exports.ɵca = SlideToggleOverviewExample;
exports.ɵcb = SliderConfigurableExample;
exports.ɵcc = SliderOverviewExample;
exports.ɵce = PizzaPartyComponent;
exports.ɵcd = SnackBarComponentExample;
exports.ɵcf = SnackBarOverviewExample;
exports.ɵcg = SortOverviewExample;
exports.ɵch = TableBasicExample;
exports.ɵcj = TableFilteringExample;
exports.ɵci = TableHttpExample;
exports.ɵck = TableOverviewExample;
exports.ɵcl = TablePaginationExample;
exports.ɵcm = TableSortingExample;
exports.ɵcn = TabsOverviewExample;
exports.ɵco = TabsTemplateLabelExample;
exports.ɵcp = ToolbarMultirowExample;
exports.ɵcq = ToolbarOverviewExample;
exports.ɵcr = TooltipOverviewExample;
exports.ɵcs = TooltipPositionExample;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-examples.umd.js.map

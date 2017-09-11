export interface LiveExample {
    title: string;
    component: any;
    additionalFiles?: string[];
    selectorName?: string;
}
import { AutocompleteDisplayExample } from './autocomplete-display/autocomplete-display-example';
import { AutocompleteFilterExample } from './autocomplete-filter/autocomplete-filter-example';
import { AutocompleteOverviewExample } from './autocomplete-overview/autocomplete-overview-example';
import { AutocompleteSimpleExample } from './autocomplete-simple/autocomplete-simple-example';
import { ButtonOverviewExample } from './button-overview/button-overview-example';
import { ButtonToggleExclusiveExample } from './button-toggle-exclusive/button-toggle-exclusive-example';
import { ButtonToggleOverviewExample } from './button-toggle-overview/button-toggle-overview-example';
import { ButtonTypesExample } from './button-types/button-types-example';
import { CardFancyExample } from './card-fancy/card-fancy-example';
import { CardOverviewExample } from './card-overview/card-overview-example';
import { CdkTableBasicExample } from './cdk-table-basic/cdk-table-basic-example';
import { CheckboxConfigurableExample } from './checkbox-configurable/checkbox-configurable-example';
import { CheckboxOverviewExample } from './checkbox-overview/checkbox-overview-example';
import { ChipsOverviewExample } from './chips-overview/chips-overview-example';
import { ChipsStackedExample } from './chips-stacked/chips-stacked-example';
import { DatepickerApiExample } from './datepicker-api/datepicker-api-example';
import { DatepickerFilterExample } from './datepicker-filter/datepicker-filter-example';
import { DatepickerMinMaxExample } from './datepicker-min-max/datepicker-min-max-example';
import { DatepickerOverviewExample } from './datepicker-overview/datepicker-overview-example';
import { DatepickerStartViewExample } from './datepicker-start-view/datepicker-start-view-example';
import { DatepickerTouchExample } from './datepicker-touch/datepicker-touch-example';
import { DialogContentExample } from './dialog-content/dialog-content-example';
import { DialogDataExample } from './dialog-data/dialog-data-example';
import { DialogElementsExample } from './dialog-elements/dialog-elements-example';
import { DialogOverviewExampleDialog, DialogOverviewExample } from './dialog-overview/dialog-overview-example';
import { ExpansionOverviewExample } from './expansion-overview/expansion-overview-example';
import { ExpansionStepsExample } from './expansion-steps/expansion-steps-example';
import { GridListDynamicExample } from './grid-list-dynamic/grid-list-dynamic-example';
import { GridListOverviewExample } from './grid-list-overview/grid-list-overview-example';
import { IconOverviewExample } from './icon-overview/icon-overview-example';
import { IconSvgExample } from './icon-svg-example/icon-svg-example';
import { InputClearableExample } from './input-clearable/input-clearable-example';
import { InputErrorsExample } from './input-errors/input-errors-example';
import { InputFormExample } from './input-form/input-form-example';
import { InputHintExample } from './input-hint/input-hint-example';
import { InputOverviewExample } from './input-overview/input-overview-example';
import { InputPrefixSuffixExample } from './input-prefix-suffix/input-prefix-suffix-example';
import { ListOverviewExample } from './list-overview/list-overview-example';
import { ListSectionsExample } from './list-sections/list-sections-example';
import { ListSelectionExample } from './list-selection/list-selection-example';
import { MenuIconsExample } from './menu-icons/menu-icons-example';
import { MenuOverviewExample } from './menu-overview/menu-overview-example';
import { PaginatorConfigurableExample } from './paginator-configurable/paginator-configurable-example';
import { PaginatorOverviewExample } from './paginator-overview/paginator-overview-example';
import { ProgressBarConfigurableExample } from './progress-bar-configurable/progress-bar-configurable-example';
import { ProgressBarOverviewExample } from './progress-bar-overview/progress-bar-overview-example';
import { ProgressSpinnerConfigurableExample } from './progress-spinner-configurable/progress-spinner-configurable-example';
import { ProgressSpinnerOverviewExample } from './progress-spinner-overview/progress-spinner-overview-example';
import { RadioNgModelExample } from './radio-ng-model/radio-ng-model-example';
import { RadioOverviewExample } from './radio-overview/radio-overview-example';
import { SelectFormExample } from './select-form/select-form-example';
import { SelectOverviewExample } from './select-overview/select-overview-example';
import { SidenavFabExample } from './sidenav-fab/sidenav-fab-example';
import { SidenavOverviewExample } from './sidenav-overview/sidenav-overview-example';
import { SlideToggleConfigurableExample } from './slide-toggle-configurable/slide-toggle-configurable-example';
import { SlideToggleFormsExample } from './slide-toggle-forms/slide-toggle-forms-example';
import { SlideToggleOverviewExample } from './slide-toggle-overview/slide-toggle-overview-example';
import { SliderConfigurableExample } from './slider-configurable/slider-configurable-example';
import { SliderOverviewExample } from './slider-overview/slider-overview-example';
import { SnackBarComponentExample } from './snack-bar-component/snack-bar-component-example';
import { SnackBarOverviewExample } from './snack-bar-overview/snack-bar-overview-example';
import { SortOverviewExample } from './sort-overview/sort-overview-example';
import { StepperOverviewExample } from './stepper-overview/stepper-overview-example';
import { TableBasicExample } from './table-basic/table-basic-example';
import { TableFilteringExample } from './table-filtering/table-filtering-example';
import { TableHttpExample } from './table-http/table-http-example';
import { TableOverviewExample } from './table-overview/table-overview-example';
import { TablePaginationExample } from './table-pagination/table-pagination-example';
import { TableSortingExample } from './table-sorting/table-sorting-example';
import { TabsOverviewExample } from './tabs-overview/tabs-overview-example';
import { TabsTemplateLabelExample } from './tabs-template-label/tabs-template-label-example';
import { ToolbarMultirowExample } from './toolbar-multirow/toolbar-multirow-example';
import { ToolbarOverviewExample } from './toolbar-overview/toolbar-overview-example';
import { TooltipOverviewExample } from './tooltip-overview/tooltip-overview-example';
import { TooltipPositionExample } from './tooltip-position/tooltip-position-example';
export declare const EXAMPLE_COMPONENTS: {
    'autocomplete-display': {
        title: string;
        component: typeof AutocompleteDisplayExample;
        additionalFiles: null;
        selectorName: null;
    };
    'autocomplete-filter': {
        title: string;
        component: typeof AutocompleteFilterExample;
        additionalFiles: null;
        selectorName: null;
    };
    'autocomplete-overview': {
        title: string;
        component: typeof AutocompleteOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'autocomplete-simple': {
        title: string;
        component: typeof AutocompleteSimpleExample;
        additionalFiles: null;
        selectorName: null;
    };
    'button-overview': {
        title: string;
        component: typeof ButtonOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'button-toggle-exclusive': {
        title: string;
        component: typeof ButtonToggleExclusiveExample;
        additionalFiles: null;
        selectorName: null;
    };
    'button-toggle-overview': {
        title: string;
        component: typeof ButtonToggleOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'button-types': {
        title: string;
        component: typeof ButtonTypesExample;
        additionalFiles: null;
        selectorName: null;
    };
    'card-fancy': {
        title: string;
        component: typeof CardFancyExample;
        additionalFiles: null;
        selectorName: null;
    };
    'card-overview': {
        title: string;
        component: typeof CardOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'cdk-table-basic': {
        title: string;
        component: typeof CdkTableBasicExample;
        additionalFiles: null;
        selectorName: null;
    };
    'checkbox-configurable': {
        title: string;
        component: typeof CheckboxConfigurableExample;
        additionalFiles: null;
        selectorName: null;
    };
    'checkbox-overview': {
        title: string;
        component: typeof CheckboxOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'chips-overview': {
        title: string;
        component: typeof ChipsOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'chips-stacked': {
        title: string;
        component: typeof ChipsStackedExample;
        additionalFiles: null;
        selectorName: null;
    };
    'datepicker-api': {
        title: string;
        component: typeof DatepickerApiExample;
        additionalFiles: null;
        selectorName: null;
    };
    'datepicker-filter': {
        title: string;
        component: typeof DatepickerFilterExample;
        additionalFiles: null;
        selectorName: null;
    };
    'datepicker-min-max': {
        title: string;
        component: typeof DatepickerMinMaxExample;
        additionalFiles: null;
        selectorName: null;
    };
    'datepicker-overview': {
        title: string;
        component: typeof DatepickerOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'datepicker-start-view': {
        title: string;
        component: typeof DatepickerStartViewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'datepicker-touch': {
        title: string;
        component: typeof DatepickerTouchExample;
        additionalFiles: null;
        selectorName: null;
    };
    'dialog-content': {
        title: string;
        component: typeof DialogContentExample;
        additionalFiles: string[];
        selectorName: string;
    };
    'dialog-data': {
        title: string;
        component: typeof DialogDataExample;
        additionalFiles: string[];
        selectorName: string;
    };
    'dialog-elements': {
        title: string;
        component: typeof DialogElementsExample;
        additionalFiles: string[];
        selectorName: string;
    };
    'dialog-overview': {
        title: string;
        component: typeof DialogOverviewExample;
        additionalFiles: string[];
        selectorName: string;
    };
    'expansion-overview': {
        title: string;
        component: typeof ExpansionOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'expansion-steps': {
        title: string;
        component: typeof ExpansionStepsExample;
        additionalFiles: null;
        selectorName: null;
    };
    'grid-list-dynamic': {
        title: string;
        component: typeof GridListDynamicExample;
        additionalFiles: null;
        selectorName: null;
    };
    'grid-list-overview': {
        title: string;
        component: typeof GridListOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'icon-overview': {
        title: string;
        component: typeof IconOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'icon-svg': {
        title: string;
        component: typeof IconSvgExample;
        additionalFiles: null;
        selectorName: null;
    };
    'input-clearable': {
        title: string;
        component: typeof InputClearableExample;
        additionalFiles: null;
        selectorName: null;
    };
    'input-errors': {
        title: string;
        component: typeof InputErrorsExample;
        additionalFiles: null;
        selectorName: null;
    };
    'input-form': {
        title: string;
        component: typeof InputFormExample;
        additionalFiles: null;
        selectorName: null;
    };
    'input-hint': {
        title: string;
        component: typeof InputHintExample;
        additionalFiles: null;
        selectorName: null;
    };
    'input-overview': {
        title: string;
        component: typeof InputOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'input-prefix-suffix': {
        title: string;
        component: typeof InputPrefixSuffixExample;
        additionalFiles: null;
        selectorName: null;
    };
    'list-overview': {
        title: string;
        component: typeof ListOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'list-sections': {
        title: string;
        component: typeof ListSectionsExample;
        additionalFiles: null;
        selectorName: null;
    };
    'list-selection': {
        title: string;
        component: typeof ListSelectionExample;
        additionalFiles: null;
        selectorName: null;
    };
    'menu-icons': {
        title: string;
        component: typeof MenuIconsExample;
        additionalFiles: null;
        selectorName: null;
    };
    'menu-overview': {
        title: string;
        component: typeof MenuOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'paginator-configurable': {
        title: string;
        component: typeof PaginatorConfigurableExample;
        additionalFiles: null;
        selectorName: null;
    };
    'paginator-overview': {
        title: string;
        component: typeof PaginatorOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'progress-bar-configurable': {
        title: string;
        component: typeof ProgressBarConfigurableExample;
        additionalFiles: null;
        selectorName: null;
    };
    'progress-bar-overview': {
        title: string;
        component: typeof ProgressBarOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'progress-spinner-configurable': {
        title: string;
        component: typeof ProgressSpinnerConfigurableExample;
        additionalFiles: null;
        selectorName: null;
    };
    'progress-spinner-overview': {
        title: string;
        component: typeof ProgressSpinnerOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'radio-ng-model': {
        title: string;
        component: typeof RadioNgModelExample;
        additionalFiles: null;
        selectorName: null;
    };
    'radio-overview': {
        title: string;
        component: typeof RadioOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'select-form': {
        title: string;
        component: typeof SelectFormExample;
        additionalFiles: null;
        selectorName: null;
    };
    'select-overview': {
        title: string;
        component: typeof SelectOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'sidenav-fab': {
        title: string;
        component: typeof SidenavFabExample;
        additionalFiles: null;
        selectorName: null;
    };
    'sidenav-overview': {
        title: string;
        component: typeof SidenavOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'slide-toggle-configurable': {
        title: string;
        component: typeof SlideToggleConfigurableExample;
        additionalFiles: null;
        selectorName: null;
    };
    'slide-toggle-forms': {
        title: string;
        component: typeof SlideToggleFormsExample;
        additionalFiles: null;
        selectorName: null;
    };
    'slide-toggle-overview': {
        title: string;
        component: typeof SlideToggleOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'slider-configurable': {
        title: string;
        component: typeof SliderConfigurableExample;
        additionalFiles: null;
        selectorName: null;
    };
    'slider-overview': {
        title: string;
        component: typeof SliderOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'snack-bar-component': {
        title: string;
        component: typeof SnackBarComponentExample;
        additionalFiles: string[];
        selectorName: string;
    };
    'snack-bar-overview': {
        title: string;
        component: typeof SnackBarOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'sort-overview': {
        title: string;
        component: typeof SortOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'stepper-overview': {
        title: string;
        component: typeof StepperOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'table-basic': {
        title: string;
        component: typeof TableBasicExample;
        additionalFiles: null;
        selectorName: null;
    };
    'table-filtering': {
        title: string;
        component: typeof TableFilteringExample;
        additionalFiles: null;
        selectorName: null;
    };
    'table-http': {
        title: string;
        component: typeof TableHttpExample;
        additionalFiles: null;
        selectorName: null;
    };
    'table-overview': {
        title: string;
        component: typeof TableOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'table-pagination': {
        title: string;
        component: typeof TablePaginationExample;
        additionalFiles: null;
        selectorName: null;
    };
    'table-sorting': {
        title: string;
        component: typeof TableSortingExample;
        additionalFiles: null;
        selectorName: null;
    };
    'tabs-overview': {
        title: string;
        component: typeof TabsOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'tabs-template-label': {
        title: string;
        component: typeof TabsTemplateLabelExample;
        additionalFiles: null;
        selectorName: null;
    };
    'toolbar-multirow': {
        title: string;
        component: typeof ToolbarMultirowExample;
        additionalFiles: null;
        selectorName: null;
    };
    'toolbar-overview': {
        title: string;
        component: typeof ToolbarOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'tooltip-overview': {
        title: string;
        component: typeof TooltipOverviewExample;
        additionalFiles: null;
        selectorName: null;
    };
    'tooltip-position': {
        title: string;
        component: typeof TooltipPositionExample;
        additionalFiles: null;
        selectorName: null;
    };
};
export declare const EXAMPLE_LIST: (typeof DialogContentExample | typeof DialogOverviewExampleDialog | typeof IconSvgExample | typeof SlideToggleFormsExample | typeof SnackBarOverviewExample | typeof StepperOverviewExample | typeof TableHttpExample)[];
export declare class ExampleModule {
}

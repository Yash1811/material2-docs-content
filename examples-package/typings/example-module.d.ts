import { AutocompleteOverviewExample } from './autocomplete-overview/autocomplete-overview-example';
import { ButtonOverviewExample } from './button-overview/button-overview-example';
import { ButtonTypesExample } from './button-types/button-types-example';
import { CheckboxOverviewExample } from './checkbox-overview/checkbox-overview-example';
import { SliderConfigurableExample } from './slider-configurable/slider-configurable-example';
import { TabsOverviewExample } from './tabs-overview/tabs-overview-example';
import { SnackBarComponentExample } from './snack-bar-component/snack-bar-component-example';
import { ProgressBarConfigurableExample } from './progress-bar-configurable/progress-bar-configurable-example';
import { DialogOverviewExample } from './dialog-overview/dialog-overview-example';
import { RadioNgModelExample } from './radio-ng-model/radio-ng-model-example';
import { CardFancyExample } from './card-fancy/card-fancy-example';
import { ToolbarOverviewExample } from './toolbar-overview/toolbar-overview-example';
import { ToolbarMultirowExample } from './toolbar-multirow/toolbar-multirow-example';
import { MenuIconsExample } from './menu-icons/menu-icons-example';
import { GridListDynamicExample } from './grid-list-dynamic/grid-list-dynamic-example';
import { IconOverviewExample } from './icon-overview/icon-overview-example';
import { ProgressBarOverviewExample } from './progress-bar-overview/progress-bar-overview-example';
import { SlideToggleOverviewExample } from './slide-toggle-overview/slide-toggle-overview-example';
import { InputOverviewExample } from './input-overview/input-overview-example';
import { MenuOverviewExample } from './menu-overview/menu-overview-example';
import { CheckboxConfigurableExample } from './checkbox-configurable/checkbox-configurable-example';
import { ButtonToggleExclusiveExample } from './button-toggle-exclusive/button-toggle-exclusive-example';
import { ListSectionsExample } from './list-sections/list-sections-example';
import { SnackBarOverviewExample } from './snack-bar-overview/snack-bar-overview-example';
import { DialogResultExampleDialog, DialogResultExample } from './dialog-result/dialog-result-example';
import { DialogElementsExample } from './dialog-elements/dialog-elements-example';
import { TooltipOverviewExample } from './tooltip-overview/tooltip-overview-example';
import { ButtonToggleOverviewExample } from './button-toggle-overview/button-toggle-overview-example';
import { GridListOverviewExample } from './grid-list-overview/grid-list-overview-example';
import { TooltipPositionExample } from './tooltip-position/tooltip-position-example';
import { ProgressSpinnerConfigurableExample } from './progress-spinner-configurable/progress-spinner-configurable-example';
import { InputFormExample } from './input-form/input-form-example';
import { ListOverviewExample } from './list-overview/list-overview-example';
import { SliderOverviewExample } from './slider-overview/slider-overview-example';
import { SlideToggleConfigurableExample } from './slide-toggle-configurable/slide-toggle-configurable-example';
import { IconSvgExample } from './icon-svg-example/icon-svg-example';
import { SidenavFabExample } from './sidenav-fab/sidenav-fab-example';
import { CardOverviewExample } from './card-overview/card-overview-example';
import { ProgressSpinnerOverviewExample } from './progress-spinner-overview/progress-spinner-overview-example';
import { TabsTemplateLabelExample } from './tabs-template-label/tabs-template-label-example';
import { RadioOverviewExample } from './radio-overview/radio-overview-example';
import { SidenavOverviewExample } from './sidenav-overview/sidenav-overview-example';
import { SelectOverviewExample } from './select-overview/select-overview-example';
import { ChipsOverviewExample } from './chips-overview/chips-overview-example';
import { ChipsStackedExample } from './chips-stacked/chips-stacked-example';
import { SelectFormExample } from './select-form/select-form-example';
import { DatepickerOverviewExample } from './datepicker-overview/datepicker-overview-example';
export interface LiveExample {
    title: string;
    component: any;
    additionalFiles: string[];
    selectorName: string;
}
/**
 * The list of example components.
 * Key is the example name which will be used in `material-docs-example="key"`.
 * Value is the component.
 */
export declare const EXAMPLE_COMPONENTS: {
    'autocomplete-overview': {
        title: string;
        component: typeof AutocompleteOverviewExample;
    };
    'button-overview': {
        title: string;
        component: typeof ButtonOverviewExample;
    };
    'button-types': {
        title: string;
        component: typeof ButtonTypesExample;
    };
    'button-toggle-exclusive': {
        title: string;
        component: typeof ButtonToggleExclusiveExample;
    };
    'button-toggle-overview': {
        title: string;
        component: typeof ButtonToggleOverviewExample;
    };
    'chips-overview': {
        title: string;
        component: typeof ChipsOverviewExample;
    };
    'chips-stacked': {
        title: string;
        component: typeof ChipsStackedExample;
    };
    'card-fancy': {
        title: string;
        component: typeof CardFancyExample;
    };
    'card-overview': {
        title: string;
        component: typeof CardOverviewExample;
    };
    'checkbox-configurable': {
        title: string;
        component: typeof CheckboxConfigurableExample;
    };
    'checkbox-overview': {
        title: string;
        component: typeof CheckboxOverviewExample;
    };
    'datepicker-overview': {
        title: string;
        component: typeof DatepickerOverviewExample;
    };
    'dialog-overview': {
        title: string;
        component: typeof DialogOverviewExample;
        additionalFiles: string[];
        selectorName: string;
    };
    'dialog-result': {
        title: string;
        component: typeof DialogResultExample;
        additionalFiles: string[];
        selectorName: string;
    };
    'dialog-elements': {
        title: string;
        component: typeof DialogElementsExample;
        additionalFiles: string[];
        selectorName: string;
    };
    'grid-list-dynamic': {
        title: string;
        component: typeof GridListDynamicExample;
    };
    'grid-list-overview': {
        title: string;
        component: typeof GridListOverviewExample;
    };
    'icon-overview': {
        title: string;
        component: typeof IconOverviewExample;
    };
    'icon-svg': {
        title: string;
        component: typeof IconSvgExample;
    };
    'input-form': {
        title: string;
        component: typeof InputFormExample;
    };
    'input-overview': {
        title: string;
        component: typeof InputOverviewExample;
    };
    'list-overview': {
        title: string;
        component: typeof ListOverviewExample;
    };
    'list-sections': {
        title: string;
        component: typeof ListSectionsExample;
    };
    'menu-icons': {
        title: string;
        component: typeof MenuIconsExample;
    };
    'menu-overview': {
        title: string;
        component: typeof MenuOverviewExample;
    };
    'progress-bar-configurable': {
        title: string;
        component: typeof ProgressBarConfigurableExample;
    };
    'progress-bar-overview': {
        title: string;
        component: typeof ProgressBarOverviewExample;
    };
    'progress-spinner-configurable': {
        title: string;
        component: typeof ProgressSpinnerConfigurableExample;
    };
    'progress-spinner-overview': {
        title: string;
        component: typeof ProgressSpinnerOverviewExample;
    };
    'radio-ng-model': {
        title: string;
        component: typeof RadioNgModelExample;
    };
    'radio-overview': {
        title: string;
        component: typeof RadioOverviewExample;
    };
    'select-overview': {
        title: string;
        component: typeof SelectOverviewExample;
    };
    'select-form': {
        title: string;
        component: typeof SelectFormExample;
    };
    'sidenav-fab': {
        title: string;
        component: typeof SidenavFabExample;
    };
    'sidenav-overview': {
        title: string;
        component: typeof SidenavOverviewExample;
    };
    'slider-configurable': {
        title: string;
        component: typeof SliderConfigurableExample;
    };
    'slider-overview': {
        title: string;
        component: typeof SliderOverviewExample;
    };
    'slide-toggle-configurable': {
        title: string;
        component: typeof SlideToggleConfigurableExample;
    };
    'slide-toggle-overview': {
        title: string;
        component: typeof SlideToggleOverviewExample;
    };
    'snack-bar-component': {
        title: string;
        component: typeof SnackBarComponentExample;
    };
    'snack-bar-overview': {
        title: string;
        component: typeof SnackBarOverviewExample;
    };
    'tabs-overview': {
        title: string;
        component: typeof TabsOverviewExample;
    };
    'tabs-template-label': {
        title: string;
        component: typeof TabsTemplateLabelExample;
    };
    'toolbar-multirow': {
        title: string;
        component: typeof ToolbarMultirowExample;
    };
    'toolbar-overview': {
        title: string;
        component: typeof ToolbarOverviewExample;
    };
    'tooltip-overview': {
        title: string;
        component: typeof TooltipOverviewExample;
    };
    'tooltip-position': {
        title: string;
        component: typeof TooltipPositionExample;
    };
};
/**
 * The list of all example components.
 * We need to put them in both `declarations` and `entryComponents` to make them work.
 */
export declare const EXAMPLE_LIST: (typeof DialogOverviewExample | typeof SnackBarOverviewExample | typeof DialogResultExampleDialog | typeof IconSvgExample)[];
export declare class ExampleModule {
}

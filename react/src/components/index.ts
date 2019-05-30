import { addIcons } from 'ionicons';
import { ICON_PATHS } from 'ionicons/icons';
import { JSX } from '@ionic/core';
import { createReactComponent } from './createComponent';
import { ReactProps } from './ReactProps';
import { defineCustomElements } from '@ionic/core/loader';
export { AlertButton, AlertInput } from '@ionic/core';
import { JSX as IoniconsJSX } from 'ionicons';

// createControllerComponent
export { default as IonAlert } from './IonAlert';
export { default as IonLoading } from './IonLoading';
export { default as IonToast } from './IonToast';

// createOverlayComponent
export { default as IonActionSheet } from './IonActionSheet';
export { default as IonModal } from './IonModal';
export { default as IonPopover } from './IonPopover';

// Custom Components
export { default as IonPage } from './IonPage';
export { default as IonTabs } from './navigation/IonTabs';
export { default as IonTabBar } from './navigation/IonTabBar';
export { IonRouterOutlet } from './navigation/IonRouterOutlet';
export { IonBackButton } from './navigation/IonBackButton';

addIcons(ICON_PATHS);

defineCustomElements(window);

// ionicons
export const IonIcon = createReactComponent<IoniconsJSX.IonIcon & ReactProps, HTMLIonIconElement>('ion-icon');

// createReactComponent
export const IonTabBarInner = createReactComponent<JSX.IonTabBar & ReactProps, HTMLIonTabBarElement>('ion-tab-bar');
export const IonRouterOutletInner = createReactComponent<JSX.IonRouterOutlet & ReactProps, HTMLIonRouterOutletElement>('ion-router-outlet');
export const IonBackButtonInner = createReactComponent<JSX.IonBackButton & ReactProps, HTMLIonBackButtonElement>('ion-back-button');
export const IonTab = createReactComponent<JSX.IonTab & ReactProps, HTMLIonTabElement>('ion-tab');
export const IonTabButton = createReactComponent<JSX.IonTabButton & ReactProps, HTMLIonTabButtonElement>('ion-tab-button');
export const IonAnchor = createReactComponent<JSX.IonAnchor & ReactProps, HTMLIonAnchorElement>('ion-anchor');
export const IonApp = createReactComponent<JSX.IonApp & ReactProps, HTMLIonAppElement>('ion-app');
export const IonAvatar = createReactComponent<JSX.IonAvatar & ReactProps, HTMLIonAvatarElement>('ion-avatar');
export const IonBackdrop = createReactComponent<JSX.IonBackdrop & ReactProps, HTMLIonBackdropElement>('ion-backdrop');
export const IonBadge = createReactComponent<JSX.IonBadge & ReactProps, HTMLIonBadgeElement>('ion-badge');
export const IonButton = createReactComponent<JSX.IonButton & ReactProps, HTMLIonButtonElement>('ion-button');
export const IonButtons = createReactComponent<JSX.IonButtons & ReactProps, HTMLIonButtonsElement>('ion-buttons');
export const IonCard = createReactComponent<JSX.IonCard & ReactProps, HTMLIonCardElement>('ion-card');
export const IonCardContent = createReactComponent<JSX.IonCardContent & ReactProps, HTMLIonCardContentElement>('ion-card-content');
export const IonCardHeader = createReactComponent<JSX.IonCardHeader & ReactProps, HTMLIonCardHeaderElement>('ion-card-header');
export const IonCardSubtitle = createReactComponent<JSX.IonCardSubtitle & ReactProps, HTMLIonCardSubtitleElement>('ion-card-subtitle');
export const IonCardTitle = createReactComponent<JSX.IonCardTitle & ReactProps, HTMLIonCardTitleElement>('ion-card-title');
export const IonCheckbox = createReactComponent<JSX.IonCheckbox & ReactProps, HTMLIonCheckboxElement>('ion-checkbox');
export const IonCol = createReactComponent<JSX.IonCol & ReactProps, HTMLIonColElement>('ion-col');
export const IonContent = createReactComponent<JSX.IonContent & ReactProps, HTMLIonContentElement>('ion-content');
export const IonChip = createReactComponent<JSX.IonChip & ReactProps, HTMLIonChipElement>('ion-chip');
export const IonDatetime = createReactComponent<JSX.IonDatetime & ReactProps, HTMLIonDatetimeElement>('ion-datetime');
export const IonFab= createReactComponent<JSX.IonFab & ReactProps, HTMLIonFabElement>('ion-fab');
export const IonFabButton= createReactComponent<JSX.IonFabButton & ReactProps, HTMLIonFabButtonElement>('ion-fab-button');
export const IonFabList = createReactComponent<JSX.IonFabList & ReactProps, HTMLIonFabListElement>('ion-fab-list');
export const IonFooter = createReactComponent<JSX.IonFooter & ReactProps, HTMLIonFooterElement>('ion-footer');
export const IonGrid = createReactComponent<JSX.IonGrid & ReactProps, HTMLIonGridElement>('ion-grid');
export const IonHeader = createReactComponent<JSX.IonHeader & ReactProps, HTMLIonHeaderElement>('ion-header');
export const IonImg = createReactComponent<JSX.IonImg & ReactProps, HTMLIonImgElement>('ion-img');
export const IonInfiniteScroll = createReactComponent<JSX.IonInfiniteScroll & ReactProps, HTMLIonInfiniteScrollElement>('ion-infinite-scroll');
export const IonInput = createReactComponent<JSX.IonInput & ReactProps, HTMLIonInputElement>('ion-input');
export const IonItem = createReactComponent<JSX.IonItem & ReactProps, HTMLIonItemElement>('ion-item');
export const IonItemDivider = createReactComponent<JSX.IonItemDivider & ReactProps, HTMLIonItemDividerElement>('ion-item-divider');
export const IonItemGroup = createReactComponent<JSX.IonItemGroup & ReactProps, HTMLIonItemGroupElement>('ion-item-group');
export const IonItemOption = createReactComponent<JSX.IonItemOption & ReactProps, HTMLIonItemOptionElement>('ion-item-option');
export const IonItemOptions = createReactComponent<JSX.IonItemOptions & ReactProps, HTMLIonItemOptionsElement>('ion-item-options');
export const IonItemSliding = createReactComponent<JSX.IonItemSliding & ReactProps, HTMLIonItemSlidingElement>('ion-item-sliding');
export const IonLabel = createReactComponent<JSX.IonLabel & ReactProps, HTMLIonLabelElement>('ion-label');
export const IonList = createReactComponent<JSX.IonList & ReactProps, HTMLIonListElement>('ion-list');
export const IonListHeader = createReactComponent<JSX.IonListHeader & ReactProps, HTMLIonListHeaderElement>('ion-list-header');
export const IonMenu = createReactComponent<JSX.IonMenu & ReactProps, HTMLIonMenuElement>('ion-menu');
export const IonMenuButton = createReactComponent<JSX.IonMenuButton & ReactProps, HTMLIonMenuButtonElement>('ion-menu-button');
export const IonMenuToggle = createReactComponent<JSX.IonMenuToggle & ReactProps, HTMLIonMenuToggleElement>('ion-menu-toggle');
export const IonNote = createReactComponent<JSX.IonNote & ReactProps, HTMLIonNoteElement>('ion-note');
export const IonPicker = createReactComponent<JSX.IonPicker & ReactProps, HTMLIonPickerElement>('ion-picker');
export const IonPickerColumn = createReactComponent<JSX.IonPickerColumn & ReactProps, HTMLIonPickerColumnElement>('ion-picker-column');
export const IonNav = createReactComponent<JSX.IonNav & ReactProps, HTMLIonNavElement>('ion-nav');
export const IonProgressBar = createReactComponent<JSX.IonProgressBar & ReactProps, HTMLIonProgressBarElement>('ion-progress-bar');
export const IonRadio = createReactComponent<JSX.IonRadio & ReactProps, HTMLIonRadioElement>('ion-radio');
export const IonRadioGroup = createReactComponent<JSX.IonRadioGroup & ReactProps, HTMLIonRadioGroupElement>('ion-radio-group');
export const IonRange = createReactComponent<JSX.IonRange & ReactProps, HTMLIonRangeElement>('ion-range');
export const IonRefresher = createReactComponent<JSX.IonRefresher & ReactProps, HTMLIonRefresherElement>('ion-refresher');
export const IonRefresherContent = createReactComponent<JSX.IonRefresherContent & ReactProps, HTMLIonRefresherContentElement>('ion-refresher-content');
export const IonReorder = createReactComponent<JSX.IonReorder & ReactProps, HTMLIonReorderElement>('ion-reorder');
export const IonReorderGroup = createReactComponent<JSX.IonReorderGroup & ReactProps, HTMLIonReorderGroupElement>('ion-reorder-group');
export const IonRippleEffect = createReactComponent<JSX.IonRippleEffect & ReactProps, HTMLIonRippleEffectElement>('ion-ripple-effect');
export const IonRow = createReactComponent<JSX.IonRow & ReactProps, HTMLIonRowElement>('ion-row');
export const IonSearchbar= createReactComponent<JSX.IonSearchbar & ReactProps, HTMLIonSearchbarElement>('ion-searchbar');
export const IonSegment= createReactComponent<JSX.IonSegment & ReactProps, HTMLIonSegmentElement>('ion-segment');
export const IonSegmentButton= createReactComponent<JSX.IonSegmentButton & ReactProps, HTMLIonSegmentButtonElement>('ion-segment-button');
export const IonSelect = createReactComponent<JSX.IonSelect & ReactProps, HTMLIonSelectElement>('ion-select');
export const IonSelectOption = createReactComponent<JSX.IonSelectOption & ReactProps, HTMLIonSelectOptionElement>('ion-select-option');
export const IonSelectPopover = createReactComponent<JSX.IonSelectPopover & ReactProps, HTMLIonSelectPopoverElement>('ion-select-popover');
export const IonSkeletonText = createReactComponent<JSX.IonSkeletonText & ReactProps, HTMLIonSkeletonTextElement>('ion-skeleton-text');
export const IonSlide = createReactComponent<JSX.IonSlide & ReactProps, HTMLIonSlideElement>('ion-slide');
export const IonSlides = createReactComponent<JSX.IonSlides & ReactProps, HTMLIonSlidesElement>('ion-slides');
export const IonSpinner = createReactComponent<JSX.IonSpinner & ReactProps, HTMLIonSpinnerElement>('ion-spinner');
export const IonSplitPane = createReactComponent<JSX.IonSplitPane & ReactProps, HTMLIonSplitPaneElement>('ion-split-pane');
export const IonText = createReactComponent<JSX.IonText & ReactProps, HTMLIonTextElement>('ion-text');
export const IonTextarea = createReactComponent<JSX.IonTextarea & ReactProps, HTMLIonTextareaElement>('ion-textarea');
export const IonThumbnail = createReactComponent<JSX.IonThumbnail & ReactProps, HTMLIonThumbnailElement>('ion-thumbnail');
export const IonTitle = createReactComponent<JSX.IonTitle & ReactProps, HTMLIonTitleElement>('ion-title');
export const IonToggle = createReactComponent<JSX.IonToggle & ReactProps, HTMLIonToggleElement>('ion-toggle');
export const IonToolbar = createReactComponent<JSX.IonToolbar & ReactProps, HTMLIonToolbarElement>('ion-toolbar');
export const IonVirtualScroll = createReactComponent<JSX.IonVirtualScroll & ReactProps, HTMLIonVirtualScrollElement>('ion-virtual-scroll');

import { ViewModel } from "./scroll-to-index-model-initial";
import { RadListView, ListViewItemSnapMode } from "nativescript-pro-ui/listview";
import { EventData } from "tns-core-modules/data/observable";
import { ios as isIOS, android as isAndroid } from "tns-core-modules/application";

var viewModelContext: ViewModel;
let scrolled: boolean;
let scrollFunc = function(listView: RadListView) {
    listView.scrollToIndex(20, false, ListViewItemSnapMode.Start);
    scrolled = true;
}
let timer;

export function onPageLoaded(args) {
    var page = args.object;
    if (viewModelContext === undefined) {
        viewModelContext = new ViewModel();
    }

    page.bindingContext = viewModelContext;
    scrolled = false;
}

export function onDataPopulated(args: EventData) {
    var listView = args.object as RadListView;
    // Uses "setTimeout()" to only execute scrollToIndex when the RadListView on iOS has finished populating its native objects.
    if (isIOS && !scrolled) {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(scrollFunc, 10, listView);
    }

    if (isAndroid) {
        listView.scrollToIndex(20);
    }

}
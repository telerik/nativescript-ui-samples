
import { ViewModel } from "./selection-states-model";

export function onPageLoaded(args) {
    const page = args.object;

    page.bindingContext = new ViewModel();
}

// >> binding-context-area-series
import { CategoricalDataModel } from "../../data-models/categorical-data-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new CategoricalDataModel();
}
// << binding-context-area-series
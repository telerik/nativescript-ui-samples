import { PieDataModel } from "../data-models/pie-data-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new PieDataModel();
}

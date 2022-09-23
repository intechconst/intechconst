import type { LayoutLoad } from './$types';
import Routes from "$lib/assets/routes.json";

export const load: LayoutLoad = async () => {
    return {
        routes: Routes
    };
};

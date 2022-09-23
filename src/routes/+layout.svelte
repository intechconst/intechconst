<script lang="ts">
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import type { LayoutData } from "./$types";
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    export let data: LayoutData;

    let active = "";

    onMount(() => {
        page.subscribe(page => {
            const { pathname } = page.url;
            const route = pathname.split("/").filter(Boolean)[0] || "";
            active = "/" + route;
        });
    });
</script>
<Header routes={data.routes} {active} />
<main>
    <slot />
</main>
<Footer />
<style lang="scss">
    @import "../colors.scss";

    main {
        min-height: 100vh;
    }

    :global(a) {
        color: $accent;
    }

    :global(html) {
        font-size: 14px;
        @media (max-width: 880) {
            font-size: 9px;
        }
    }
</style>

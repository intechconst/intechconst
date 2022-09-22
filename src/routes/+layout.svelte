<script>
    import Footer from "./Footer.svelte";

</script>
<main>
    <slot />
</main>
<Footer />
<style lang="scss">
    main {
        min-height: 100vh;
    }
</style>

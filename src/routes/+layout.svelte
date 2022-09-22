<script>
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";

</script>
<Header />
<main>
    <slot />
</main>
<Footer />
<style lang="scss">
    main {
        min-height: 100vh;
    }
</style>

<script>
    import Container from "$lib/Container.svelte";

</script>
<svelte:head>
    <title>О нас</title>
</svelte:head>
<Container>
    <div class="content">
        <h2>О нас</h2>
    </div>
</Container>
<style lang="scss">
    @import "../../sizes.scss";

    .content {
        padding-top: $header-height + $spacing;
    }
</style>

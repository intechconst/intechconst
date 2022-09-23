<script>
    import Container from "$lib/Container.svelte";
    import FlexibleSpace from "$lib/FlexibleSpace.svelte";
</script>
<div>
    <FlexibleSpace />
    <Container style="height: unset;">
        <h2>Промтехстрой</h2>
        <p>Электромонтаж и выполнение общестроительных работ</p>
    </Container>
    <FlexibleSpace />
</div>
<style lang="scss">
    div {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    h2, p {
        width: 100%;
        text-align: center;
    }

    h2 {
        font-size: 5rem;

        @media (max-width: 880px) {
            font-size: 2rem;
        }
    }

    p {
        font-size: 1rem;
    }
</style>

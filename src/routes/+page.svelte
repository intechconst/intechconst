<script>
    import Container from "$lib/Container.svelte";
    import FlexibleSpace from "$lib/FlexibleSpace.svelte";
</script>
<div>
    <FlexibleSpace />
    <Container>
        <h1>Промтехстрой</h1>
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

    h1, p {
        width: 100%;
        text-align: center;
    }

    h1 {
        font-size: 5rem;
    }

    p {
        font-size: 1rem;
    }
</style>

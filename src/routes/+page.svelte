<script>
    import Container from "$lib/Container.svelte";
    import FlexibleSpace from "$lib/FlexibleSpace.svelte";
</script>
<Container style="height: unset;">
    <div>
        <h2>Промтехстрой</h2>
        <p>Электромонтаж и выполнение общестроительных работ</p>
        <a href="tel:+79995489722">+7 (999) 548 97-22</a>
    </div>
</Container>
<style lang="scss">
    div {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h2 {
        font-size: 5rem;

        @media (max-width: 880px) {
            font-size: 2rem;
        }
    }

    p {
        font-size: 1rem;
        text-align: center;
    }

    a {
        font-size: 1.2rem;
        transform: translateY(4rem);
    }
</style>

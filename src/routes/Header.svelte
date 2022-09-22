<script lang="ts">
    import FlexibleSpace from "$lib/FlexibleSpace.svelte";
    import Container from "$lib/Container.svelte";
    import Row from "$lib/Row.svelte";
    import { onMount } from "svelte";
    import Logo from "$lib/assets/logo.svg";

    let over = false;

    onMount(() => {
        window.addEventListener("scroll", () => {
            over = document.documentElement.scrollTop > 1;
        });
    })
</script>
<header class={over ? "over-content" : ""}>
    <Container style="height: fit-content;">
        <Row>
            <img class="logo" src={Logo} alt="Logo" />
        </Row>
    </Container>
</header>
<style lang="scss">
    @import "../sizes.scss";
    @import "../colors.scss";
    
    img.logo {
        height: calc($header-height - 1rem);
    }

    header {
        width: 100%;
        height: $header-height;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;

        border-bottom: none;
        background: $surface;

        transition: all 200ms ease;

        box-sizing: content-box;
    }

    header.over-content {
        border-bottom: solid 1px $contrast;
    }
</style>

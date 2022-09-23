<script lang="ts">
    import FlexibleSpace from "$lib/FlexibleSpace.svelte";
    import Container from "$lib/Container.svelte";
    import Row from "$lib/Row.svelte";
    import { onMount } from "svelte";
    import Logo from "$lib/assets/logo.svg";
    
    export let routes: { path: string, title: string }[] = [];
    export let active: string;

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
            <h1>
                <img class="logo" src={Logo} alt="Промтехстрой" />
            </h1>
            <FlexibleSpace />
            <nav>
                <Row>
                    {#each routes as route}
                        <a 
                            href={route.path}
                            class={route.path == active ? "active" : ""}>
                            {route.title}
                        </a>
                    {/each}
                </Row>
            </nav>
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

    nav {
        display: flex;
        align-items: center;

        a {
            margin-left: 1rem;
            text-decoration: none;
            color: $text;
            border-bottom: solid 2px transparent;

            transition: all 200ms ease;

            &:first-child {
                margin-left: 0;
            }

            &.active {
                color: $accent;
                border-color: $accent;
            }
        }
    }
</style>

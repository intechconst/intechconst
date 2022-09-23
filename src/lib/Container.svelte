<script lang="ts">
    export let style: string = "";
</script>
<div {style}>
    <slot />
</div>
<style lang="scss">
    div {
        max-width: 1100px;
        margin: 0 auto;
        width: 100%;
        height: 100%;

        @media (max-width: 1100px) {
            max-width: 880px;
        }

        @media (max-width: 880px) {
            max-width: unset;
            padding: 0 2rem;
        }
    }
</style>

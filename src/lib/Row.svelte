<script lang="ts">
    export let style: string = "";
</script>
<div {style}>
    <slot />
</div>
<style lang="scss">
    div {
        display: flex;
    }
</style>

<template>
    <section>
        <span class="error">
            <slot />
        </span>
    </section>
</template>

<style scoped>
    .error {
        color: red;
    }
</style>
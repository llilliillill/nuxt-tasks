<template>
    <button>
        <slot />
    </button>
</template>

<style scoped>
    button {
        padding: 7px 9px;
        border: 1px solid grey;
        color: grey;
        font-weight: bold;
        border-radius: 3px;
        background-color: white;
        cursor: pointer;
    }
</style>
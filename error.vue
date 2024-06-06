<template>
    <section>
        <h1>Error: возникла ошибка!</h1>
        <div class="message">
            <nuxt-link to="/">перейти на главную</nuxt-link>
        </div>
    </section>
</template>

<script lang="ts" setup>
    
</script>

<style scoped>
    h1 {
        margin: 15px 0;
        text-align: center;
        color: red;
    }

    .message {
        text-align: center;
    }
</style>
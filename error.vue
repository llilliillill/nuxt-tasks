<template>
    <section>
        <h1>Error: возникла ошибка!</h1>
        <div class="message">
            <NuxtLink to="/">
                перейти на главную
            </NuxtLink>
        </div>
    </section>
</template>

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
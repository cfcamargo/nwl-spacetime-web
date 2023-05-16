<template>
    <div>
        <h2>{{ store.getName }}</h2>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/store'

const store = useCounterStore()

</script>

<style scoped>

</style>
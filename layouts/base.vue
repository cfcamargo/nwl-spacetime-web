<template>
    <div class="w-full h-screen bg-gray-900 grid grid-cols-2">
        <section class="px-32 py-16 h-full flex flex-col justify-between">
            <div class="flex items-center gap-2">
                <user-circle-2 class="text-gray-400" :size="50"/>
                <p class="text-gray-400 font-light">Crie sua conta e salve <br/>suas memórias!</p>
            </div>

            <div class="flex flex-col gap-5">
                <img src="@/public/logo.svg" alt="NLW SpaceTime Logo">
                <div class="flex flex-col gap-1">
                    <h1 class="text-4xl font-sans font-bold text-gray-50">
                        Sua Cápsula do tempo
                    </h1>
                    <p class="text-gray-100">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
                </div>

                <NuxtLink to="create" class="bg-green-500 hover:bg-green-600 w-[214px] h-[34px] grid place-items-center text-gray-950 rounded-full font-alt font-bold">
                    Cadastrar Memória
                </NuxtLink>
            </div>

            <footer>
                <span class="text-gray-50 font-light text-xs">Feito pelo camargoDev 💜</span>
            </footer>
        </section>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { UserCircle2 } from 'lucide-vue-next';

</script>

<style scoped>

</style>
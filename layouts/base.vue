<template>
    <div class=" bg-gray-900 w-full min-h-screen grid grid-cols-2 mx-auto">
            <section class="py-16 h-full flex flex-col justify-between relative overflow-hidden border-r border-white/10 px-32">
                <div class="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 rounded-full blur-full z-0"/>
                <div class="absolute right-2 top-0 bottom-0 w-2 bg-stripes"/>

                <div class="flex items-center gap-2">
                    <user-circle-2 class="text-gray-400" :size="50"/>
                    <p class="text-gray-400 font-light">Crie sua conta e salve <br/>suas memórias!</p>
                </div>

                <div class="flex flex-col gap-5 max-w-[420px]">
                    <img src="@/public/logo.svg" alt="NLW SpaceTime Logo" class="w-full max-w-[160px]">
                    <div class="flex flex-col gap-1">
                        <h1 class="text-4xl font-sans font-bold text-gray-50">
                            Sua Cápsula do tempo
                        </h1>
                        <p class="text-gray-100 text-lg">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
                    </div>

                    <NuxtLink to="create" class="bg-green-500 hover:bg-green-600 w-[214px] h-[34px] grid place-items-center text-gray-950 rounded-full font-alt font-bold">
                        Cadastrar Memória
                    </NuxtLink>
                </div>

                <footer>
                    <span class="text-gray-50 font-light text-xs">Feito pelo camargoDev 💜</span>
                </footer>
            </section>
            <section class="">
                <slot />
            </section>
    </div>
</template>

<script setup lang="ts">
import { UserCircle2 } from 'lucide-vue-next';

</script>

<style scoped>

</style>
<script setup lang="ts">
import SideNav from '../components/SideNav.vue';
</script>

<template>
    <div class="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div class="w-full flex-none md:w-64">
            <SideNav />
        </div>
        <div class="flex-grow p-6 md:overflow-y-auto md:p-12">
            <slot />
        </div>
    </div>
</template>
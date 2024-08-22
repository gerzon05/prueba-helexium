<script setup lang="ts">
  import NavLinks from './NavLinks.vue';
  import Logout from '../assets/icons/logout.svg';
</script>

<template>
  <div class="flex h-full flex-col px-3 py-4 md:px-2">
    <Link class="mb-2 flex h-fit items-center rounded-md bg-gray-100 p-4" href="/">
    <h1 class='font-bold text-3xl'>Dashboard</h1>
    </Link>
    <div class="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
      <NavLinks />
      <div class="hidden h-auto w-full grow rounded-md bg-transparent md:block"></div>
      <button
        class="flex px-6 h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <img :src="Logout" alt='logo' />
        <div class="hidden md:block">Sign Out</div>
      </button>
    </div>
  </div>
</template>
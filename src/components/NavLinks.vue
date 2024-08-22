<script setup lang="ts">
  import users from '../assets/icons/user.svg';
  import product from '../assets/icons/product.svg';
  import invoices from '../assets/icons/invoices.svg';
    const links = [
      { name: 'Client', href: '/', icon: users },
      {
        name: 'Products',
        href: '/products',
        icon: product
      },
      { name: 'Invoices', href: '/invoices', icon: invoices },
  ];
</script>

<template>
    <RouterLink v-for='link in links' :to='link.href' :key='link.name' class='bg-gray-100 hover:bg-sky-100 hover:text-blue-600 rounded-md' activeClass="text-blue-600 bg-sky-100">
        <div class="flex px-6 h-[48px] grow items-center justify-center gap-2 bg-transparent p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
            <img :src="link.icon" alt='logo' />
            <p class="hidden md:block">{{ link.name }}</p>
        </div>
    </RouterLink>
</template>
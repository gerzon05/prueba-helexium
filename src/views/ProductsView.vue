<script setup lang="ts">
    import Table from '../components/TableProducts.vue';
    import { getProducts } from '../hooks/getmocks'
    const Products = getProducts()
</script>

<template>
    <Table title="Products" :values="Products" />
</template>
<script setup lang="ts">
    import Table from '../components/TableInvoices.vue';
    import { getinvoices } from '../hooks/getmocks'
    const Invoices = getinvoices()
</script>

<template>
    <Table title="Invoices" :values="Invoices" />
</template>
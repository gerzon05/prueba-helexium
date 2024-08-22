<script setup lang="ts">
    import Table from '../components/TableClient.vue';
    import { getClient } from '../hooks/getmocks'
    const client = getClient()
    const header = [
        { title: 'Name' },
        { title: 'Email' },
        { title: 'Phone' },
        { title: 'Address' }
    ]
</script>

<template>
    <Table title="Clients" :header='header' :values="client" />
</template>
<script setup lang="ts">
  interface product {
    id: number
    name: string
    price: number
    image: string
    stock: number
    description: string
  }
  const Props = defineProps<{
    title: string
    values: {
      id: string
      id_client: string
      name: string
      date: string
      amount: number
      status: string
      products: product[]
    }[]
  }>()
</script>

<template>
  <div class="w-full">
    <h1 class='mb-8 text-xl md:text-2xl font-semibold'>
      {{ Props.title }}
    </h1>
    <div class="mt-6 flow-root">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden rounded-md bg-gray-300 p-2 md:pt-0">
            <table class="min-w-full rounded-md text-gray-900 table">
              <thead class="rounded-md bg-gray-300 text-left text-sm font-normal">
                <tr>
                  <th scope="col" class="px-4 py-5 font-medium">
                    Name
                  </th>
                  <th scope="col" class="px-4 py-5 font-medium">
                    Products
                  </th>
                  <th scope="col" class="px-4 py-5 font-medium">
                    Data
                  </th>
                  <th scope="col" class="px-4 py-5 font-medium">
                    Amount
                  </th>
                  <th scope="col" class="px-4 py-5 font-medium">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y text-gray-900" v-for="invoices in Props.values" :key='invoices.name'>
                <tr key={invoices.id} :class="invoices.status === 'Pending' ? 'bg-[#FF6B6B]' : 'bg-[#4CAF50]'" class='group border-b border-gray-300' >
                  <td class="whitespace-nowrap  py-5 pl-4 pr-3 text-sm text-black">
                    <p>{{ invoices.name }}</p>
                  </td>
                  <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm text-black">
                    <div class="flex items-center gap-3 max-w-60 flex-wrap">
                      <p v-for='nameProduct in invoices.products' > - {{ nameProduct.name }}</p>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-4 py-5 text-sm">
                    {{ invoices.date }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-5 text-sm">
                    $ {{ invoices.amount }}
                  </td>
                  <td class="whitespace-nowrap px-4 py-5 text-sm">
                    {{ invoices.status }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
    const Props = defineProps<{
      title: string
        values: {
          id: number
          name: string
          price: number
          stock: number
          image: string
          description: string
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
                    <th scope="col" class="px-3 py-5 text-start font-medium" >
                      Image
                    </th>
                    <th scope="col" class="px-3 py-5 text-start font-medium" >
                      Name
                    </th>
                    <th scope="col" class="px-3 py-5 text-start font-medium" >
                      Price
                    </th>
                    <th scope="col" class="px-3 py-5 text-start font-medium" >
                      Stock
                    </th>
                    <th scope="col" class="px-3 py-5 text-start font-medium" >
                      Description
                    </th>
                  </tr>
                </thead>

                <tbody class="divide-y  text-gray-900" >
                    <tr v-for="product in Props.values"
                    :key='product.name' class="group bg-white">
                      <td class="whitespace-nowrap  py-5 px-3 text-sm text-black">
                        <img :src="product.image" :alt="product.description" class='size-10 object-fill object-center rounded-full' />
                      </td>
                      <td class="whitespace-nowrap py-5 px-3 text-sm font-semibold text-black">
                        <p>{{product.name}}</p>
                      </td>
                      <td class="whitespace-nowrap px-3 py-5 text-sm">
                        $ {{product.price}}
                      </td>
                      <td class="whitespace-nowrap px-3 py-5 text-sm">
                        {{product.stock}}
                      </td>
                      <td class="whitespace-nowrap px-3 py-5 text-sm">
                        {{product.description.slice(0, 50)}}...
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
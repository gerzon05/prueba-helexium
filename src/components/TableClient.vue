<script setup lang="ts">
    const Props = defineProps<{
      title: string
        values: {
            name: string
            email: string
            phone: string
            address: string
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
                      Email
                    </th>
                    <th scope="col" class="px-4 py-5 font-medium">
                      Phone
                    </th>
                    <th scope="col" class="px-4 py-5 font-medium">
                      Address
                    </th>
                  </tr>
                </thead>

                <tbody class="divide-y text-gray-900" v-for="client in Props.values"
                :key='client.name' >
                    <tr key={client.id} class="group border-b bg-white">
                      <td class="whitespace-nowrap py-5 px-4 pr-3 text-sm text-black">
                        <div class="flex items-center gap-3">
                          <p>{{client.name}}</p>
                        </div>
                      </td>
                      <td class="whitespace-nowrap px-4 py-5 text-sm">
                        {{client.email}}
                      </td>
                      <td class="whitespace-nowrap px-4 py-5 text-sm">
                        {{client.phone}}
                      </td>
                      <td class="whitespace-nowrap px-4 py-5 text-sm">
                        {{client.address}}
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
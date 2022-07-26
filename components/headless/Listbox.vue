<template>
    <div class="w-20">
        <Listbox v-model="selectedPerson">
            <div class="relative mt-1">
                <ListboxButton
                    class="relative w-full cursor-default rounded-lg bg-white dark:bg-LightDark py-2 pl-3 pr-4 text-left text-black dark:text-white shadow-md sm:text-sm">
                    <span class="block truncate opacity-100">{{ selectedPerson.name }}</span>
                    <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
                        <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                </ListboxButton>
                <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                    leave-to-class="opacity-100">
                    <ListboxOptions
                        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-LightDark py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <ListboxOption v-slot="{ active, selected }" v-for="person in people" :key="person.name"
                            :value="person" as="template">
                            <li :class="[
                                active ? 'bg-Hahugreen/3 text-primary' : 'text-gray-900 dark:text-white',
                                'relative cursor-default select-none py-2 pl-10 pr-4',
                            ]">
                                <span :class="[
                                    selected ? 'font-medium' : 'font-normal',
                                    'block truncate',
                                ]">{{ person.name }}</span>
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-lite">
                                    <img :src="person.img" class="h-5 w-5" aria-hidden="true" />
                                </span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
    </div>
</template>

<script setup>
import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid/index.js'

const people = [
    { name: 'አማ', img: '/images/ethiopia.png' },
    { name: 'Eng', img: '/images/united_kingdom.png' }
]
const selectedPerson = ref(people[0])
</script>

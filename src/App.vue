<script setup lang="ts">
// import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Overview', href: '/list' },
  { name: 'Add new 🌱', href: '/new' },
]

// const mobileMenuOpen = ref(false)
/* To enable once supabase setup is ready
import { supabase } from './supabase'
const session = ref()
onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })
  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
*/
</script>

<template>
  <main class="h-min-screen bg-gradient-to-r from-green-200 to-green-500">
    <header>
      <div class="">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div class="hidden lg:flex lg:gap-x-12">
            <a v-for="item in navigation" :key="item.name" :href="item.href"
              class="text-md font-semibold leading-6 text-gray-900 m-2">{{ item.name }}</a>
          </div>
        </nav>
      </div>
    </header>

    <RouterView />
    <footer>
      Proudly maintained by Ignotus 2022-ongoing
    </footer>
  </main>
</template>

<style scoped></style>

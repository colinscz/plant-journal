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
  <main>
    <header>
      <div class="flex items-center">
        <nav class="mx-auto justify-between lg:px-8" aria-label="Global">
          <div class="lg:gap-x-12">
            <a v-for="item in navigation" :key="item.name" :href="item.href"
              class="text-md font-semibold leading-6 text-white mx-2">{{ item.name }}</a>
          </div>
        </nav>
      </div>
    </header>

    <RouterView />
    <footer class="flex items-center">
      Proudly maintained by Ignotus 2022-ongoing
    </footer>
  </main>
</template>
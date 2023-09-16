<script setup lang="ts">
// import { onMounted, ref } from 'vue'
import { ILayout, ILayoutHeader, INav, INavbar, INavbarBrand, INavbarCollapsible } from '@inkline/inkline';
import { RouterView } from 'vue-router'

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
  <ILayout>
    <ILayoutHeader>
      <header>
        <div class="wrapper">
          <INavbar size="md">
            <INavbarBrand to="/">
              <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="20" height="20" />
            </INavbarBrand>
            <INavbarCollapsible>
              <INav>
                <INavItem to="/"> Home </INavItem>
                <INavItem to="/list"> Overview </INavItem>
                <INavItem to="/new"> Add new 🌱 </INavItem>
                <!-- <INavItem to="/blog"> Blog</INavItem> -->
                <INavItem to="/about"> About </INavItem>
                <!--                 <i-nav-item
                  ><i-select
                    v-model="$i18n.locale"
                    :options="$i18n.availableLocales"
                  ></i-select
                ></i-nav-item> -->
              </INav>
            </INavbarCollapsible>
          </INavbar>
        </div>
      </header>
    </ILayoutHeader>

    <i-layout-content>
      <RouterView />
    </i-layout-content>
    <i-layout-footer>
      Proudly maintained by Ignotus 2022-ongoing
    </i-layout-footer>
  </ILayout>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  margin: 0 auto 2rem;
}

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  /*   header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>

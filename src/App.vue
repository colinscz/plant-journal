<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <i-layout>
    <i-layout-header>
      <header>
        <div class="wrapper">
          <!-- <HelloWorld msg="You did it!" /> -->

          <i-navbar size="md">
            <i-navbar-brand to="/">
              <img
                alt="Vue logo"
                class="logo"
                src="@/assets/logo.svg"
                width="20"
                height="20"
              >
            </i-navbar-brand>
            <i-navbar-collapsible>
              <i-nav>
                <i-nav-item to="/">
                  Home
                </i-nav-item>
                <i-nav-item to="/list">
                  Overview
                </i-nav-item>
                <i-nav-item to="/new">
                  Add new 🌱
                </i-nav-item>
                <i-nav-item to="/about">
                  About
                </i-nav-item>
                <!--                 <i-nav-item
                  ><i-select
                    v-model="$i18n.locale"
                    :options="$i18n.availableLocales"
                  ></i-select
                ></i-nav-item> -->
              </i-nav>
            </i-navbar-collapsible>
          </i-navbar>
          <!--           <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/new">Add new plant</RouterLink>
          </nav> -->
        </div>
      </header>
    </i-layout-header>

    <i-layout-content>
      <RouterView />
    </i-layout-content>
  </i-layout>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
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

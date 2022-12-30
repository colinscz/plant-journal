<script setup lang="ts"></script>

<template>
  <main>
    <i-table border>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">#</th>
          <td>Alex</td>
          <td>Grozav</td>
          <td>@alexgrozav</td>
        </tr>
        <tr>
          <th scope="row">#</th>
          <td>John</td>
          <td>Doe</td>
          <td>@johndoe</td>
        </tr>
        <tr>
          <th scope="row">#</th>
          <td>Alice</td>
          <td>Doe</td>
          <td>@alicecooper</td>
        </tr>
      </tbody>
    </i-table>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .list {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
import { ITable } from '@inkline/inkline';
</script>

<template>
  <main>
    <ITable striped responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name of plant</th>
          <th>Location</th>
          <th>Next date to pour</th>
          <th>Type of plant</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            #
          </th>
          <td>Alex</td>
          <td>Grozav</td>
          <td>@alexgrozav</td>
          <td>@alexgrozav</td>
        </tr>
        <tr>
          <th scope="row">
            #
          </th>
          <td>John</td>
          <td>Doe</td>
          <td>@johndoe</td>
          <td>@johndoe</td>
        </tr>
        <tr>
          <th scope="row">
            #
          </th>
          <td>Alice</td>
          <td>Doe</td>
          <td>@alicecooper</td>
          <td>@alicecooper</td>
        </tr>
      </tbody>
    </ITable>
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

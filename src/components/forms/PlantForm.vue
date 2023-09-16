<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const description = ref('')
const type = ref('')
const substrat = ref('')
const minTemperature = ref('')
const maxTemperature = ref('')
const waterAmount = ref('')
const duengen = ref('')
const umtopfen = ref('')
const recentlyWatered = ref('')
const loading = false

const options = [
  { id: 1, label: 'Pflegeleichte Pflanze' },
  { id: 2, label: 'Pflanzen fürs Schlafzimmer' },
  { id: 3, label: 'Pflanzen für bessere Luft' },
]

const substratOptions = [
  { id: 1, label: 'Topfpflanzenerde' },
  { id: 2, label: 'Kakteenerde' },
  { id: 3, label: 'Blumenerde' },
]

const onSubmit = () => {
  /*   this.loading = true;

  setTimeout(() => {
    this.loading = false;
  }, 2000); */
}
</script>

<template>
  <i-form @submit="onSubmit">
    <i-form-group>
      <i-form-label>Name</i-form-label>
      <i-input v-model="name" placeholder="Type something.." />
    </i-form-group>

    <i-form-group>
      <i-form-label>Description</i-form-label>
      <i-textarea v-model="description" placeholder="Write a comment.." />
    </i-form-group>

    <i-form-group>
      <i-form-label>Type</i-form-label>
      <i-select v-model="type" :options="options" placeholder="Choose an option" />
    </i-form-group>

    <i-form-group>
      <i-form-label>Substrat</i-form-label>
      <i-select v-model="substrat" :options="substratOptions" placeholder="Choose an option" />
    </i-form-group>

    <i-form-group>
      <i-form-label>Temperature range</i-form-label>
      <i-number-input v-model="minTemperature" placeholder="Enter a number.." />
      <i-number-input v-model="maxTemperature" placeholder="Enter a number.." />
    </i-form-group>

    <i-form-group>
      <i-form-label>Amount of water (Giessen)</i-form-label>
      <i-checkbox-group v-model="waterAmount">
        <i-checkbox value="regularly">
          Regelmässig
        </i-checkbox>
        <i-checkbox value="often">
          2-3x per week
        </i-checkbox>
        <i-checkbox value="monthly">
          Monthly
        </i-checkbox>
        <i-checkbox value="rare">
          Rarely
        </i-checkbox>
      </i-checkbox-group>
    </i-form-group>

    <i-form-group>
      <i-form-label>Düngen</i-form-label>
      <i-radio-group v-model="duengen">
        <i-radio value="plantFertiliser">
          Topfplanzendünger
        </i-radio>
        <i-radio value="cactusFertiliser">
          Kakteendünger
        </i-radio>
        <i-radio value="fertiliser">
          Kein Dünger
        </i-radio>
      </i-radio-group>
    </i-form-group>

    <i-form-group>
      <i-form-label>Jährlich umtopfen?</i-form-label>
      <i-radio-group v-model="umtopfen">
        <i-radio value="yes">
          Ja
        </i-radio>
        <i-radio value="no">
          Nein
        </i-radio>
      </i-radio-group>
    </i-form-group>

    <i-form-group>
      <i-form-label>Has the plant been watered recently?</i-form-label>
      <i-checkbox v-model="recentlyWatered">
        Yes
      </i-checkbox>
    </i-form-group>

    <i-form-group>
      <i-button type="submit" :loading="loading">
        Submit
      </i-button>
    </i-form-group>
  </i-form>
</template>

<style scoped></style>

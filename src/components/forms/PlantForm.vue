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
  <FormKit type="form">
    <FormKit type="text" name="name" id="name" validation="required|not:Admin" label="Name"
      help="Enter your plant's full name" placeholder="“Scarlet Sword”" />

    <FormKit type="select" label="Type" name="type" id="type" placeholder="Select a type" :options="['Pflegeleichte Pflanze', 'Pflanzen fürs Schlafzimmer',
      'Pflanzen für bessere Luft'
    ]" />

    <FormKit type="select" label="Substrat" name="substrat" id="substrat" placeholder="Select a type" :options="[
      'Topfpflanzenerde',
      'Kakteenerde',
      'Blumenerde'
    ]" />

    <FormKit type="number" help="What temperature should the house be?" number="integer" label="Thermostat" name="minTemp"
      value="10" step="1" />

    <FormKit type="number" help="What temperature should the house be?" number="integer" label="Thermostat" name="maxTemp"
      value="30" step="1" />

    <FormKit type="select" label="Giesszyklus" name="" id="pourCycle" placeholder="Select a pourCycle" :options="[
      'Regelmässig',
      '2x pro Woche',
      'Monatlich',
      'Selten'
    ]" />

    <FormKit v-model="duengen" type="radio" label="Düngen?"
      :options="['Topfplanzendünger', 'Kakteendünger', 'Kein Dünger']" help="Was für Dünger braucht deine Pflanze?" />


    <FormKit v-model="umtopfen" type="radio" label="Jährlich umtopfen?" :options="['Ja', 'Nein']"
      help="Wann muss deine Pflanze umgetopft werden" />

    <FormKit v-model="recentlyWatered" type="radio" label="Has the plant been watered recently?" :options="['Ja', 'Nein']"
      help="Kürzlich gegossen?" />

  </FormKit>

  <!--     <IFormGroup>
      <IFormLabel>Description</IFormLabel>
      <ITextarea v-model="description" placeholder="Write a comment.." />
    </IFormGroup> -->
</template>

<style scoped></style>

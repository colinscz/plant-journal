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
  <IForm @submit="onSubmit">
    <IFormGroup>
      <IFormLabel>Name</IFormLabel>
      <i-input v-model="name" placeholder="Type something.." />
    </IFormGroup>

    <IFormGroup>
      <IFormLabel>Description</IFormLabel>
      <ITextarea v-model="description" placeholder="Write a comment.." />
    </IFormGroup>

    <IFormGroup>
      <IFormLabel>Type</IFormLabel>
      <ISelect v-model="type" :options="options" placeholder="Choose an option" />
    </IFormGroup>

    <IFormGroup>
      <IFormLabel>Substrat</IFormLabel>
      <ISelect v-model="substrat" :options="substratOptions" placeholder="Choose an option" />
    </IFormGroup>

    <IFormGroup>
      <IFormLabel>Temperature range</IFormLabel>
      <i-number-input v-model="minTemperature" placeholder="Enter a number.." />
      <i-number-input v-model="maxTemperature" placeholder="Enter a number.." />
    </IFormGroup>

    <IFormGroup>
      <IFormLabel>Amount of water (Giessen)</IFormLabel>
      <ICheckboxGroup v-model="waterAmount">
        <ICheckbox value="regularly">
          Regelmässig
        </ICheckbox>
        <ICheckbox value="often">
          2-3x per week
        </ICheckbox>
        <ICheckbox value="monthly">
          Monthly
        </ICheckbox>
        <ICheckbox value="rare">
          Rarely
        </ICheckbox>
      </ICheckboxGroup>
    </IFormGroup>

    <IFormGroup>
      <IFormLabel>Düngen</IFormLabel>
      <IRadioGroup v-model="duengen">
        <IRadio value="plantFertiliser">
          Topfplanzendünger
        </IRadio>
        <IRadio value="cactusFertiliser">
          Kakteendünger
        </IRadio>
        <IRadio value="fertiliser">
          Kein Dünger
        </IRadio>
      </IRadioGroup>
    </IFormGroup>

    <IFormGroup>
      <IFormLabel>Jährlich umtopfen?</IFormLabel>
      <IRadioGroup v-model="umtopfen">
        <IRadio value="yes">
          Ja
        </IRadio>
        <IRadio value="no">
          Nein
        </IRadio>
      </IRadioGroup>
    </IFormGroup>

    <IFormGroup>
      <IFormLabel>Has the plant been watered recently?</IFormLabel>
      <ICheckbox v-model="recentlyWatered">
        Yes
      </ICheckbox>
    </IFormGroup>

    <IFormGroup>
      <IButton type="submit" :loading="loading">
        Submit
      </IButton>
    </IFormGroup>
  </IForm>
</template>

<style scoped></style>

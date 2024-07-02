<template>
  <div>
    <h2>Bearbeitungssicht Formular</h2>
    <p><strong>ID:</strong> {{ id }}</p>
    <div v-if="formData">
      <p><strong>Fallnummer:</strong> {{ formData.fallnummer }}</p>
      <p><strong>Name:</strong> {{ formData.nachname }}, {{ formData.vorname }}</p>
      <!-- Add more fields as needed -->
    </div>
    <div v-else>
      <p>Keine Daten verfügbar.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Eingabeformular',
  props: {
    id: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    formData() {
      return this.data;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>

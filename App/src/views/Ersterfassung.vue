<template>
  <div class="container">
    <img id="background" src="@/assets/landesverwaltungsamt.jpeg" alt="background">
    <h1 id="title">Ordnungswidrigkeit nach §121 Abs.1 Nr.6 SGB XI</h1>
    <h2 id="mode">* Ersterfassung *</h2>
    <Eingabeformular @submit="handleSubmit"/>
    <p v-if="responseMessage">{{ responseMessage }}</p>
  </div>
</template>

<script setup>
import Eingabeformular from '../components/Eingabeformular.vue';
import api from '@/services/api';
</script>

<script>
export default {
  data() {
    return {
      responseMessage: '',
      isSubmitting: false // Add this flag
    }
  },
  methods: {
    async handleSubmit(formData) {
      if (this.isSubmitting) {
        return; // Prevent multiple submissions
      }

      this.isSubmitting = true; // Set the flag to true

      try {
        const response = await api.createOffense(formData);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        this.responseMessage = result.message;
        this.isSubmitting = false; // Reset the flag after successful submission

        return result;
      } catch (error) {
        alert('Error: ' + error.message);
        this.isSubmitting = false; // Reset the flag in case of an error
      }
    }
  }
}
</script>

<style scoped>
#background {
  height: 100%;
  width: 100%;
  z-index: -1;
}

#title {
  font-size: 30px;
  text-align: center;
}

#mode {
  color: rgb(222, 38, 38);
  text-align: center;
  margin-bottom: -0.5em;
}
</style>
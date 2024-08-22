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
import Eingabeformular from '../components/Eingabeformular.vue'
</script>

<script>
export default {
  data() {
    return {
      responseMessage: '',
      isSubmitting: false
    }
  },
  methods: {
    async handleSubmit(formData) {
      if (this.isSubmitting) return
      this.isSubmitting = true

      try {

        const response = await fetch('http://localhost:5000/api/offense', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        this.responseMessage = result.message
        this.isSubmitting = false

        return result
      } catch (error) {
        alert('Error: ' + error.message)
        this.isSubmitting = false
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

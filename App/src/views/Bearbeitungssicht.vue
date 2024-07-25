<template>
  <div id="container">
    <img id="background" src="@/assets/landesverwaltungsamt.jpeg" alt="background">
    <h1 id="title">Ordnungswidrigkeit nach §121 Abs.1 Nr.6 SGB XI</h1>
    <h2 id="mode"> * Bearbeitungsmodus *</h2>
    <Eingabeformular :initialData="formData" @submit="handleSubmit"/>
    <p id="response" style="text-align: center; font-weight: bold" v-if="responseMessage">{{ responseMessage }}</p>
  </div>
</template>

<script setup>
import Eingabeformular from '../components/Eingabeformular.vue';
</script>

<script>
export default {
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
  data() {
    return {
      responseMessage: '',
      isSubmitting: false,
    }
  },
  methods: {
    async handleSubmit(formData) {
      if (this.isSubmitting) return
      this.isSubmitting = true

      try {
        // new data including recordId and rowVersion
        const updatedFormData = { ...formData, recordId: this.data.recordId, rowVersion: this.data.rowVersion };

        const url = `http://localhost:5000/api/offense/${this.data.recordId}`
        
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedFormData) 
        })
        
        if (!response.ok) {
          if (response.status === 409) {
            throw new Error('Diese Daten wurden bereits geändert. Bitte laden Sie die Seite neu.')
          }
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        this.responseMessage = result.message
        return result
      } catch (error) {
        alert('Error: ' + error.message)
      } finally {
        this.isSubmitting = false
      }
    }
  },
  computed: {
    formData() {
      return this.data
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

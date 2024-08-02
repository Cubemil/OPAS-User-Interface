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
import api from '@/services/api';
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

        const result = await api.updateOffense(this.data.recordId, updatedFormData);

        if (!result.data) {
          throw new Error('Unexpected response from server')
        }

        this.responseMessage = result.data.message
        return result.data
      } catch (error) {
        if (error.response && error.response.status === 409) {
          alert('Diese Daten wurden bereits geändert. Bitte laden Sie die Seite neu.')
        } else {
          alert('Error: ' + error.message)
        }
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
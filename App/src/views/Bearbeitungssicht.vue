<template>
  <div id="container">
    <img id="background" src="@/assets/landesverwaltungsamt.jpeg" alt="background">
    <h1 id="title">Ordnungswidrigkeit nach §121 Abs.1 Nr.6 SGB XI</h1>
    <h2 id="mode"> * Bearbeitungsmodus *</h2>
    <Eingabeformular :initialData="formData" @submit="handleSubmit"/>
    <p v-if="responseMessage">{{ responseMessage }}</p>
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
        console.log('recordId: ', this.data.recordId);
        console.log('rowVersion: ', this.data.rowVersion);
        console.log('updatedFormData: ', updatedFormData);

        const url = `http://localhost:5000/api/offense/${this.data.recordId}`
        console.log('Sending PUT request to URL: ', url)
        console.log('updatedFormData: ', updatedFormData)
        
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedFormData) 
        })
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        this.responseMessage = result.message
        console.log('Response: ', result)

        return result
      } catch (error) {
        console.error('Error:', error.message)
        alert('Error: ' + error.message)
      } finally {
        this.isSubmitting = false
      }
    }
  },
  mounted() {
    console.log('Data: ', this.data)
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

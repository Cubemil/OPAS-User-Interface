<template>
  <div class="input-form">
    <Navbar/>
    <form @submit.prevent="handleSubmit">
      <h2>Eingabeformular für die Erfassung einer Ordnungswidrigkeit</h2>
      <h5>(mit * markierte Felder sind Pflichtfelder)</h5>

      <br>
      <p>Formelle Angaben: </p>

      <label>* Aktenzeichen:</label>
      <input type="text" required v-model="aktenzeichen" placeholder="Bitte eingeben">

      <br>
      <p>Angaben zur Person:</p>

      <label>Anrede:</label>
      <input type="text" required v-model="anrede" placeholder="Bitte eingeben">

      <label>* Vorname:</label>
      <input type="text" required v-model="vorname" placeholder="Bitte eingeben">

      <label>* Nachname:</label>
      <input type="text" required v-model="nachname" placeholder="Bitte eingeben">

      <label>Titel:</label>
      <input type="text" v-model="titel" placeholder="(optional)">

      <label>* Geburtsdatum:</label>
      <input type="date" required v-model="geburtsdatum" placeholder="Bitte eingeben">

      <label>* PLZ: </label>
      <input type="text" required v-model="plz" placeholder="Bitte eingeben">

      <label>* Wohnort:</label>
      <input type="text" required v-model="wohnort" placeholder="Bitte eingeben">

      <label>* Straße: </label>
      <input type="text" required v-model="str" placeholder="Bitte eingeben">

      <label>* Hausnummer: </label>
      <input type="text" required v-model="hausnummer" placeholder="Bitte eingeben">

      <br>
      <p>Angaben zur Versicherung:</p>
      <label>* Versicherungsnummer:</label>
      <input type="text" required v-model="versicherungsnummer" placeholder="Bitte eingeben">

      <label>* Name der Krankenversicherung:</label>
      <input type="text" required v-model="krankenversicherungsname" placeholder="Bitte eingeben">

      <label>* Vertragsunternehmensnummer:</label>
      <input type="text" required v-model="vertragsunternehmensnummer" placeholder="Bitte eingeben">

      <br>
      <p>Beschreibung des Vorfalls:</p>
      <input id="beschreibung" type="text" required v-model="beschreibung" placeholder="Bitte eingeben">

      <div class="submit">
        <button id="submit_button">Absenden</button>
        <p id="submit_area"></p>
      </div>
    </form>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/default/Navbar.vue";
import Footer from "@/components/default/Footer.vue";

export default {
  name: 'CaseOverview',
  components: {Footer, Navbar},
  data() {
    return {
      aktenzeichen: '',
      anrede: '',
      vorname: '',
      nachname: '',
      titel: '',
      geburtsdatum: '',
      plz: '',
      wohnort: '',
      str: '',
      hausnummer: '',
      versicherungsnummer: '',
      krankenversicherungsname: '',
      vertragsunternehmensnummer: '',
      beschreibung: ''
    };
  },
  methods: {
    async handleSubmit() {
      const formData = {
        aktenzeichen: this.aktenzeichen,
        anrede: this.anrede,
        vorname: this.vorname,
        nachname: this.nachname,
        titel: this.titel,
        geburtsdatum: this.geburtsdatum,
        plz: this.plz,
        wohnort: this.wohnort,
        str: this.str,
        hausnummer: this.hausnummer,
        versicherungsnummer: this.versicherungsnummer,
        krankenversicherungsname: this.krankenversicherungsname,
        vertragsunternehmensnummer: this.vertragsunternehmensnummer,
        beschreibung: this.beschreibung
      };

      try {
        const response = await fetch('http://localhost:5000/api/offense', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // writes response at the end of the form
        const result = await response.json();
        const submitArea = document.getElementById('submit_area');
        submitArea.textContent += result.message;

        return result;
      } catch (error) {
        alert('Error: ' + error.message);
      }
    }
  }
};
</script>

<style>
form {
  max-width: 820px;
  background: white;
  text-align: left;
  margin: auto;
  padding: 40px;
  border-radius: 10px;
}

label {
  display: inline-block;
  margin: 20px 5px;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  widows: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

.submit {
  text-align: center;
}

#submit_button {
  background: #404040;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: #fdfdfd;
  border-radius: 20px;
}

#submit_button:hover {
  background-color: #4e4e4e;
}

#submit_button:active {
  background-color: #303030;
}
</style>

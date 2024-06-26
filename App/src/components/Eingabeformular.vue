<template>
  <div class="container">
    <div class="input-form">
      <form @submit.prevent="handleSubmit">
        <h2 id="title">Ordnungswidrigkeit nach §121 Abs.1 Nr.6 SGB XI</h2>
        <h4 id="description">(mit * markierte Felder sind Pflichtfelder)</h4>

        <table class="input-fields">
          <tr>
            <th>Formelle Angaben</th>
            <th>Angaben zur beschuldigten Person</th>
            <th>Angaben zur Versicherung</th>
            <th>Angaben zum Tatbestand § 51 Abs.1 Satz 2 SGB XI</th>
          </tr>
          <tr>
            <td>
              <label for="aktenzeichen">Aktenzeichen *</label>
              <input type="text" id="aktenzeichen" required v-model="aktenzeichen" placeholder="Bitte eingeben">
            </td>
            <td>
              <label for="anrede">Anrede *</label>
              <input type="text" id="anrede" required v-model="anrede" placeholder="Bitte eingeben">
              <label for="titel">Titel (optional)</label>
              <input type="text" id="titel" v-model="titel" placeholder="Bitte eingeben">
              <label for="vorname">Vorname *</label>
              <input type="text" id="vorname" required v-model="vorname" placeholder="Bitte eingeben">
              <label for="nachname">Nachname *</label>
              <input type="text" id="nachname" required v-model="nachname" placeholder="Bitte eingeben">
              <label for="geburtsdatum">Geburtsdatum *</label>
              <input type="date" id="geburtsdatum" required v-model="geburtsdatum" placeholder="Bitte eingeben">
              <label for="str">Straße *</label>
              <input type="text" id="str" required v-model="str" placeholder="Bitte eingeben">
              <label for="hausnummer">Hausnummer *</label>
              <input type="text" id="hausnummer" required v-model="hausnummer" placeholder="Bitte eingeben">
              <label for="plz">PLZ *</label>
              <input type="text" id="plz" required v-model="plz" placeholder="Bitte eingeben">
              <label for="wohnort">Wohnort *</label>
              <input type="text" id="wohnort" required v-model="wohnort" placeholder="Bitte eingeben">
            </td>
            <td>
              <label for="versicherungsunternehmensnummer">VU-Nr. *</label>
              <input type="text" id="versicherungsunternehmensnummer" required v-model="versicherungsunternehmensnummer"
                     placeholder="Bitte eingeben">
              <label for="krankenversicherung">Krankenversicherung *</label>
              <input type="text" id="krankenversicherung" required v-model="krankenversicherung"
                     placeholder="Bitte eingeben">
              <label for="versicherungsnummer">Versicherungsnummer *</label>
              <input type="text" id="versicherungsnummer" required v-model="versicherungsnummer"
                     placeholder="Bitte eingeben">
            </td>
            <td>
              <label for="aufforderungsdatum">Aufforderungsdatum *</label>
              <span v-if="errorMessages.aufforderungsdatum" class="error-message">{{
                  errorMessages.aufforderungsdatum
                }}</span>
              <input type="date" id="aufforderungsdatum" v-model="aufforderungsdatum" @change="validateDates"
                     :class="{ 'error-border': errorMessages.aufforderungsdatum }">
              <label for="startdatum">Beginn Rückstand (Startdatum) *</label>
              <span v-if="errorMessages.startdatum" class="error-message">{{ errorMessages.startdatum }}</span>
              <input type="date" id="startdatum" v-model="startdatum" @change="validateDates"
                     :class="{ 'error-border': errorMessages.startdatum }">
              <label for="verzugBis">Verzug bis</label>
              <div class="readonly-field" id="verzugBis">{{ calculateVerzugBis }}</div>
              <label for="verzugsende">Verzugsende *</label>
              <span v-if="errorMessages.verzugsende" class="error-message">{{ errorMessages.verzugsende }}</span>
              <input type="date" id="verzugsende" v-model="verzugsende" @change="validateDates"
                     :class="{ 'error-border': errorMessages.verzugsende }">
              <label for="beitragsrueckstand">Beitragsrückstand *</label>
              <input type="number" id="beitragsrueckstand" v-model="beitragsrueckstand" placeholder="Bitte eingeben">
              <label for="gesamtsollbetrag">Gesamtsollbetrag</label>
              <div class="readonly-field" id="gesamtsollbetrag">{{ calculateGesamtsollbetrag }} €</div>
              <label for="verjaehrungsfrist">Verjährungsfrist</label>
              <div class="readonly-field" id="verjaehrungsfrist">{{ calculateVerjaehrungsfrist }}</div>
            </td>
          </tr>
        </table>

        <div class="submit-and-response">
          <button id="submit_button" :disabled="hasErrors">Absenden</button>
          <p id="response">{{ responseMessage }}</p>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Eingabeformular',
  data() {
    return {
      aktenzeichen: '',
      anrede: '',
      vorname: '',
      nachname: '',
      titel: '',
      geburtsdatum: '',
      str: '',
      hausnummer: '',
      plz: '',
      wohnort: '',
      versicherungsunternehmensnummer: '',
      versicherungsnummer: '',
      krankenversicherung: '',
      aufforderungsdatum: '',
      startdatum: '',
      verzugsende: '',
      beitragsrueckstand: '',
      gesamtsollbetrag: '',
      verjaehrungsfrist: '',
      responseMessage: '',
      errorMessages: {}
    }
  },
  computed: {
    calculateVerzugBis() {
      if (this.startdatum) {
        let start = new Date(this.startdatum);
        start.setMonth(start.getMonth() + 6);
        start.setDate(start.getDate());

        // Format the date to DD.MM.YYYY
        let day = start.getDate().toString().padStart(2, '0');
        let month = (start.getMonth() + 1).toString().padStart(2, '0');
        let year = start.getFullYear();

        return `${day}.${month}.${year}`;
      }
      return 'dd.mm.yyyy';
    },
    calculateVerjaehrungsfrist() {
      if (this.verzugsende) {
        let ende = new Date(this.verzugsende);
        ende.setFullYear(ende.getFullYear() + 4);

        // Format the date to DD.MM.YYYY
        let day = ende.getDate().toString().padStart(2, '0');
        let month = (ende.getMonth() + 1).toString().padStart(2, '0');
        let year = ende.getFullYear();

        return `${day}.${month}.${year}`;
      }
      return 'dd.mm.yyyy';
    },
    calculateGesamtsollbetrag() {
      if (this.beitragsrueckstand) {
        return this.beitragsrueckstand * 5;
      }
      return '0';
    },
    hasErrors() {
      return Object.keys(this.errorMessages).length > 0;
    }
  },
  methods: {
    validateDates() {
      this.errorMessages = {};
      if (this.aufforderungsdatum && new Date(this.aufforderungsdatum) > new Date()) {
        this.errorMessages.aufforderungsdatum = 'Das Aufforderungsdatum muss in der Vergangenheit liegen.';
      }
      if (this.startdatum && new Date(this.startdatum) > new Date()) {
        this.errorMessages.startdatum = 'Das Startdatum muss in der Vergangenheit liegen.';
      }
      if (this.verzugsende && new Date(this.verzugsende) > new Date()) {
        this.errorMessages.verzugsende = 'Das Verzugsende muss in der Vergangenheit liegen.';
      }
    },
    async handleSubmit() {
      this.validateDates();
      if (Object.keys(this.errorMessages).length > 0) return;

      const formData = {
        aktenzeichen: this.aktenzeichen,
        anrede: this.anrede,
        titel: this.titel,
        vorname: this.vorname,
        nachname: this.nachname,
        geburtsdatum: this.geburtsdatum,
        str: this.str,
        hausnummer: this.hausnummer,
        plz: this.plz,
        wohnort: this.wohnort,
        versicherungsunternehmensnummer: this.versicherungsunternehmensnummer,
        krankenversicherung: this.krankenversicherung,
        versicherungsnummer: this.versicherungsnummer,
        aufforderungsdatum: this.aufforderungsdatum,
        startdatum: this.startdatum,
        verzugBis: this.calculateVerzugBis,
        verzugsende: this.verzugsende,
        beitragsrueckstand: this.beitragsrueckstand,
        gesamtsollbetrag: this.calculateGesamtsollbetrag,
        verjaehrungsfrist: this.calculateVerjaehrungsfrist
      }

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

        const result = await response.json();
        this.responseMessage = result.message;

        return result;
      } catch (error) {
        alert('Error: ' + error.message);
      }
    }
  }
}
</script>

<style scoped>
.container {
  background: #fdfdfd;
  width: 100%;
  min-height: 520px;
}

.input-form {
  padding: 1% 6%;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.input-fields, th, td {
  text-align: left;
  //border: 1px solid;
}

th, td {
  padding-top: 0;
  padding-bottom: 16px;
  padding-right: 16px;
}

th {
  vertical-align: top;
}

td {
  vertical-align: top;
}

form {
  background: #fdfdfd;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: normal;
}

input, .readonly-field {
  display: block;
  padding: 10px 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 1px solid #404040;
  width: 100%;
  font-size: 16px;
}

input[type="date"] {
  font-family: Arial, Helvetica, sans-serif;
  color: grey;
}

.readonly-field {
  background: #f1f1f1;
  color: gray;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: -15px;
  margin-bottom: 15px;
}

.error-border {
  border-color: red !important;
}

.submit-and-response {
  text-align: center;
  padding-top: 3%;
}

#submit_button {
  background: #404040;
  font-size: 20px;
  padding: 1% 3%;
  color: #fdfdfd;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

#submit_button:disabled {
  background: grey;
  cursor: not-allowed;
}

#submit_button:hover:enabled {
  background: #E8C325;
}

@media only screen and (max-width: 480px) {
  .container {
    font-size: 32px;
  }

  #description {
    font-size: 20px;
  }

  #submit_button {
    font-size: 16px;
    padding: 2% 4%;
  }

  th, td {
    display: inline-block;
  }
}
</style>

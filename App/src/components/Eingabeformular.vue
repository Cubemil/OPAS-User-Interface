<template>
  <div class="container">
    <div class="input-form">
      <form @submit.prevent="handleSubmit">

        <h2 id="title">Ordnungswidrigkeit nach §121 Abs.1 Nr.6 SGB XI</h2>

        <table class="formelle-angaben">
          <tr>
            <th>Formelle Angaben</th>
          </tr>
          <tr>
            <td>
              <input type="text" id="fallnummer" required v-model="fallnummer" placeholder="Fallnummer*" size="">
            </td>
          </tr>
        </table>

        <table class="angaben-zur-beschuldigten-person">
          <tr>
            <th colspan="3">Angaben zur beschuldigten Person</th>
          </tr>
          <tr>
            <td><input type="text" id="geschlecht" required v-model="geschlecht" placeholder="Geschlecht*"
                       maxlength="8"></td>
            <td><input type="text" id="titel" v-model="titel" placeholder="Titel"></td>
          </tr>
          <tr>
            <td><input type="text" id="vorname" required v-model="vorname" placeholder="Vorname*"></td>
            <td><input type="text" id="nachname" required v-model="nachname" placeholder="Nachname*"></td>
            <td><input type="text" id="geburtsdatum" required v-model="geburtsdatum"
                       placeholder="Geburtsdatum*" maxlength="10"></td>
          </tr>
          <tr>
            <td colspan="2"><input type="text" id="str" required v-model="str" placeholder="Straße*"></td>
            <td><input type="text" id="hausnummer" required v-model="hausnummer" placeholder="Hausnummer*"></td>
          </tr>
          <tr>
            <td><input type="text" id="plz" required v-model="plz" placeholder="PLZ*"></td>
            <td colspan="2"><input type="text" id="wohnort" required v-model="wohnort" placeholder="Wohnort*"></td>
          </tr>
          <tr>
            <td><input type="text" id="geburtsort" required v-model="geburtsort" placeholder="Geburtsort*"></td>
            <td colspan="2"><input type="text" id="ortsteil" required v-model="ortsteil" placeholder="Ortsteil"></td>
          </tr>
        </table>

        <table class="angaben-zur-versicherung">
          <tr>
            <th colspan="2">Angaben zur Versicherung</th>
          </tr>
          <tr>
            <td><input type="text" id="vu-nr" required v-model="versicherungsunternehmensnummer"
                       placeholder="VU-Nr.*"></td>
            <td><input type="text" id="krankenversicherung" required v-model="krankenversicherung"
                       placeholder="Krankenversicherung*"></td>
          </tr>
          <tr>
            <td><input type="text" id="versicherungsnummer" required v-model="versicherungsnummer"
                       placeholder="Versicherungsnummer*"></td>
          </tr>
        </table>

        <table class="angaben-zum-tatbestand">
          <tr>
            <th colspan="2">Angaben zum Tatbestand § 51 Abs.1 Satz 2 SGB XI</th>
          </tr>
          <tr>
            <td>
              <span v-if="errorMessages.aufforderungsdatum" class="error-message">{{
                  errorMessages.aufforderungsdatum
                }}</span>
              <input type="text" id="aufforderungsdatum" v-model="aufforderungsdatum" @change="validateDates"
                     :class="{ 'error-border': errorMessages.aufforderungsdatum }"
                     placeholder="Aufforderungsdatum*"></td>
            <td><span v-if="errorMessages.startdatum" class="error-message">{{ errorMessages.startdatum }}</span>
              <input type="text" id="startdatum" v-model="startdatum" @change="validateDates"
                     :class="{ 'error-border': errorMessages.startdatum }" placeholder="Beginn Rückstand*">
            </td>
          </tr>
          <tr>
            <td><input type="text" id="verzugBis" class="readonly-field" v-model="verzugbis"
                       :class="{ 'error-border': errorMessages.verzugbis }" placeholder="Verzug bis" readonly>
            </td>
            <td><span v-if="errorMessages.verzugsende" class="error-message">{{ errorMessages.verzugsende }}</span>
              <input type="text" id="verzugsende" v-model="verzugsende" @change="validateDates"
                     :class="{ 'error-border': errorMessages.verzugsende }" placeholder="Verzugsende*">
            </td>
          </tr>
          <tr>
            <td><input type="number" min="0" id="beitragsrueckstand" v-model="beitragsrueckstand"
                       placeholder="Beitragsrückstand*"></td>
            <td><input type="number" min="0" id="gesamtsollbetrag" v-model="gesamtsollbetrag"
                       placeholder="Gesamtsollbetrag*"></td>
          </tr>
        </table>

        <table class="weitere-angaben">
          <tr>
            <th>Weitere Angaben</th>
          </tr>
          <tr>
            <td>
              <textarea type="text" id="notizen" placeholder="Notizen"></textarea>
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
      fallnummer: '',
      geschlecht: '',
      vorname: '',
      nachname: '',
      titel: '',
      geburtsdatum: '',
      str: '',
      hausnummer: '',
      plz: '',
      wohnort: '',
      geburtsort: '',
      ortsteil: '',
      versicherungsunternehmensnummer: '',
      versicherungsnummer: '',
      krankenversicherung: '',
      aufforderungsdatum: '',
      startdatum: '',
      verzugsende: '',
      verzugbis: '',
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
        start.setMonth(start.getMonth() + 5);
        start.setDate(start.getDate());

        // Format the date to DD.MM.YYYY
        let day = start.getDate().toString().padStart(2, '0');
        let month = (start.getMonth() + 1).toString().padStart(2, '0');
        let year = start.getFullYear();

        return `${day}.${month}.${year}`;
      }
      return 'dd.mm.yyyy';
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

#title {
  margin-bottom: 34px;
}

.input-form {
  padding: 1% 6%;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  display: flex;
  justify-content: center;
}

table {
  margin-bottom: 18px;
  width: 100%;
}

th, td {
  /* border: 1px solid #292929; */
  text-align: left;
  vertical-align: top;
  padding-right: 10px;
  padding-top: 10px;
}

form {
  background: #fdfdfd;
}

input, .readonly-field {
  display: block;
  padding: 6px 10px;
  box-sizing: border-box;
  border: 1px solid #404040;
  width: 100%;
  font-size: 16px;
}

#notizen {
  width: calc(100% - 20px);
  height: 125px;
  resize: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  padding: 6px 10px;
  border: 1px solid #404040;
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

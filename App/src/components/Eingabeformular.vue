<template>
  <div id="container">
    <div id="input-form">
      <form @submit.prevent="handleSubmit">

        <h2 id="title">Ordnungswidrigkeit nach §121 Abs.1 Nr.6 SGB XI</h2>

        <table id="formal-table">
          <tr>
            <th>Formelle Angaben</th>
          </tr>
          <tr>
            <td>
              <label for="fallnummer" class="field-label">* Fallnummer</label>
              <input type="text" id="fallnummer" required v-model="fallnummer" placeholder="Fallnummer">
            </td>
          </tr>
        </table>

        <table id="person-table">
          <tr>
            <th colspan="3">Angaben zur beschuldigten Person</th>
          </tr>
          <tr>
            <td>
              <label for="geschlecht" class="field-label">* Geschlecht</label>
              <input type="text" id="geschlecht" required v-model="geschlecht" placeholder="Geschlecht" maxlength="8">
            </td>
            <td>
              <label for="titel" class="field-label">Titel</label>
              <input type="text" id="titel" v-model="titel" placeholder="Titel">
            </td>
          </tr>
          <tr>
            <td>
              <label for="vorname" class="field-label">* Vorname</label>
              <input type="text" id="vorname" required v-model="vorname" placeholder="Vorname">
            </td>
            <td>
              <label for="nachname" class="field-label">* Nachname</label>
              <input type="text" id="nachname" required v-model="nachname" placeholder="Nachname">
            </td>
            <td>
              <label for="geburtsdatum" class="field-label">* Geburtsdatum</label>
              <input type="date" id="geburtsdatum" required v-model="geburtsdatum" maxlength="10">
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <label for="str" class="field-label">* Straße</label>
              <input type="text" id="str" required v-model="str" placeholder="Straße">
            </td>
            <td>
              <label for="hausnummer" class="field-label">* Hausnummer</label>
              <input type="text" id="hausnummer" required v-model="hausnummer" placeholder="Hausnummer">
            </td>
          </tr>
          <tr>
            <td>
              <label for="plz" class="field-label">* PLZ</label>
              <input type="text" id="plz" required v-model="plz" placeholder="PLZ">
            </td>
            <td colspan="2">
              <label for="wohnort" class="field-label">* Wohnort</label>
              <input type="text" id="wohnort" required v-model="wohnort" placeholder="Wohnort">
            </td>
          </tr>
          <tr>
            <td>
              <label for="geburtsort" class="field-label">* Geburtsort</label>
              <input type="text" id="geburtsort" required v-model="geburtsort" placeholder="Geburtsort">
            </td>
            <td colspan="2">
              <label for="ortsteil" class="field-label">Ortsteil</label>
              <input type="text" id="ortsteil" required v-model="ortsteil" placeholder="Ortsteil">
            </td>
          </tr>
        </table>

        <table class="insurance-table">
          <tr>
            <th colspan="2">Angaben zur Versicherung</th>
          </tr>
          <tr>
            <td>
              <label for="vu-nr" class="field-label">* VU-Nr.</label>
              <input type="text" id="vu-nr" required v-model="versicherungsunternehmensnummer" placeholder="VU-Nr.">
            </td>
            <td>
              <label for="krankenversicherung" class="field-label">* Krankenversicherung</label>
              <input type="text" id="krankenversicherung" required v-model="krankenversicherung" placeholder="Krankenversicherung">
            </td>
          </tr>
          <tr>
            <td>
              <label for="versicherungsnummer" class="field-label">* Versicherungsnummer</label>
              <input type="text" id="versicherungsnummer" required v-model="versicherungsnummer" placeholder="Versicherungsnummer">
            </td>
          </tr>
        </table>

        <table class="offense-table">
          <tr>
            <th colspan="2">Angaben zum Tatbestand § 51 Abs.1 Satz 2 SGB XI</th>
          </tr>
          <tr>
            <td>
              <span v-if="errorMessages.aufforderungsdatum" class="error-message">{{ errorMessages.aufforderungsdatum }}</span>
              <label v-else for="aufforderungsdatum" class="field-label">* Aufforderungsdatum</label>
              <input type="date" id="aufforderungsdatum" v-model="aufforderungsdatum" @change="validateDates" :class="{ 'error-border': errorMessages.aufforderungsdatum }"></td>
            <td>
              <span v-if="errorMessages.startdatum" class="error-message">{{ errorMessages.startdatum }}</span>
              <label v-else for="startdatum" class="field-label">* Startdatum</label>
              <input type="date" id="startdatum" v-model="startdatum" @change="validateDates" :class="{ 'error-border': errorMessages.startdatum }" >
            </td>
          </tr>
          <tr>
            <td>
              <label for="verzug-bis" class="field-label">Verzug bis</label>
              <input type="text" id="verzug-bis" class="readonly-field" v-model="formattedVerzugBis" readonly>
            </td>
            <td>
              <span v-if="errorMessages.verzugsende" class="error-message">{{ errorMessages.verzugsende }}</span>
              <label v-else for="verzugsende" class="field-label">* Verzugsende</label>
              <input type="date" id="verzugsende" v-model="verzugsende" @change="validateDates" :class="{ 'error-border': errorMessages.verzugsende }" >
            </td>
          </tr>
          <tr>
            <td>
              <label for="beitragsrueckstand" class="field-label">* Beitragsrückstand</label>
              <input type="number" min="0" id="beitragsrueckstand" v-model="beitragsrueckstand" placeholder="Beitragsrückstand">
            </td>
            <td>
              <label for="gesamtsollbetrag" class="field-label">* Gesamtsollbetrag</label>
              <input type="number" min="0" id="gesamtsollbetrag" v-model="gesamtsollbetrag" placeholder="Gesamtsollbetrag">
            </td>
          </tr>
        </table>

        <table class="additional-table">
          <tr>
            <th>Weitere Angaben</th>
          </tr>
          <tr>
            <td><textarea type="text" id="bemerkungen" placeholder="Bemerkungen"></textarea></td>
          </tr>
        </table>

        <div id="submit-and-response">
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
      verzugBis: '',
      beitragsrueckstand: '',
      gesamtsollbetrag: '',
      responseMessage: '',
      errorMessages: {}
    }
  },
  watch: {
    startdatum: function(newStartDatum) {
      this.updateVerzugBis();
    }
  },
  computed: {
    hasErrors() {
      return Object.keys(this.errorMessages).length > 0;
    },
    formattedVerzugBis() { // used to store value in dd.mm.yyyy format
      if (this.verzugBis) {
        const date = new Date(this.verzugBis);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
      }
      return '';
    }
  },
  methods: {
    updateVerzugBis() {
      if (this.startdatum) {
        let date = new Date(this.startdatum);
        date.setDate(1);
        date.setMonth(date.getMonth() + 5);
        this.verzugBis = date.toISOString().substring(0, 10);  // in yyyy-mm-dd format
      }
    },
    validateDates() {
      this.errorMessages = {};
      if (this.geburtsdatum && new Date(this.geburtsdatum) > new Date()) {
        this.errorMessages.geburtsdatum = 'Geburtsdatum muss in der Vergangenheit liegen.';
      }
      if (this.aufforderungsdatum && new Date(this.aufforderungsdatum) > new Date()) {
        this.errorMessages.aufforderungsdatum = 'Aufforderungsdatum muss in der Vergangenheit liegen.';
      }
      if (this.startdatum && new Date(this.startdatum) > new Date()) {
        this.errorMessages.startdatum = 'Startdatum muss in der Vergangenheit liegen.';
      }
      if (this.startdatum && new Date(this.startdatum).getDate() != 1) {
        this.errorMessages.startdatum = 'Startdatum muss am Monatsanfang liegen.';
      }
      if (this.verzugsende && new Date(this.verzugsende) > new Date()) {
        this.errorMessages.verzugsende = 'Verzugsende muss in der Vergangenheit liegen.';
      }
    },
    async handleSubmit() {
      this.validateDates();
      if (Object.keys(this.errorMessages).length > 0) return;

      const formData = {
        fallnummer: this.fallnummer,
        geschlecht: this.geschlecht,
        titel: this.titel,
        vorname: this.vorname,
        nachname: this.nachname,
        geburtsdatum: this.geburtsdatum,
        str: this.str,
        hausnummer: this.hausnummer,
        plz: this.plz,
        wohnort: this.wohnort,
        geburtsort: this.geburtsort,
        ortsteil: this.ortsteil,
        versicherungsunternehmensnummer: this.versicherungsunternehmensnummer,
        krankenversicherung: this.krankenversicherung,
        versicherungsnummer: this.versicherungsnummer,
        aufforderungsdatum: this.aufforderungsdatum,
        startdatum: this.startdatum,
        verzugBis: this.verzugBis,
        verzugsende: this.verzugsende,
        beitragsrueckstand: this.beitragsrueckstand,
        gesamtsollbetrag: this.gesamtsollbetrag,
        bemerkungen: this.bemerkungen
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
#container {
  background: #fdfdfd;
  width: 100%;
  min-height: 520px;
}

#title {
  margin-bottom: 34px;
}

#input-form {
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
  /*border: 1px solid #292929;*/
  text-align: left;
  vertical-align: top;
  padding-right: 10px;
  padding-top: 10px;
}

form {
  background: #fdfdfd;
}

input, .readonly-field, input[type="date"] {
  display: block;
  padding: 6px 10px;
  box-sizing: border-box;
  border: 1px solid #404040;
  width: 100%;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif; /* Ensures the date input has the same font */
}

#bemerkungen {
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

.field-label, .error-message {
  font-size: 14px;
  margin-top: -15px;
  margin-bottom: 15px;
  font-family: Arial, Helvetica, sans-serif; /* Ensures the labels have the same font */
}

.error-message {
  color: red;
}

.error-border {
  border-color: red !important;
}

#submit-and-response {
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


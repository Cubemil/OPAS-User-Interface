<template>
  <div id="container">
    <div id="input-form">
      <form @submit.prevent="handleSubmit">
        <table id="formal-table">
          <tr>
            <th>Formelle Angaben</th>
          </tr>
          <tr>
            <td>
              <label for="fallnummer" class="field-label">Fallnummer*</label>
              <input type="text" id="fallnummer" required v-model="fallnummer" placeholder="Fallnummer">
            </td>
          </tr>
        </table>

        <table class="insurance-table">
          <tr>
            <th colspan="2">Angaben zur Versicherung</th>
          </tr>
          <tr>
            <td>
              <label for="vu-nr" class="field-label">VU-Nr.*</label>
              <input type="text" id="vu-nr" required v-model="versicherungsunternehmensnummer" placeholder="VU-Nr.">
            </td>
            <td>
              <label for="krankenversicherung" class="field-label">Krankenversicherung*</label>
              <input type="text" id="krankenversicherung" required v-model="krankenversicherung"
                     placeholder="Krankenversicherung">
            </td>
          </tr>
          <tr>
            <td>
              <label for="versicherungsnummer" class="field-label">Versicherungsnummer*</label>
              <input type="text" id="versicherungsnummer" required v-model="versicherungsnummer"
                     placeholder="Versicherungsnummer">
            </td>
          </tr>
        </table>

        <table id="person-table">
          <tr>
            <th colspan="3">Angaben zur beschuldigten Person</th>
          </tr>
          <tr>
            <td>
              <span v-if="errorMessages.geschlecht" class="error-message">{{
                  errorMessages.geschlecht
                }}</span>
              <label v-else for="geschlecht" class="field-label">Geschlecht*</label>
              <select id="geschlecht" required v-model="geschlecht" @change="validateData"
                      :class="{ 'error-border': errorMessages.geschlecht }">
                <option value="" ref="empty" disabled selected hidden>Geschlecht</option>
                <option value="0" ref="no-declaration">keine Angabe</option>
                <option value="1">Herr</option>
                <option value="2">Frau</option>
                <option value="3">Divers</option>
              </select>
            </td>
            <td>
              <label for="titel" class="field-label">Titel</label>
              <input type="text" id="titel" v-model="titel" placeholder="Titel">
            </td>
            <td>
              <label for="geburtsdatum" class="field-label">Geburtsdatum*</label>
              <input type="date" id="geburtsdatum" required v-model="geburtsdatum">
            </td>
          </tr>
          <tr>
            <td>
              <label for="vorname" class="field-label">Vorname*</label>
              <input type="text" id="vorname" required v-model="vorname" placeholder="Vorname">
            </td>
            <td>
              <label for="nachname" class="field-label">Nachname*</label>
              <input type="text" id="nachname" required v-model="nachname" placeholder="Nachname">
            </td>
            <td>
              <label for="geburtsname" class="field-label">Geburtsname</label>
              <input type="text" id="geburtsname" v-model="geburtsname" placeholder="Geburtsname">
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <label for="str" class="field-label">Straße*</label>
              <input type="text" id="str" required v-model="str" placeholder="Straße">
            </td>
            <td>
              <label for="hausnummer" class="field-label">Hausnummer*</label>
              <input type="text" id="hausnummer" required v-model="hausnummer" placeholder="Hausnummer">
            </td>
          </tr>
          <tr>
            <td>
              <label for="plz" class="field-label">PLZ*</label>
              <input type="text" id="plz" required v-model="plz" placeholder="PLZ">
            </td>
            <td colspan="2">
              <label for="wohnort" class="field-label">Wohnort*</label>
              <input type="text" id="wohnort" required v-model="wohnort" placeholder="Wohnort">
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <label for="ortsteil" class="field-label">Ortsteil</label>
              <input type="text" id="ortsteil" v-model="ortsteil" placeholder="Ortsteil">
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <label for="geburtsort" class="field-label">Geburtsort</label>
              <input type="text" id="geburtsort" v-model="geburtsort" placeholder="Geburtsort">
            </td>
          </tr>
        </table>

        <table class="offense-table">
          <tr>
            <th colspan="2">Angaben zum Tatbestand § 51 Abs.1 Satz 2 SGB XI</th>
          </tr>
          <tr>
            <td>
              <span v-if="errorMessages.aufforderungsdatum" class="error-message">{{
                  errorMessages.aufforderungsdatum
                }}</span>
              <label v-else for="aufforderungsdatum" class="field-label">Aufforderungsdatum*</label>
              <input type="date" id="aufforderungsdatum" v-model="aufforderungsdatum" @change="validateData"
                     :class="{ 'error-border': errorMessages.aufforderungsdatum }">
            </td>
            <td>
              <span v-if="errorMessages.beginnRueckstand" class="error-message">{{
                  errorMessages.beginnRueckstand
                }}</span>
              <label v-else for="beginn-rückstand" class="field-label">Beginn Rückstand*</label>
              <input type="date" id="beginn-rückstand" v-model="beginnRueckstand" @change="validateData"
                     :class="{ 'error-border': errorMessages.beginnRueckstand }">
            </td>
          </tr>
          <tr>
            <td>
              <label for="verzug-bis" class="field-label">Verzug bis</label>
              <input type="text" id="verzug-bis" class="readonly-field" v-model="formattedVerzugBis" readonly>
            </td>
            <td>
              <span v-if="errorMessages.verzugsende" class="error-message">{{ errorMessages.verzugsende }}</span>
              <label v-else for="verzugsende" class="field-label">Verzugsende*</label>
              <input type="date" id="verzugsende" v-model="verzugsende" @change="validateData"
                     :class="{ 'error-border': errorMessages.verzugsende }">
            </td>
          </tr>
          <tr>
            <td>
              <label for="beitragsrueckstand" class="field-label">Beitragsrückstand*</label>
              <input type="number" min="0" id="beitragsrueckstand" v-model="beitragsrueckstand"
                     placeholder="Beitragsrückstand">
            </td>
            <td>
              <label for="sollbeitrag" class="field-label">Sollbeitrag*</label>
              <input type="number" min="0" id="sollbeitrag" v-model="sollbeitrag" placeholder="Sollbeitrag">
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <label for="folgemeldung" class="field-label">Folgemeldung*</label>
              <input type="number" min="1" id="folgemeldung" v-model="folgemeldung" placeholder="Folgemeldung"
                     @change="validateData">
            </td>
          </tr>
        </table>

        <table class="additional-table">
          <tr>
            <th>Weitere Angaben</th>
          </tr>
          <tr>
            <td><textarea type="text" id="bemerkungen" placeholder="Bemerkungen" v-model="bemerkungen"></textarea></td>
          </tr>
        </table>

        <div id="submit-and-response">
          <button class="form-button" id="cancel-button" type="button" @click="handleCancel" aria-label="cancel-button">
            Abbrechen
          </button>
          <button class="form-button" id="submit-button" :disabled="hasErrors" aria-label="send-button">{{
              sendMode
            }}
          </button>
          <p id="response">{{ responseMessage }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      fallnummer: this.initialData.fallnummer || '',
      geschlecht: this.initialData.geschlecht || '',
      vorname: this.initialData.vorname || '',
      nachname: this.initialData.nachname || '',
      geburtsname: this.initialData.geburtsname || '',
      titel: this.initialData.titel || '',
      geburtsdatum: this.formatDate(this.initialData.geburtsdatum) || '',
      str: this.initialData.str || '',
      hausnummer: this.initialData.hausnummer || '',
      plz: this.initialData.plz || '',
      wohnort: this.initialData.wohnort || '',
      geburtsort: this.initialData.geburtsort || '',
      ortsteil: this.initialData.ortsteil || '',
      versicherungsunternehmensnummer: this.initialData.versicherungsunternehmensnummer || '',
      krankenversicherung: this.initialData.krankenversicherung || '',
      versicherungsnummer: this.initialData.versicherungsnummer || '',
      aufforderungsdatum: this.formatDate(this.initialData.aufforderungsdatum) || '',
      beginnRueckstand: this.formatDate(this.initialData.beginnRueckstand) || '',
      verzugBis: this.formatDate(this.initialData.verzugBis) || '',
      verzugsende: this.formatDate(this.initialData.verzugsende) || '',
      beitragsrueckstand: this.initialData.beitragsrueckstand || '',
      sollbeitrag: this.initialData.sollbeitrag || '',
      folgemeldung: this.initialData.folgemeldung || '',
      bemerkungen: this.initialData.bemerkungen || '',
      responseMessage: '',
      errorMessages: {},
      sendMode: this.initialData.fallnummer ? 'Speichern' : 'Absenden', // if fallnummer is set, we're in edit mode
      isSubmitting: false // prevent multiple submissions
    }
  },
  methods: {
    formatDate(dateString) {
      if (!dateString) return ''
      const date = new Date(dateString)
      const year = date.getFullYear()
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const day = date.getDate().toString().padStart(2, '0')
      return `${year}-${month}-${day}`
    },
    updateVerzugBis() {
      if (this.beginnRueckstand) {
        let date = new Date(this.beginnRueckstand)
        date.setDate(1)
        date.setMonth(date.getMonth() + 5)
        this.verzugBis = date.toISOString().substring(0, 10)
      }
    },
    validateData() {
      this.errorMessages = {};
      if (this.geburtsdatum && new Date(this.geburtsdatum) > new Date()) {
        this.errorMessages.geburtsdatum = 'Geburtsdatum muss in der Vergangenheit liegen.'
      }
      if (this.aufforderungsdatum && new Date(this.aufforderungsdatum) > new Date()) {
        this.errorMessages.aufforderungsdatum = 'Aufforderungsdatum muss in der Vergangenheit liegen.'
      }
      if (this.beginnRueckstand && new Date(this.beginnRueckstand) > new Date()) {
        this.errorMessages.beginnRueckstand = 'Beginn Rückstand muss in der Vergangenheit liegen.'
      }
      if (this.beginnRueckstand && new Date(this.beginnRueckstand).getDate() !== 1) {
        this.errorMessages.beginnRueckstand = 'Beginn Rückstand muss am Monatsanfang liegen.'
      }
      if (this.beginnRueckstand > this.aufforderungsdatum || this.beginnRueckstand === this.aufforderungsdatum && this.beginnRueckstand !== "") {
        this.errorMessages.beginnRueckstand = 'Beginn Rückstand muss vor dem Aufforderungsdatum liegen.'
      }
      if (this.verzugsende && new Date(this.verzugsende) > new Date()) {
        this.errorMessages.verzugsende = 'Verzugsende muss in der Vergangenheit liegen.'
      }
      if (this.folgemeldung < 1) {
        this.errorMessages.folgemeldung = 'Folgemeldung muss größer als Null sein.'
      }
      if (this.geschlecht === "0") {
        this.errorMessages.geschlecht = 'Wählen Sie ein Geschlecht.'
        // Reset to default (empty) value
        this.geschlecht = "";
      }
    },
    async handleSubmit() {
      this.validateData();
      if (Object.keys(this.errorMessages).length > 0 || this.isSubmitting) return;

      this.isSubmitting = true; // prevent multiple submissions

      const formData = {
        fallnummer: this.fallnummer,
        geschlecht: this.geschlecht,
        titel: this.titel,
        vorname: this.vorname,
        nachname: this.nachname,
        geburtsname: this.geburtsname,
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
        beginnRueckstand: this.beginnRueckstand,
        verzugBis: this.verzugBis,
        verzugsende: this.verzugsende,
        beitragsrueckstand: this.beitragsrueckstand,
        sollbeitrag: this.sollbeitrag,
        folgemeldung: this.folgemeldung,
        bemerkungen: this.bemerkungen
      }

      this.$emit('submit', formData);
      this.isSubmitting = false;
    },
    handleCancel() {
      window.history.back(); // back one page in browser history
    }
  },
  watch: {
    beginnRueckstand: function (beginnRueckstand) {
      this.updateVerzugBis()
    }
  },
  computed: {
    hasErrors() {
      return Object.keys(this.errorMessages).length > 0
    },
    formattedVerzugBis() {
      if (this.verzugBis) {
        const date = new Date(this.verzugBis);
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear()
        return `${day}.${month}.${year}`
      }
      return ''
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

#input-form {
  padding: 1% 6%;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  display: flex;
  justify-content: center;
}

input {
  border: none;
  box-sizing: border-box;
  outline: 0;
  position: relative;
  width: 100%;
  font-family: Arial, serif;
}

input[type="date"] {
  padding: .38rem;
  font-weight: 450;
  font-family: Arial, serif;
}

input[type="text"] {
  padding: .45rem;
  font-family: Arial, serif;
}

select {
  padding: .41rem;
  box-sizing: border-box;
  outline: none;
  position: relative;
  width: 100%;
  font-size: 16px;
  font-family: Arial, serif;
  border: solid 1px #272727;

}

select:invalid {
  color: gray;
}

input, .readonly-field {
  display: block;
  padding: 6px 10px;
  box-sizing: border-box;
  border: 1px solid #404040;
  width: 100%;
  font-size: 16px;
}

table {
  margin-bottom: 18px;
  width: 100%;
}

th, td {
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
  font-family: Arial, Helvetica, sans-serif;
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
  font-family: Arial, Helvetica, sans-serif;
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

#submit-button, #cancel-button {
  background: #404040;
  font-size: 20px;
  padding: 1% 3%;
  color: #fdfdfd;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0 1%;
}

#submit-button:disabled {
  background: grey;
  cursor: not-allowed;
}

#submit-button:hover:enabled {
  background: #E8C325;
}

#cancel-button:hover {
  background: #E8C325;
}

@media only screen and (max-width: 480px) {
  .container {
    font-size: 32px;
  }

  #description {
    font-size: 20px;
  }

  #submit-button {
    font-size: 16px;
    padding: 2% 4%;
  }

  th, td {
    display: inline-block;
  }
}
</style>
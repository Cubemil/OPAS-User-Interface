<template>
  <div id="input-form-container">
    <div id="input-form">
      <form @submit.prevent="handleSubmit">
        <table id="formal-table">
          <tr>
            <th>Formelle Angaben</th>
          </tr>
          <tr>
            <td>
              <label for="fallnummer" class="field-label">Fallnummer*</label>
              <input
                type="text"
                id="fallnummer"
                required
                @focusout="validateData('fallnummer')"
                v-model="fallnummer"
                placeholder="Fallnummer"
                :class="{ 'error-border': errorMessages.fallnummer }"
              >
              <div class="error-container" v-if="errorMessages.fallnummer">
                <span class="error-message">{{ errorMessages.fallnummer }}</span>
              </div>
            </td>
            <td>
              <label for="meldedatum" class="field-label">Meldedatum*</label>
              <input
                type="date"
                id="meldedatum"
                required
                @focusout="validateData('meldedatum')"
                v-model="meldedatum"
                :class="{ 'error-border': errorMessages.meldedatum }"
              >
              <div class="error-container" v-if="errorMessages.meldedatum">
                <span class="error-message">{{ errorMessages.meldedatum }}</span>
              </div>
            </td>
          </tr>
        </table>

        <table id="insurance-table">
          <tr>
            <th colspan="2">Angaben zur Versicherung</th>
          </tr>
          <tr>
            <td>
              <label for="vu-nr" class="field-label">VU-Nr.*</label>
              <input
                type="text"
                id="vu-nr"
                required
                @focusout="validateData('vuNr')"
                v-model="versicherungsunternehmensnummer"
                placeholder="VU-Nr."
                :class="{ 'error-border': errorMessages.vuNr }"
              >
              <div class="error-container" v-if="errorMessages.vuNr">
                <span class="error-message">{{ errorMessages.vuNr }}</span>
              </div>
            </td>
            <td>
              <label for="krankenversicherung" class="field-label">Krankenversicherung*</label>
              <input
                type="text"
                id="krankenversicherung"
                required
                @focusout="validateData('krankenversicherung')"
                v-model="krankenversicherung"
                placeholder="Krankenversicherung"
                :class="{ 'error-border': errorMessages.krankenversicherung }"
              >
              <div class="error-container" v-if="errorMessages.krankenversicherung">
                <span class="error-message">{{ errorMessages.krankenversicherung }}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label for="versicherungsnummer" class="field-label">Versicherungsnummer*</label>
              <input
                type="text"
                id="versicherungsnummer"
                required
                v-model="versicherungsnummer"
                placeholder="Versicherungsnummer"
                :class="{ 'error-border': errorMessages.versicherungsnummer }"
              >
              <div class="error-container" v-if="errorMessages.versicherungsnummer">
                <span class="error-message">{{ errorMessages.versicherungsnummer }}</span>
              </div>
            </td>
            <td>
              <label for="beginn-versicherung" class="field-label">Beginn Versicherung*</label>
              <input
                type="date"
                id="beginn-versicherung"
                required
                v-model="beginnVersicherung"
              >
              <div class="error-container" v-if="errorMessages.beginnVersicherung">
                <span class="error-message">{{ errorMessages.beginnVersicherung }}</span>
              </div>
            </td>
          </tr>
        </table>

        <table id="person-table">
          <tr>
            <th colspan="3">Angaben zur beschuldigten Person</th>
          </tr>
          <tr>
            <td>
              <label for="geschlecht" class="field-label">Geschlecht*</label>
              <select
                id="geschlecht"
                required
                v-model="geschlecht"
                @focusout="validateData('geschlecht')"
                :class="{ 'error-border': errorMessages.geschlecht }"
              >
                <option value="" ref="empty" disabled selected hidden>Geschlecht</option>
                <option value="0" ref="no-declaration">keine Angabe</option>
                <option value="1">Herr</option>
                <option value="2">Frau</option>
                <option value="3">Divers</option>
              </select>
              <div class="error-container" v-if="errorMessages.geschlecht">
                <span class="error-message">{{ errorMessages.geschlecht }}</span>
              </div>
            </td>
            <td>
              <label for="titel" class="field-label">Titel</label>
              <input
                type="text"
                id="titel"
                v-model="titel"
                placeholder="Titel"
              >
            </td>
            <td>
              <label for="geburtsdatum" class="field-label">Geburtsdatum*</label>
              <input
                type="date"
                id="geburtsdatum"
                required
                @focusout="validateData('geburtsdatum')"
                v-model="geburtsdatum"
                :class="{ 'error-border': errorMessages.geburtsdatum }"
              >
              <div class="error-container" v-if="errorMessages.geburtsdatum">
                <span class="error-message">{{ errorMessages.geburtsdatum }}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label for="vorname" class="field-label">Vorname*</label>
              <input
                type="text"
                id="vorname"
                required
                v-model="vorname"
                @focusout="validateData('vorname')"
                placeholder="Vorname"
                :class="{ 'error-border': errorMessages.vorname }"
              >
              <div class="error-container" v-if="errorMessages.vorname">
                <span class="error-message">{{ errorMessages.vorname }}</span>
              </div>
            </td>
            <td>
              <label for="nachname" class="field-label">Nachname*</label>
              <input
                type="text"
                id="nachname"
                required
                v-model="nachname"
                @focusout="validateData('nachname')"
                placeholder="Nachname"
                :class="{ 'error-border': errorMessages.nachname }"
              >
              <div class="error-container" v-if="errorMessages.nachname">
                <span class="error-message">{{ errorMessages.nachname }}</span>
              </div>
            </td>
            <td>
              <label for="geburtsname" class="field-label">Geburtsname</label>
              <input
                type="text"
                id="geburtsname"
                v-model="geburtsname"
                placeholder="Geburtsname"
              >
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <label for="str" class="field-label">Straße*</label>
              <input
                type="text"
                id="str"
                required
                @focusout="validateData('str')"
                v-model="str"
                placeholder="Straße"
                :class="{ 'error-border': errorMessages.str }"
              >
              <div class="error-container" v-if="errorMessages.str">
                <span class="error-message">{{ errorMessages.str }}</span>
              </div>
            </td>
            <td>
              <label for="hausnummer" class="field-label">Hausnummer*</label>
              <input
                type="text"
                id="hausnummer"
                required
                @focusout="validateData('hausnummer')"
                v-model="hausnummer"
                placeholder="Hausnummer"
                :class="{ 'error-border': errorMessages.hausnummer }"
              >
              <div class="error-container" v-if="errorMessages.hausnummer">
                <span class="error-message">{{ errorMessages.hausnummer }}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label for="plz" class="field-label">PLZ*</label>
              <input 
                type="text"
                id="plz"
                required
                @focusout="validateData('plz')"
                v-model="plz"
                placeholder="PLZ"
                :class="{ 'error-border': errorMessages.plz }"
              >
              <div class="error-container" v-if="errorMessages.plz">
                <span class="error-message">{{ errorMessages.plz }}</span>
              </div>
            </td>
            <td colspan="2">
              <label for="wohnort" class="field-label">Wohnort*</label>
              <input 
                type="text" 
                id="wohnort"
                required
                @focusout="validateData('wohnort')"
                v-model="wohnort" 
                placeholder="Wohnort"
                :class="{ 'error-border': errorMessages.wohnort }"
              >
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <label for="ortsteil" class="field-label">Ortsteil</label>
              <input
                type="text"
                id="ortsteil"
                v-model="ortsteil"
                placeholder="Ortsteil"
              >
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <label for="geburtsort" class="field-label">Geburtsort</label>
              <input
                type="text"
                id="geburtsort"
                v-model="geburtsort"
                placeholder="Geburtsort"
              >
            </td>
          </tr>
        </table>

        <table id="offense-table">
          <tr>
            <th colspan="2">Angaben zum Tatbestand § 51 Abs.1 Satz 2 SGB XI</th>
          </tr>
          <tr>
            <td>
              <label for="aufforderungsdatum" class="field-label">Aufforderungsdatum*</label>
              <input 
                type="date"
                id="aufforderungsdatum"
                required
                v-model="aufforderungsdatum"
                @focusout="validateData('aufforderungsdatum')"
                :class="{ 'error-border': errorMessages.aufforderungsdatum }"
              >
              <div class="error-container" v-if="errorMessages.aufforderungsdatum">
                <span class="error-message">{{ errorMessages.aufforderungsdatum }}</span>
              </div>
            </td>
            <td>
              <label for="beginn-rückstand" class="field-label">Beginn Rückstand*</label>
              <input
                type="date"
                id="beginn-rückstand"
                required
                v-model="beginnRueckstand"
                @focusout="validateData('beginnRueckstand')"
                :class="{ 'error-border': errorMessages.beginnRueckstand }"
              >
              <div class="error-container" v-if="errorMessages.beginnRueckstand">
                <span class="error-message">{{ errorMessages.beginnRueckstand }}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label for="verzug-bis" class="field-label">Verzug bis</label>
              <input
                type="text"
                id="verzug-bis"
                required
                v-model="formattedVerzugBis"
                class="readonly-field"
                readonly
              >
            </td>
            <td>
              <label for="verzugsende" class="field-label">Verzugsende*</label>
              <input
                type="date"
                id="verzugsende"
                required
                v-model="verzugsende"
                @focusout="validateData('verzugsende')"
                :class="{ 'error-border': errorMessages.verzugsende }"
              >
              <div class="error-container" v-if="errorMessages.verzugsende">
                <span class="error-message">{{ errorMessages.verzugsende }}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label for="beitragsrueckstand" class="field-label">Beitragsrückstand*</label>
              <div class="input-euro-wrapper">
                <input
                  type="number"
                  id="beitragsrueckstand"
                  required
                  v-model="beitragsrueckstand"
                  @focusout="validateData('beitragsrueckstand')"
                  placeholder="Beitragsrückstand"
                  min="0"
                  :class="{ 'error-border': errorMessages.beitragsrueckstand }"
                >
                <span class="euro-symbol">€</span>
              </div>
              <div class="error-container" v-if="errorMessages.beitragsrueckstand">
                <span class="error-message">{{ errorMessages.beitragsrueckstand }}</span>
              </div>
            </td>
            <td>
              <label for="sollbeitrag" class="field-label">Sollbeitrag*</label>
              <div class="input-euro-wrapper">
                <input
                  type="number"
                  id="sollbeitrag"
                  required
                  @focusout="validateData('sollbeitrag')"
                  v-model="sollbeitrag"
                  placeholder="Sollbeitrag"
                  min="0"
                  :class="{ 'error-border': errorMessages.sollbeitrag }"
                >
                <span class="euro-symbol">€</span>
              </div>
              <div class="error-container" v-if="errorMessages.sollbeitrag">
                <span class="error-message">{{ errorMessages.sollbeitrag }}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <label for="folgemeldung" class="field-label">Folgemeldung*</label>
              <input
                type="number"
                id="folgemeldung"
                required
                v-model="folgemeldung"
                @focusout="validateData('folgemeldung')"
                placeholder="Folgemeldung"
                min="1"
                :class="{ 'error-border': errorMessages.folgemeldung }"
              >
              <div class="error-container" v-if="errorMessages.folgemeldung">
                <span class="error-message">{{ errorMessages.folgemeldung }}</span>
              </div>
            </td>
          </tr>
        </table>

        <table id="additional-table">
          <tr>
            <th>Weitere Angaben</th>
          </tr>
          <tr>
            <td>
              <textarea
                type="text"
                id="bemerkungen"
                v-model="bemerkungen"
                placeholder="Bemerkungen"
              ></textarea>
            </td>
          </tr>
        </table>

        <table id="documents-table">
          <tr>
            <th>Dokumente</th>
          </tr>
          <tr>
            <td>
              <label for="anhoehrungsdatum" class="field-label">Anhörungsdatum</label>
              <input
                type="date"
                id="anhoerungsdatum"
                v-model="anhoerungsdatum"
              >
            </td>
          </tr>
        </table>

        <div id="submit-and-response">
          <button
            id="cancel-button"
            type="button"
            @click="handleCancel"
            aria-label="cancel-button"
          >Abbrechen</button>
          <button
            id="submit-button"
            aria-label="send-button"
          >{{ sendMode }}</button>
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
      meldedatum: this.formatDate(this.initialData.meldedatum) || '',
      versicherungsunternehmensnummer: this.initialData.versicherungsunternehmensnummer || '',
      krankenversicherung: this.initialData.krankenversicherung || '',
      versicherungsnummer: this.initialData.versicherungsnummer || '',
      beginnVersicherung: this.formatDate(this.initialData.beginnVersicherung) || '',
      geschlecht: this.initialData.geschlecht || '',
      titel: this.initialData.titel || '',
      geburtsdatum: this.formatDate(this.initialData.geburtsdatum) || '',
      vorname: this.initialData.vorname || '',
      nachname: this.initialData.nachname || '',
      geburtsname: this.initialData.geburtsname || '',
      str: this.initialData.str || '',
      hausnummer: this.initialData.hausnummer || '',
      plz: this.initialData.plz || '',
      wohnort: this.initialData.wohnort || '',
      ortsteil: this.initialData.ortsteil || '',
      geburtsort: this.initialData.geburtsort || '',
      aufforderungsdatum: this.formatDate(this.initialData.aufforderungsdatum) || '',
      beginnRueckstand: this.formatDate(this.initialData.beginnRueckstand) || '',
      verzugBis: this.formatDate(this.initialData.verzugBis) || '',
      verzugsende: this.formatDate(this.initialData.verzugsende) || '',
      beitragsrueckstand: this.initialData.beitragsrueckstand || '',
      sollbeitrag: this.initialData.sollbeitrag || '',
      folgemeldung: this.initialData.folgemeldung || '',
      bemerkungen: this.initialData.bemerkungen || '',
      anhoerungsdatum: this.formatDate(this.initialData.anhoerungsdatum) || '',
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
    validateData(fieldName) {
      //TODO: Wir können das hier noch rausnehmen, ist für die UX besser
      // zeigt sozusagen immer nur 1 Fehler für das jweilige Feld an und alle anderen weren gelöscht
      this.errorMessages[fieldName] = ''

      const currDate = new Date()

      switch(fieldName) {
        case 'fallnummer':
          if (!this.fallnummer) {
            this.errorMessages.fallnummer = 'Bitte geben Sie die Fallnummer ein.'
          }
          break
        case 'meldedatum':
          if (!this.meldedatum)
            this.errorMessages.meldedatum = 'Bitte geben Sie das Meldedatum ein.'
          if (new Date(this.meldedatum) > currDate)
            this.errorMessages.meldedatum = 'Das Meldedatum darf nicht in der Zukunft liegen.'
          break
        case 'vuNr':
          if (!this.versicherungsunternehmensnummer) {
            this.errorMessages.vuNr = 'Bitte geben Sie die Versicherungsunternehmensnummer an.'
          }
          break
        case 'krankenversicherung':
          if (!this.krankenversicherung) {
            this.errorMessages.krankenversicherung = 'Bitte geben Sie eine Krankenversicherung an.'
          }
          break
        case 'versicherungsnummer':
          if (!this.versicherungsnummer) {
            this.errorMessages.versicherungsnummer = 'Bitte geben Sie die Versicherungsnummer an.'
          }
          break
        case 'beginnVersicherung':
          if (!this.beginnVersicherung) {
            this.errorMessages.beginnVersicherung = 'Bitte geben Sie den Beginn der Versicherung an.'
          }
          if (new Date(this.beginnVersicherung) > currDate) {
            this.errorMessages.beginnVersicherung = 'Der Beginn der Versicherung darf nicht in der Zukunft liegen.'
          }
          break
        case 'geschlecht':
          if (!this.geschlecht || this.geschlecht === '0') {
            this.errorMessages.geschlecht = 'Bitte geben Sie das Geschlecht an.'
          }
          break
        case 'geburtsdatum':
          if (!this.geburtsdatum) {
            this.errorMessages.geburtsdatum = 'Bitte geben Sie das Geburtsdatum an.'
          }
          if (new Date(this.geburtsdatum) > currDate) {
            this.errorMessages.geburtsdatum = 'Das Geburtsdatum darf nicht in der Zukunft liegen.'
          }
          break
        case 'vorname':
          if (!this.vorname) {
            this.errorMessages.vorname = 'Bitte geben Sie den Vornamen an.'
          }
          break
        case 'nachname':
          if (!this.nachname) {
            this.errorMessages.nachname = 'Bitte geben Sie den Nachnamen an.'
          }
          break
        case 'str':
          if (!this.str) {
            this.errorMessages.str = 'Bitte geben Sie die Straße an.'
          }
          break
        case 'hausnummer':
          if (!this.hausnummer) {
            this.errorMessages.hausnummer = 'Bitte geben Sie die Hausnummer an.'
          }
          break
        case 'plz':
          if (!this.plz) {
            this.errorMessages.plz = 'Bitte geben Sie die PLZ an.'
          }
          break
        case 'wohnort':
          if (!this.wohnort) {
            this.errorMessages.wohnort = 'Bitte geben Sie den Wohnort an.'
          }
          break
        case 'aufforderungsdatum':
          if (!this.aufforderungsdatum) {
            this.errorMessages.aufforderungsdatum = 'Bitte geben Sie das Aufforderungsdatum an.'
            break
          }
          if (new Date(this.aufforderungsdatum) > currDate) {
            this.errorMessages.aufforderungsdatum = 'Das Aufforderungsdatum darf nicht in der Zukunft liegen.'
          }
          break
        case 'beginnRueckstand':
          if (!this.beginnRueckstand) {
            this.errorMessages.beginnRueckstand = 'Bitte geben Sie den Beginn des Rückstands an.'
            break
          }
          const bR = new Date(this.beginnRueckstand)
          if (bR > currDate) {
            this.errorMessages.beginnRueckstand = 'Das Beginndatum des Rückstands darf nicht in der Zukunft liegen.'
          }
          if (bR.getDate() !== 1) {
            this.errorMessages.beginnRueckstand = 'Beginn Rückstand muss am Monatsanfang liegen.'
          }
          if (new Date(this.beginnRueckstand) > new Date(this.aufforderungsdatum)) {
            this.errorMessages.beginnRueckstand = 'Beginn Rückstand muss vor dem Aufforderungsdatum liegen.'
          }
          break
        case 'verzugsende':
          if (!this.verzugsende) {
            this.errorMessages.verzugsende = 'Bitte geben Sie das Verzugsende an.'
            break
          }
          if (new Date(this.verzugsende) > currDate) {
            this.errorMessages.verzugsende = 'Das Verzugsende darf nicht in der Zukunft liegen.'
          }
          break
        case 'beitragsrueckstand':
          if (!this.beitragsrueckstand) {
            this.errorMessages.beitragsrueckstand = 'Bitte geben Sie den Beitragsrückstand an.'
          }
          break
        case 'sollbeitrag':
          if (!this.sollbeitrag) {
            this.errorMessages.sollbeitrag = 'Bitte geben Sie den Sollbeitrag an.'
          }
          break
        case 'folgemeldung':
          if (!this.folgemeldung) {
            this.errorMessages.folgemeldung = 'Bitte geben Sie die Folgemeldung an.'
          }
          if (this.folgemeldung < 1) {
            this.errorMessages.folgemeldung = 'Es muss mindestens eine Folgemeldung existieren.'
          }
          break
        default:
          break
      }
    },
    validateAllData() {
      const fieldsToValidate = [
        'fallnummer',
        'meldedatum',
        'vuNr',
        'krankenversicherung',
        'versicherungsnummer',
        'beginnVersicherung',
        'geschlecht',
        'geburtsdatum',
        'vorname',
        'nachname',
        'str',
        'hausnummer',
        'plz',
        'wohnort',
        'aufforderungsdatum',
        'beginnRueckstand',
        'verzugsende',
        'beitragsrueckstand',
        'sollbeitrag',
        'folgemeldung'
      ]
      
      fieldsToValidate.forEach(field => this.validateData(field))
    },
    async handleSubmit() {
      // prevent multiple submissions
      if (this.isSubmitting) return
      this.isSubmitting = true

      // check all fields
      this.validateAllData()

      // if there are any errors, return
      if (Object.keys(this.errorMessages).length > 0 && Object.values(this.errorMessages).some(msg => msg !== '')) {
        this.isSubmitting = false
        return
      }

      const formData = {
        fallnummer: this.fallnummer,
        meldedatum: this.meldedatum,
        versicherungsunternehmensnummer: this.versicherungsunternehmensnummer,
        krankenversicherung: this.krankenversicherung,
        versicherungsnummer: this.versicherungsnummer,
        beginnVersicherung: this.beginnVersicherung,
        geschlecht: this.geschlecht,
        titel: this.titel,
        geburtsdatum: this.geburtsdatum,
        vorname: this.vorname,
        nachname: this.nachname,
        geburtsname: this.geburtsname,
        str: this.str,
        hausnummer: this.hausnummer,
        plz: this.plz,
        wohnort: this.wohnort,
        ortsteil: this.ortsteil,
        geburtsort: this.geburtsort,
        aufforderungsdatum: this.aufforderungsdatum,
        beginnRueckstand: this.beginnRueckstand,
        verzugBis: this.verzugBis,
        verzugsende: this.verzugsende,
        beitragsrueckstand: this.beitragsrueckstand,
        sollbeitrag: this.sollbeitrag,
        folgemeldung: this.folgemeldung,
        bemerkungen: this.bemerkungen,
        anhoerungsdatum: this.anhoerungsdatum
      }

      this.$emit('submit', formData)
      this.isSubmitting = false
    },
    handleCancel() {
      window.history.back() // back one page in browser history
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
#input-form-container {
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
  width: 650px;
  table-layout: fixed;
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

.input-euro-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.euro-symbol {
  position: absolute;
  right: 5%;
  font-size: 16px;
  color: #404040;
  pointer-events: none;
}

/* hides up and down arrows in fron of the euro symbol */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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

.field-label {
  font-size: 14px;
  margin-bottom: 15px;
  font-family: Arial, Helvetica, sans-serif;
}

.error-container {
  width: 100%;
  margin-top: 5px;
}

.error-message {
  color: red;
  font-size: 12px;
  word-wrap: break-word;
  display: block;
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
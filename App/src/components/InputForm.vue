<template>
  <div class="input-form">
    <Navbar/>
    <img id="background" src="@/assets/landesverwaltungsamt.jpeg" alt="background">
    <div class="menu-container">
      <div class="menu">
        <form @submit.prevent="handleSubmit">
          <h1 id="title">Ordnungswidrigkeit nach §121 Abs.1 Nr.6 SGB XI</h1>
          <h3 id="description">(mit * markierte Felder sind Pflichtfelder)</h3>

          <table class="input-fields">
            <tr>
              <th>Formelle Angaben</th>
              <th>Angaben zur beschuldigten Person</th>
              <th>Angaben zur Versicherung</th>
              <th>Beschreibung des Vorfalls</th>
            </tr>
            <tr>
              <td>
                <input type="text" required v-model="aktenzeichen" placeholder="Aktenzeichen*" size="40">
              </td>
              <td>
                <input type="text" required v-model="anrede" placeholder="Anrede*" size="40">
                <input type="text" v-model="titel" placeholder="Titel (optional)" size="40">
                <input type="text" required v-model="vorname" placeholder="Vorname*" size="40">
                <input type="text" required v-model="nachname" placeholder="Nachname*" size="40">
                <input type="date" required v-model="geburtsdatum" placeholder="Geburtsdatum*">
                <input type="text" required v-model="str" placeholder="Straße*" size="40">
                <input type="text" required v-model="hausnummer" placeholder="Hausnummer*" size="40">
                <input type="text" required v-model="plz" placeholder="PLZ*" size="40">
                <input type="text" required v-model="wohnort" placeholder="Wohnort*" size="40">
              </td>
              <td>
                <input type="text" required v-model="versicherungsnummer" placeholder="Versicherungsnummer*"
                       size="40">
                <input type="text" required v-model="krankenversicherungsname"
                       placeholder="Name der Krankenversicherung*"
                       size="40">
                <input type="text" required v-model="vertragsunternehmensnummer"
                       placeholder="Vertragsunternehmensnummer*"
                       size="40">
              </td>
              <td>
                <input id="beschreibung" type="text" required v-model="beschreibung"
                       placeholder="Beschreibung des Vorfalls"
                       size="40">
              </td>
            </tr>
          </table>

          <div class="submit">
            <button id="submit_button">Absenden</button>
            <p id="submit_area"></p>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

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
#background {
  height: 100%;
  width: 100%;
  z-index: -1;
}

.menu-container {
  background: #fdfdfd;
  width: 100%;
  min-height: 520px;
}

.menu {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.input-fields, th, td {
  text-align: left;
  /*border: 1px solid #ddd;*/
}

th, td {
  padding: 10px;
}

td {
  vertical-align: top;
}

form {
  background: #fdfdfd;
}

form p {
  font-size: 20px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #404040;
}

input[type="date"] {
  width: 285px;
  height: 40px;
  font-family: Arial, Helvetica, sans-serif;
  color: grey;
}

.submit {
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
  /*border-radius: 20px;*/
}

#submit_button:hover {
  background: #E8C325;
}

@media only screen and (max-width: 480px) {
  # {
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
    display:inline-block;
  }
}
</style>

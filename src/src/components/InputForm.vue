<template>
    <div>
        <form>
            <h2>Eingabeformular für die Erfassung einer Ordnungswidrigkeit</h2>
            <p>(mit * markierte Felder sind Pflichtfelder)</p>
            <br><p>Formelle Angaben: </p>
            <label>Aktenzeichen:</label>
            <input type="text" required v-model="aktenzeichen" placeholder="*">
            
            <br><p>Angaben zur Person:</p>
            <label>Anrede:</label>
            <input type="text" required v-model="anrede" placeholder="*">

            <label>Vorname:</label>
            <input type="text" required v-model="vorname" placeholder="*">

            <label>Nachname:</label>
            <input type="text" required v-model="nachname" placeholder="*">

            <label>Titel:</label>
            <input type="text" v-model="titel">

            <label>Geburtsdatum:</label>
            <input type="date" required v-model="geburtsdatum" placeholder="*">

            <label>PLZ: </label>
            <input type="text" required v-model="plz" placeholder="*">

            <label>Wohnort:</label>
            <input type="text" required v-model="wohnort" placeholder="*">

            <label>Straße: </label>
            <input type="text" required v-model="str" placeholder="*">

            <label>Hausnummer: </label>
            <input type="text" required v-model="hausnummer" placeholder="*">

            <br><p>Angaben zur Versicherung:</p>
            <label>Versicherungsnummer:</label>
            <input type="text" required v-model="versicherungsnummer" placeholder="*">

            <label>Name der Krankenversicherung:</label>
            <input type="text" required v-model="krankenversicherungsname" placeholder="*">

            <label>Vertragsunternehmensnummer:</label>
            <input type="text" required v-model="vertragsunternehmensnummer" placeholder="*">

            <br><p>Beschreibung des Vorfalls:</p>
            <input id="beschreibung" type="text" required v-model="beschreibung" placeholder="Schildern Sie hier den Vorfall genau">

        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            aktenzeichen: '',
            anrede: '',
        }
    }
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #3A788F;
    display: inline-block;
    margin: 15px 5px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input {
    display: block;
    padding: 5px 6px;
    widows: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
h2 {
    color: #3A788F;
}
#beschreibung {
    all: initial;
    font: inherit;
    color: inherit;
    display: inherit;
    box-sizing: inherit;
    border: none;
    border-bottom: 1px solid #ddd;
}
</style>
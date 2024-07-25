<template>
  <div id="style-guide-container">
    <img id="background" src="../assets/landesverwaltungsamt.jpeg" alt="background">
    <div class="menu-container">
      <h2 style="color: rgb(222, 38, 38)"> * Styleguide *</h2>

      Standard Input Field
      <label for="fallnummer" class="field-label">Fallnummer*</label>
      <input type="text" id="text-input" placeholder=""/>

      <br><br>

      Error Input Field
      <label for="fallnummer" class="field-label" id="error-field-label">Fallnummer*</label>
      <input type="text" id="error-text-input" placeholder=""/>

      <br><br>

      Readonly Input Field
      <label for="fallnummer" class="field-label">Fallnummer*</label>
      <input type="text" id="read-only-text-input" placeholder="" disabled/>

      <br><br>

      Date Input Field
      <label for="fallnummer" class="field-label">Fallnummer*</label>
      <input type="date" id="date-input"/>

      <br><br>

      Select Input Field
      <label for="fallnummer" class="field-label">Fallnummer*</label>
      <select>
        <option value=""></option>
      </select>

      <br><br>

      Active Button
      <br><br>
      <button>
        Speichern
      </button>

      <br><br>

      Disabled Button
      <br><br>
      <button>
        Speichern
      </button>

      <br><br>

    </div>
  </div>
</template>

<script setup>
</script>

<script>
export default {}
</script>

<style scoped>
#background {
  height: 100%;
  width: 100%;
  z-index: -1;
}

.menu-container {
  background: #fdfdfd;
  width: 100%;
  min-height: 65vh;
  text-align: center;
}

input {
  width: 30%;
  font-family: Arial, serif;
  font-size: 14px;
  box-sizing: border-box;
  border: solid 1px #272727;
  outline: none;
  padding: .60rem;
}

label {
  display: block;
  font-family: Arial, serif;
  font-size: 14px;
  background: #fdfdfd;
  width: 6%;
  position: relative;
  left: 70.7vh;
  top: 1.2vh;
  border-radius: 3px;
  z-index: 1;
}

#error-text-input {
  border: solid 1px rgb(222, 38, 38);
}

#error-field-label {
  color: rgb(222, 38, 38);
}

select {
  padding: .60rem;
  box-sizing: border-box;
  outline: none;
  position: relative;
  width: 30%;
  font-size: 14px;
  font-family: Arial, serif;
  border: solid 1px #272727;
}

button {
  background: #404040;
  font-size: 16px;
  padding: 1% 3%;
  color: #fdfdfd;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #E8C325;
  color: #404040;
}

button:disabled {
  background: grey;
  cursor: not-allowed;
}
</style>
<template>
  <div id="style-guide-container">
    <img id="background" src="../assets/landesverwaltungsamt.jpeg" alt="background">
    <div class="menu-container">
      <h2 style="color: rgb(222, 38, 38)"> * Styleguide *</h2>
      <h3> Input Fields</h3>
      <label for="fallnummer" class="field-label">Fallnummer*</label>
      <input type="text" id="text-input" placeholder=""/>
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

input[type=text] {
  width: 30%;
  font-family: Arial, serif;
  font-size: 16px;
  box-sizing: border-box;
  border: solid 1px #272727;
  outline: none;
  padding: .50rem;
}

label {
  display: block;
  font-family: Arial, serif;
  font-size: 16px;
  background: #fdfdfd;
  width: 6%;
  position: relative;
  left: 71vh;
  top: 1.4vh;

}
</style>
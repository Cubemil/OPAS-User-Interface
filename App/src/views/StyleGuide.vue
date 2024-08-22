<template>
  <div id="style-guide-container">
    <img id="background" src="../assets/landesverwaltungsamt.jpeg" alt="background">
    <div class="menu-container">
      <h1 style="text-decoration: underline">Style Guide</h1>
      <h2>Farbpalette</h2>
      <table>
        <tr>
          <td>
            <div class="square-container">
              <div class="square" id="s1"></div>
              Dunkelgrau <br> #222222
            </div>
            <div class="square-container">
              <div class="square" id="s2"></div>
              Grau <br> #404040
            </div>
            <div class="square-container">
              <div class="square" id="s3"></div>
              Mittelgrau <br> #8c898c
            </div>
            <div class="square-container">
              <div class="square" id="s4"></div>
              Hellgrau <br> #f1f1f0
            </div>
            <div class="square-container">
              <div class="square" id="s5"></div>
              Gelb <br> #e8c425
            </div>
            <div class="square-container">
              <div class="square" id="s6"></div>
              Weiß <br> #ffffff
            </div>
          </td>
        </tr>
      </table>

      <h2>Design-Richtlinien</h2>
      <table>
        <tr>
          <th>Element</th>
          <th>Farbe</th>
          <th>Beispiel</th>
        </tr>
        <tr>
          <td>Seitenüberschrift</td>
          <td>#222222 (Dunkelgrau)</td>
          <td><h1 style="color: #222222;">Beispielüberschrift</h1></td>
        </tr>
        <tr>
          <td>Abschnittsüberschrift</td>
          <td>#404040 (Grau)</td>
          <td><h2 style="color: #404040;">Beispielüberschrift</h2></td>
        </tr>
        <tr>
          <td>Links</td>
          <td>#f1f1f0 (Hellgrau)</td>
          <td>
            <ul class="nav-list">
              <li>
                <router-link to="/styleguide" class="router-link">
                  <div id="arrow-icon"></div>
                  Beispiellink
                </router-link>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Feldüberschrift</td>
          <td>#404040 (Grau)</td>
          <td><label>Beispiel-Feldüberschrift</label></td>
        </tr>
        <tr>
          <td>Fehlermeldung</td>
          <td>#FF0000FF (Rot)</td>
          <td><span style="color: red;">Beispiel-Fehlermeldung</span></td>
        </tr>
        <tr>
          <td>Footer-Hintergrund</td>
          <td>#404040 (Grau)</td>
          <td>
            <div style="background-color: #404040; color: #ffffff; padding: 10px;">Footer Beispiel</div>
          </td>
        </tr>
        <tr>
          <td>Footer-Zierleiste</td>
          <td>#e8c425 (Gelb)</td>
          <td>
            <div style="background-color: #e8c425; height: 5px;"></div>
          </td>
        </tr>
        <tr>
          <td>Footer-Links</td>
          <td>#ffffff (Weiß)</td>
          <td><a href="#" style="background-color: #404040; color: #ffffff; padding: 5px;">Beispiel Footer-Link</a></td>
        </tr>
        <tr>
          <td>Button-Hintergrund</td>
          <td>#e8c425 (Gelb)</td>
          <td>
            <button>Beispiel Button</button>
          </td>
        </tr>
        <tr>
          <td>Button-Vordergrund</td>
          <td>#222222 (Dunkelgrau)</td>
          <td>
            <button>Beispiel Button</button>
          </td>
        </tr>
        <tr>
          <td>Hintergrund von gehovertem Button</td>
          <td>#404040 (Grau)</td>
          <td>
            <button>Hover Beispiel</button>
          </td>
        </tr>
        <tr>
          <td>Vordergrund von gehovertem Button</td>
          <td>#ffffff (Weiß)</td>
          <td>
            <button>Hover Beispiel</button>
          </td>
        </tr>
        <tr>
          <td>Eingabebox-Hintergrund</td>
          <td>#f1f1f0 (Hellgrau)</td>
          <td><input type="text" placeholder="Beispiel-Eingabebox"/></td>
        </tr>
        <tr>
          <td>Eingabebox-Vordergrund</td>
          <td>#222222 (Dunkelgrau)</td>
          <td><input type="text" placeholder="Beispiel-Eingabebox"/></td>
        </tr>
        <tr>
          <td>Hintergrund gesperrter Eingabebox</td>
          <td>#8c898c (Mittelgrau)</td>
          <td><input type="text" placeholder="Gesperrte Eingabebox" disabled/></td>
        </tr>
        <tr>
          <td>Vordergrund gesperrter Eingabebox</td>
          <td>#ffffff (Weiß)</td>
          <td><input type="text" placeholder="Gesperrte Eingabebox" disabled/></td>
        </tr>
      </table>

      <h2>Typografie</h2>
      <table>
        <tr>
          <th>Element</th>
          <th>Schriftart und -größe</th>
          <th>Beispiel</th>
        </tr>
        <tr>
          <td>Seitenüberschrift</td>
          <td>Arial, 24px, fett</td>
          <td><h1 style="font-family: Arial; font-size: 24px; font-weight: bold;">Beispielüberschrift</h1></td>
        </tr>
        <tr>
          <td>Abschnittsüberschrift</td>
          <td>Arial, 20px, fett</td>
          <td><h2 style="font-family: Arial; font-size: 20px; font-weight: bold;">Beispielüberschrift</h2></td>
        </tr>
        <tr>
          <td>Feldüberschrift</td>
          <td>Arial, 14px, normal</td>
          <td><label>Beispiel-Feldüberschrift</label></td>
        </tr>
        <tr>
          <td>Eingabebox</td>
          <td>Arial, 14px, normal</td>
          <td><input placeholder="Beispiel-Eingabebox"/></td>
        </tr>
        <tr>
          <td>Button</td>
          <td>Arial, 14px, fett</td>
          <td>
            <button>Beispiel Button</button>
          </td>
        </tr>
        <tr>
          <td>Fließtext</td>
          <td>Arial, 16px, normal</td>
          <td><p style="font-family: Arial; font-size: 16px;">Beispieltext</p></td>
        </tr>
        <tr>
          <td>Links</td>
          <td>Arial, 16px, normal</td>
          <td>
            <ul class="nav-list">
              <li>
                <router-link to="/styleguide" class="router-link">
                  <div id="arrow-icon"></div>
                  Beispiellink
                </router-link>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Fehlermeldung</td>
          <td>Arial, 14px, fett</td>
          <td><span style="font-family: Arial; font-size: 14px; font-weight: bold;">Beispiel-Fehlermeldung</span></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
#background {
  height: 100%;
  width: 100%;
  z-index: -1;
}

.menu-container {
  background: #fdfdfd;
  padding: 20px;
  text-align: center;
}

h1, h2 {
  margin: 20px 0;
  color: #222222;
}

table, th, td {
  margin: auto;
  border: solid 1px #000000;
  border-collapse: collapse;
  padding: 10px;
  text-align: left;
  background: white;
  width: 60%;
}

.square {
  width: 100px;
  height: 100px;
  background: #531313;
  margin: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

#s1 {
  background: #222222;
}

#s2 {
  background: #404040;
}

#s3 {
  background: #8c898c;
}

#s4 {
  background: #f1f1f0;
}

#s5 {
  background: #e8c425;
}

#s6 {
  background: #ffffff;
}

.square-container {
  display: inline-block;
  text-align: center;
  margin: 10px;
}

label {
  font-size: 14px;
  margin-bottom: 15px;
  font-family: Arial, Helvetica, sans-serif;
}

span {
  font-size: 14px;
  color: red;
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

button {
  background: #404040;
  font-size: 20px;
  padding: 1% 3%;
  color: #fdfdfd;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0 1%;
}

button:hover {
  background: #E8C325;
}

.nav-list {
  list-style: none;
  padding: 0;
}

#arrow-icon {
  background-image: url("@/assets/arrow-right.png");
  display: inline-block;
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  top: 5px;
  transition: 0.3s;
}

.router-link {
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  color: #404040;
  font-weight: bold;
}

.router-link:hover #arrow-icon {
  background-image: url("@/assets/arrow-right-hovered.png");
}

.router-link:hover {
  color: #E8C325;
}

*:disabled {
  background-color: #f1f1f0;

}
</style>
<script setup lang="ts">
</script>
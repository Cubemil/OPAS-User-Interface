<template>
  <div class="navbar">
    <img class="logo" src="@/assets/logo.png" alt="Logo"/>
    <ul class="nav">
      <li><img class="account-icon" src="@/assets/account.png" alt="Account"/>Anmelden</li>
    </ul>
  </div>
</template>

<script>

</script>

<style>
.navbar {
  position: fixed;
  background: white;
  width: 100%;
  height: 100px;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.nav {
  list-style-type: none;
  display: flex;
  padding-right: 80px;
  cursor: pointer;
  margin-left: auto;
  font-size: 18px;
  font-weight: bold;
}

.logo {
  height: 70px;
  width: auto;
  padding-left: 80px;
  padding-right: 10px;
  cursor: pointer;
}

.account-icon {
  height: 32px;
  width: auto;
  position: relative;
  top: 7px;
  right: 7px;
}

@media only screen and (max-width: 1280px) {

}

@media only screen and (max-width: 480px) {

}

</style>


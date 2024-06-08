<template>
  <div class="navbar">
    <img class="logo" src="@/assets/logo.png" alt="Logo"/>
    <ul class="nav">
      <li>
        <div class="account-icon"></div>
        Anmelden
      </li>
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
  cursor: pointer;
  background-image: url("@/assets/account.png");
  background-size: 28px;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  display: inline-block;
  position: relative;
  right: 4px;
}

li:hover .account-icon {
  background-image: url("@/assets/account_hovered.png");
}

@media only screen and (max-width: 1280px) {

}

@media only screen and (max-width: 480px) {

}

</style>


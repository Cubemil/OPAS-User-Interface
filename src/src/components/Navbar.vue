<template>
  <div class="navbar">
    <img class="menu-icon" src="@/assets/menu.png" alt="menu"/>
    <img class="logo" src="@/assets/logo.png" alt="logo"/>
    <ul class="nav">
      <li>Registrieren</li>
      <li>Login</li>
    </ul>
  </div>
</template>

<script>

</script>

<style>
.navbar {
  background: white;
  width: 100%;
  height: 80px;
  position: absolute;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 99;
}

.nav {
  list-style-type: none;
  display: flex;
  padding-right: 60px;
  cursor: pointer;
  margin-left: auto;
}

li {
  list-style: none;
  padding: 15px;
}

.logo {
  height: 70px;
  width: auto;
  padding-left: 60px;
  padding-right: 10px;
  cursor: pointer;
}

.menu-icon {
  height: 20px;
  width: auto;
  padding-left: 10px;
  padding-right: 15px;
  cursor: pointer;
  display: none;
}

@media only screen and (max-width: 1280px) {
  .navbar {
    height: 50px;
  }

  .logo {
    height: 45px;
    padding-left: 0;
  }

  .menu-icon {
    display: flex;
  }
}

@media only screen and (max-width: 480px) {
  .nav {
    display: none;
  }
}

</style>


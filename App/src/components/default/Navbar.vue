<template>
  <div class="navbar">
    <router-link to="/" class="router-link">
      <img id="logo" src="@/assets/logo.png" alt="logo">
    </router-link>
    <div class="account-container">
      <img id="account" src="@/assets/account.png" alt="account"/>
      Anmelden
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.navbar {
  position: sticky;
  background: #fdfdfd;
  padding: 1% 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#logo {
  height: 80px;
  width: auto;
  cursor: pointer;
}

.account-container {
  display: flex;
  align-items: center;
  border-bottom: rgba(232, 195, 37, 0) solid 1px;
  cursor: pointer;
  transition: 0.3s;
}

.account-container:hover {
  border-bottom: #E8C325 solid 1px;
}

#account {
  height: 26px;
  width: auto;
  position: relative;
  bottom: 2px;
  right: 2px;
}

@media only screen and (max-width: 480px) {
  .navbar {
    font-size: 16px;
  }

  #logo {
    height: 60px;
  }

  #account {
    height: 22px;
  }
}
</style>


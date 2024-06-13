<template>
  <div class="footer">
    <ul class="list">
      <li>© OPUS 2024</li>
      <li><a>Hinweise</a></li>
      <li><a>Datenschutz</a></li>
      <li><a>Kontakt</a></li>
      <li><a>Barrierefreiheitserklärung</a></li>
      <li><a>Impressum</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer {
  background: #404040;
  font-size: 20px;
  font-weight: bold;
  color: #fdfdfd;
  padding: 1% 6%;
  border-top: #E8C325 solid 9px;
}

.list {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.list a {
  color: #fdfdfd;
  text-decoration: none;
  border-bottom: #fdfdfd solid 1px;
  cursor: pointer;
}

.list a:hover {
  border-bottom: rgba(253, 253, 253, 0) solid 1px;
}

@media only screen and (max-width: 480px) {
  .footer {
    font-size: 16px;
    border-top: #E8C325 solid 6px;
  }

  .list {
    list-style: none;
    display: block;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
}
</style>

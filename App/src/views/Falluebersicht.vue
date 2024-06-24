<template>
  <div class="case-overview">
    <img id="background" src="../assets/landesverwaltungsamt.jpeg" alt="background">
    <div class="menu-container">
      <div class="menu">
        <h1>Fallübersicht</h1>
        <div v-if="items.length">
          <div v-for="item in items" :key="item.aktenzeichen" class="item">
            <p><strong>Aktenzeichen:</strong> {{ item.aktenzeichen }}</p>
            <p><strong>Name:</strong> {{ item.nachname }}, {{ item.vorname }}</p><br>
            <p><strong>Beschreibung:</strong> {{ item.beschreibung }}</p>
          </div>
        </div>
        <div v-else>
          <p>Es wurden keine Fälle gefunden.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Falluebersicht',
  data() {
    return {
      items: []
    };
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
      try {
        const response = await fetch('http://localhost:5000/api/Offense');
        const result = await response.json();
        this.items = result.data;
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }
  }
};
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
  min-height: 520px;
}

.menu {
  padding: 1% 6%;
  font-size: 20px;
  font-weight: bold;
}

.menu .item {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  background: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.menu .item:hover {
  background: #E8C325;
}

.menu .item p {
  margin: 5px 0;
  font-size: 16px;
}

.menu .item p strong {
  color: #333;
}
</style>

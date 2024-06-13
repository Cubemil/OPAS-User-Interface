<template>
  <div class="case-overview">
    <Navbar/>
    <div class="case-overview-panel">
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
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/default/Navbar.vue';
import Footer from '@/components/default/Footer.vue';

export default {
  name: 'CaseOverview',
  components: {Navbar, Footer},
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

<style>
.case-overview-panel {
  position: relative;
  margin: 50px 80px 0 80px;
  padding: 20px;
  border-radius: 15px;
  background: #fdfdfd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.case-overview .item {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.case-overview .item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.case-overview .item p {
  margin: 5px 0;
  font-size: 16px;
}

.case-overview .item p strong {
  color: #333;
}
</style>

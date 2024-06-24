<template>
	<div class="container">
		<img id="background" src="@/assets/landesverwaltungsamt.jpeg" alt="background">
		<Eingabeformular/>
	</div>
</template>

<script>
import Eingabeformular from '../components/Eingabeformular.vue';
export default {
  components: { Eingabeformular },
	name: 'Ersterfassung',
};
</script>

<style scoped>
#background {
	height: 100%;
	width: 100%;
	z-index: -1;
}
</style>

<template>
  <router-link
    :to="{
      name: 'Detail',
      params: { id: starship.url.split('starships/')[1].slice(0, -1) },
    }"
  >
    <li class="list-item">
      <div class="card">
        <img class="card-img" src="../assets/img/starship.png" />
        <h3 class="ship-name">{{ starship.name }}</h3>
        <p><span class="ship-model">Model : </span>{{ starship.model }}</p>
        <p>
          <span class="ship-rating">Hyperdrive Rating : </span
          >{{ starship.hyperdrive_rating }}
        </p>
      </div>
    </li>
  </router-link>
</template>

<script>
export default {
  name: "StarshipItem",
  props: { starship: Object },
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 #ebed00;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  transition: 0.7s ease;
}
.card:hover {
  box-shadow: 0 8px 16px 0 #ebed00;
}
.card:hover .card-img {
  width: 110%;
  transition: 0.7s ease;
}

.card-img {
  width: 100%;
  transition: 1s ease;
}
.ship-name {
  width: 100%;
  padding: 4px;
  text-align: center;
  background-color: #ebed00;
  color: #000;
  font-size: 18px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-family: "StarWars";
}
.ship-model,
.ship-rating {
  color: #ebed00;
}
</style>

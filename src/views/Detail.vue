<template>
  <div class="detail-container">
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else class="detail-elements">
      <router-link to="/"><button class="btn">BACK</button></router-link>
      <div class="ship-details">
        <img src="../assets/img/starship.png" />
        <div>
          <h1>{{ starship.name }}</h1>
          <p><span class="ship-model">Model : </span>{{ starship.model }}</p>
          <p>
            <span class="ship-rating">Hyperdrive Rating : </span
            >{{ starship.hyperdrive_rating }}
          </p>
          <p>
            <span class="ship-passengers">Model : </span>{{ starship.model }}
          </p>
          <p>
            <span class="ship-speed">Hyperdrive Rating : </span
            >{{ starship.hyperdrive_rating }}
          </p>
          <p>
            <span class="ship-manufacturer">Model : </span>{{ starship.model }}
          </p>
          <p>
            <span class="ship-crew">Hyperdrive Rating : </span
            >{{ starship.hyperdrive_rating }}
          </p>
          <p>
            <span class="ship-capacity">Hyperdrive Rating : </span
            >{{ starship.hyperdrive_rating }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStarshipDetail } from "../services/index";

import Loading from "@/components/TheLoading.vue";

export default {
  name: "Detail",
  components: {
    Loading,
  },
  data() {
    return {
      starship: null,
      loading: false,
    };
  },
  methods: {
    async getStarshipDetail(id) {
      try {
        this.loading = true;

        const starshipData = await getStarshipDetail(id);
        this.starship = starshipData;

        this.loading = false;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getStarshipDetail(this.$route.params.id);
  },
};
</script>

<style>
.detail-container {
  text-align: left;
  padding: 40px 6%;
}
.detail-elements {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.ship-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
}
.ship-details p {
  font-size: 20px;
}
.ship-details p span {
  color: #ebed00;
}
.btn {
  color: #ebed00;
  position: relative;
  background: transparent;
  font-family: "StarWars";
  width: 110px;
  height: 50px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 7px;
}
.btn:hover {
  box-shadow: 0 0 6px #ebed00;
}
</style>

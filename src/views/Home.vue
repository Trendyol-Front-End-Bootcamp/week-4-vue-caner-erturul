<template>
  <div class="home">
    <SearchArea @search-starship="searchStarship" />

    <div v-if="loading">
      <Loading />
    </div>

    <div v-else>
      <div v-if="this.starships.length == 0">
        <NoResult />
      </div>
      <div v-else>
        <Pagination
          v-if="pagination"
          :pagination="pagination"
          @get-page="getPage"
        />

        <StarshipList :starships="starships" />

        <Pagination
          v-if="pagination"
          :pagination="pagination"
          @get-page="getPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import SearchArea from "@/components/SearchArea.vue";
import StarshipList from "@/components/StarshipList.vue";
import Pagination from "@/components/ThePagination.vue";
import Loading from "@/components/TheLoading.vue";
import NoResult from "@/components/NoResult.vue";

export default {
  name: "Home",
  components: {
    SearchArea,
    StarshipList,
    Pagination,
    Loading,
    NoResult,
  },
  data() {
    return {
      starships: [],
      loading: false,
      pagination: null,
    };
  },
  methods: {
    searchStarship(searchText) {
      this.loading = true;

      axios
        .get(`https://swapi.dev/api/starships/`, {
          params: {
            search: searchText,
          },
        })
        .then((response) => {
          const { count, next, previous, results } = response.data;

          this.starships = results;
          this.pagination = { count, next, previous };
          this.loading = false;
        });
    },

    getStarshipsData() {
      this.loading = true;

      axios.get("https://swapi.dev/api/starships/").then((response) => {
        const { count, next, previous, results } = response.data;

        this.starships = results;
        this.pagination = { count, next, previous };
        this.loading = false;
      });
    },

    getPage(url) {
      this.loading = true;

      axios.get(url).then((response) => {
        const { count, next, previous, results } = response.data;

        this.starships = results;
        this.pagination = { count, next, previous };
        this.loading = false;
      });
    },
  },

  created() {
    this.getStarshipsData();
  },
};
</script>

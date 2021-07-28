<template>
  <form @submit.prevent="onSubmit">
    <input
      class="search-text"
      type="search"
      placeholder="Enter model or name"
      v-model="searchText"
    />
    <button class="search-button">Search</button>
    <div v-if="searchText != ''">
      <button class="reset-button" @click="resetInput">Clear</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchArea",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("search-starship", this.searchText);
    },
    resetInput() {
      this.searchText = "";
      this.onSubmit();
    },
  },
};
</script>
<style>
form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.search-text {
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ebed00;
  background-color: #000;
  font-size: 18px;
}
::placeholder {
  color: #ebed00;
}
.search-button,
.reset-button {
  background-color: #ebed00;
  border: none;
  color: #000;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 7px;
  height: 44px;
}
</style>

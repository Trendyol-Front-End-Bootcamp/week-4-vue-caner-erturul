<template>
  <div class="buttons-container">
    <button
      class="btn-prev"
      v-if="pagination.previous"
      @click="$emit('get-page', pagination.previous)"
    >
      PREVIOUS
    </button>
    <button
      class="btn-next"
      v-if="pagination.next"
      @click="$emit('get-page', pagination.next)"
    >
      NEXT
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: { pagination: Object },
};
</script>

<style>
.buttons-container {
  display: flex;
  justify-content: flex-end;
  width: 1080px;
  margin: 0 auto;
  padding-top: 50px;
  gap: 860px;
}
.btn-prev,
.btn-next {
  color: #ebed00;
  position: relative;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
  transition: ease 0.4s;
  border-radius: 7px;
  padding: 13px;
}
.btn:hover {
  box-shadow: 0 0 6px #ebed00;
  transition: ease 0.4s;
}
</style>

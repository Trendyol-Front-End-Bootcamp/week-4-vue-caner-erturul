<template>
  <div class="no-result">
    <div class="no-result-text">NO RESULT FOUND...</div>
    <img src="../assets/img/yoda.png" />
  </div>
</template>

<script>
export default {
  name: "NoResult",
};
</script>
<style>
.no-result {
  display: flex;
  align-items: center;
  gap: 25px;
  flex-direction: column;
  margin-top: 35px;
}
.no-result-text {
  color: #ebed00;
  font-size: 35px;
}
</style>

<template>
  <div class="pill">
    <span class="pill-name">{{ name }}</span>
    <span class="pill-amount">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  props: ["name", "amount"],
};
</script>

<style scoped>
.pill {
  min-width: fit-content;
  width: 120px ;
  height: auto;
  min-height: 60px;

  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;

  padding: 1rem;

  background: crimson;
  color: #eee;
}

.pill-amount {
  border-radius: 50px;
  padding: 5px;
  font-weight: bold;
  background: #eee;
  color: crimson;
}
</style>
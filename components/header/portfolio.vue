<template>
    <div class="header">
      <div v-for="item in header" :key="item.value">
        <button
          @click="setFilter(item.value)"
          class="custom-link"
          :class="{ 'active-link': item.value === current }"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        header: [
          { name: "All", value: "*" },
          { name: "Video", value: "video" },
          { name: "Fotografia", value: "fotografia" },
          { name: "Design", value: "design" },
          { name: "Social Media", value:"social-media"}
        ]
      };
    },
    props: {
      current: {
        type: String,
        required: true
      }
    },
    methods: {
      setFilter(value) {
        console.log("teste");
        this.$emit("filter", value);
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    max-height: 2rem;
    padding: 1.5rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    padding: 2.5rem 0;
    gap: 3rem;
  }
  
  .custom-link {
    text-decoration: none; /* Remove the underline */
    color: rgba(87, 94, 96, 255);
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    font-family: ChampagneLimousinesBold;
  }
  
  .active-link {
    color: rgb(253, 253, 253);
    font-family: ChampagneLimousinesBold;
  }
  </style>
  
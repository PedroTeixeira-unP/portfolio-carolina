<template>
    <div class="slider">
      <div class="slider-container">
        <button class="slider-close" @click="$emit('close')">&times;</button>
        <div class="slider-wrapper">
          <div class="slider-slide" v-for="(image, index) in images" :key="index" :class="{ active: index === currentSlide }">
            <img :src="'/img/'+image.src" :alt="image.alt" />
          </div>
        </div>
        <div class="slider-controls">
          <button class="slider-control" @click="prevSlide">&#10094;</button>
          <button class="slider-control" @click="nextSlide">&#10095;</button>
        </div>
      </div>
    </div>
  </template>  
  
  <script>
  export default {
    data() {
      return {
        currentSlide: 0
      };
    },
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    methods: {
      prevSlide() {
        if (this.currentSlide > 0) {
          this.currentSlide--;
        }
      },
      nextSlide() {
        if (this.currentSlide < this.images.length - 1) {
          this.currentSlide++;
        }
      },
      handleKeyPress(event) {
        if (event.key === 'ArrowLeft') {
          this.prevSlide();
        } else if (event.key === 'ArrowRight') {
          this.nextSlide();
        }
      }
    },
    mounted() {
      document.addEventListener('keydown', this.handleKeyPress);
    },
    beforeUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
  };
  </script>
  <style scoped>
.slider {
  position: relative;
  overflow: hidden;
}

.slider-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 9999;
}

.slider-close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;
}

.slider-wrapper {
  height: 100%;
}

.slider-slide {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.slider-slide.active {
  opacity: 1;
}

.slider-slide img {
  max-width: 100%;
  max-height: 100%;
}

.slider-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1;
}

.slider-control {
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.slider-control:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>

  
<template>
    <HeaderPortfolio/>
    <div class="content">
        <div class="grid-item" v-for="(item, index) in portfolio">
            <img :src="'/img/'+item.image" />
            <div class="overlay">
                <div class="text">{{item.title}} {{ index + 1 }}<br/>{{item.description}} {{ index + 1 }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import data from '../../assets/json/data.json'
export default {
    data(){
        return{
            portfolio: data.portfolio
        }
    }
}
</script>
<style scoped>
h1{
    width: 100%;
    text-align: center;
}
.content {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 2rem 8rem 8rem;
    gap: 1rem;
}

@media only screen and (max-width: 1100px) {
    .content {
        display: grid;
        grid-template-columns: auto auto;
    }
}

@media only screen and (max-width: 800px) {
    .content {
        display: grid;
        grid-template-columns: auto;
    }
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
    overflow: visible;
}
.grid-item > img {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.overlay {
  position: relative;
  height: 101%;
  width: 100%;
  transform: translateY(calc(-100% - .4rem));
  transition: ease-in-out .4s;
  opacity: 0;
  background-color: #000000a9;
}

.grid-item:hover .overlay {
  opacity: 1;
}

.text {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
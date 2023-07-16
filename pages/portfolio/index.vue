<template>
    <HeaderPortfolio :current="filter" @filter="setFilter" />
    <div class="content">
        <div class="grid-item" v-for="(item, index) in filteredOrders">
            <img :src="'/img/'+item.image" />
            <div class="overlay">
                <div class="hover">
                    <div>
                        <div class="text">
                        {{item.title}}<br/>
                        {{item.description}}<br/>
                        {{item.year}}<br/>
                        </div>
                        <div class="social">
                            <a v-if="item.facebook" :href="item.facebook" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                            </a>
                            <a v-if="item.instagram" :href="item.instagram" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                    <path d="M16.5 7.5l0 .01"></path>
                                </svg>
                            </a>
                            <a v-if="item.youtube" :href="item.youtube" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                                    <path d="M10 9l5 3l-5 3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>
<script>
import data from '../../assets/json/data.json'
export default {
    data(){
        return{
            portfolio: data.portfolio,
            filter: '*'
        }
    },
    computed: {
        filteredOrders() {
            if (this.filter === '*') {
                return this.portfolio; // Return all items if filter is '*'
            } else {
                return this.portfolio.filter((item) => {return item.type.includes(this.filter)});
            }
        }
    },
    methods: {
        setFilter(n) {
            console.log(n)
            this.filter = n; // Update the filter value
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
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem 8rem 8rem;
    gap: 1rem;
    font-family: ChampagneLimousines;
}

@media only screen and (max-width: 1500px) {
    .content {
        display: grid;
        padding: 2rem 4rem 4rem;
        grid-template-columns: auto auto;
    }
}

@media only screen and (max-width: 800px) {
    .content {
        display: grid;
        padding: 2rem 2rem 2rem;
        grid-template-columns: auto;
    }
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
    overflow: visible;
    height: 500px;
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
.hover {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.text {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
}

.social svg{
    color: white;
    stroke: white;
    width: 50px;
    height: 50px;
}
</style>
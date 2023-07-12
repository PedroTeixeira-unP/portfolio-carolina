<template>
    <div class="page">
        <div class="left">
            <div class="square"> 
                    <div class="row-center">
                    <img src="/img/carolina-profile.jpg" alt="Carolina Araújo" />
                    </div>
                    <div class="row-center">
                    <span>Carolina Araujo</span>
                    </div>
                    <div class="row-center">
                    <p>VIDEO | FOTOGRAFIA | DESIGN</p>
                    </div>
            </div>
        </div>
        <div class="right">
            <Header/>
            <div class="content">
                <span>Olá! Sê muito bem-vind@!<br/><br/>É um prazer receber-te aqui e partilhar contigo um pouco do meu trabalho e experiência. Este espaço fornece-te uma visão geral das minhas habilidades, comepetências e conquistas que adquiri ao longo dos anos.</span>
            </div>
        </div>
    </div>
</template>  
<style scoped>
.page {
    display: flex;
    /* flex-direction: column; */
    height: 100vh; /* Set the container to full viewport height */
}
.left {
    width: 50%;
    height: 100%;
}
.right {
    width: 50%;
    height: 100%;
}
.content {
    display: flex;
    align-items: center;
    width: 75%;
    height: calc(90% - 3rem);
    color: white;
    line-height: 2;
    font-size: 1.5rem;
}
.square {
    color: white;
    width:calc(100% - 14rem);
    height:calc(100% - 22rem);
    display: grid;
    grid-template-columns: auto;
    gap: 0;
    justify-content: center;
    margin: 11rem 7rem;
    /* box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12); */
}
.row-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.row-center > span {
    font-size: 2.5rem;
}
.row-center > p {
    font-size: 1.2rem;
}
img {
    width: 20rem;
    height: 20rem;
    border: solid 10px white;
    border-radius: 50%;
    object-fit: cover;
}
.line {
    width: 10px;
    height: 1px;
}
.line::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 10%;
  height: 2px;
  background-color: #000;
}
</style>
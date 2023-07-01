<template>
    <div class="page">
        <Header/>
        <div class="content">
            <div class="left"></div>
            <div class="right">
                <div class="square"> 
                     <div class="row-center">
                        <img src="/img/carolina.jpg" alt="Carolina Araújo" />
                     </div>
                     <div class="row-center">
                     <h1>Carolina Araujo</h1>
                     </div>
                     <div class="row-center">
                     <div class="line"></div>
                     </div>
                     <div class="row-center">
                     <p>ALGUMA COISA</p>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>  
<style scoped>
.page {
    display: flex;
    flex-direction: column;
    height: 100vh; /* Set the container to full viewport height */
}
.content {
    flex: 1; /* Allow the content to grow and fill the remaining height */
    display: flex;
    width: 100%;
}
.left {
    width: 40%;
    background-color: bisque;
}
.right {
    width: 60%;
    /* background-color: red; */
    padding: 10% 0;
}
.square {
    transform: translateX(-50%);
    background-color: rgb(250, 238, 222);
    width:30%;
    height:70%;
    display: grid;
    grid-template-columns: auto;
    gap: 10px;
    justify-content: center;
    padding: 3rem;
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12);
}
.row-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
img {
    width: 10rem;
    height: 10rem;
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
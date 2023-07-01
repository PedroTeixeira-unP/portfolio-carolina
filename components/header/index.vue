<template>
    <div class="header">
        <div class="left">
            <div class="square"></div>
            <span>Carolina Araújo </span>  / Alguma coisa
        </div>
        <div class="right">  
            <NuxtLink to="/" exact active-class="active-link" class="custom-link">Home page</NuxtLink>
            <NuxtLink to="/portfolio" active-class="active-link" class="custom-link">portfolio</NuxtLink>
        </div>
    </div>
</template>
<style scoped>
.header {
    display: flex;
    align-items: center;
    height: 3rem;
    max-height: 3rem;
    padding: 1.5rem;
}
.left {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 1.4rem;
}
.square {
    width: 10px;
    height: 10px;
    background-color: red;
    margin-right: .5rem;
}
span {
    font-weight: bold;
    margin-right: .5rem;
    text-transform: capitalize;
    font-size: 1.5rem;
}
.right {
    margin-left: auto; /* Pushes the content to the right side */
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 1rem;
    gap: 1rem;
}
.custom-link {
  text-decoration: none; /* Remove the underline */
  color: black;
}
.active-link {
    color: red;
}

</style>
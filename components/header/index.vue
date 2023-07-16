<template>
    <div class="header">
        <a href="/docs/CV_CAROLINA.pdf" class="custom-link" download>CURRICULUM VITAE</a>
        <NuxtLink to="/portfolio" class="custom-link">PORTFOLIO</NuxtLink>
        <!-- <NuxtLink to="/contactos" class="custom-link">CONTACTOS</NuxtLink> -->
    </div>
</template>
<style scoped>
.header {
    display: flex;
    align-items: center;
    height: 3rem;
    max-height: 3rem;
    padding: 1.5rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    padding: 2.5rem 0;
    gap: 3rem;
    /* justify-content: right; */
    width: 75%;
    font-family: ChampagneLimousinesBold;
}
.custom-link {
  text-decoration: none; /* Remove the underline */
  color: rgb(255, 255, 255);
}
.active-link {
    color: red;
}

</style>
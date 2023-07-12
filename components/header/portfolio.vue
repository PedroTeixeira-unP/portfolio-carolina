<template>
    <div class="header">
        <NuxtLink to="/" class="custom-link">All</NuxtLink>
        <NuxtLink to="/portfolio" class="custom-link">Video</NuxtLink>
        <NuxtLink to="/contactos" class="custom-link">Fotografia</NuxtLink>
    </div>
</template>
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
  color: rgba(87,94,96,255);
}
.active-link {
    color: red;
}

</style>
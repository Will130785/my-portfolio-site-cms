<template>
  <nav class="sidebar" :class="{ 'sidebar-active': getSidebarStatus }">
    <ul class="sidebar__links">
      <li class="sidebar__link"
        v-for="(link, index) in testGetLinks"
        :key="index">
        <router-link :to="{ name: link.link }">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['testGetLinks', 'getSidebarStatus'])
  },
  methods: {
    ...mapActions(['sidebarStatusAction'])
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  height: 100%;
  position: absolute;
  background-color: #fff;
  z-index: 2;
  width: 100%;
  border: 1px solid #000;
  left: -100%;
  transition: all .3s ease;

  @media only screen and (min-width: 750px) {
    position: relative;
    width: 30%;
    left: 0;
  }

  &__links {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }

  &__link {
    width: 100%;

    a {
      display: block;
      width: 100%;
      text-align: center;
      color: #000;
      text-decoration: none;
      font-size: 1.6rem;
    }
  }
}

// Bind class to sidebar
.sidebar-active {
  left: 0;
}
</style>
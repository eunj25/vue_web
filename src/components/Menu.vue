<template>
  <nav class="menu">
    <ul>
      <li v-for="(menuItem, index) in menuItems" :key="index">
        <a :href="baseRoute + menuItem.link">{{ menuItem.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['menuItems','baseRoute']
}
</script>
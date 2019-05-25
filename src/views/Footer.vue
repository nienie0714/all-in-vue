<template>
  <footer class="app-foot">
      Copyright © 1996-? Niexinyu, Inc All Rights Reserved.
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    let now = new Date()
    let year = now.getFullYear()
    return {
      year
    }
  }
}
</script>

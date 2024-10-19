<template>
  <svg-icon type="mdi" :path="path"></svg-icon>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHandHeartOutline } from '@mdi/js';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
      path: mdiHandHeartOutline,
    }
  }
}
</script>
Suggest a tag
Suggest an alias
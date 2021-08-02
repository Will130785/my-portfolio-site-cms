<template>
  <div :id="modalId" class="modal-btn">
    <button>{{ buttonTxt }}</button>
  </div>
</template>

<script>
export default {
  props: ['modalId', 'buttonTxt'] 
}
</script>
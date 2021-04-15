<template>
  <div class="CuttingLine"
       :style="{ height }">
    <div class="line">分割线</div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    height: {
      type: String,
      default: '100vh',
    },
  },
  data() {
    return {};
  },
  setup(props: object, context: object) {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.CuttingLine {
  display: flex;
  align-items: center;
  .line {
    width: 100%;
    line-height: 30px;
    text-align: center;
    color: #666;
    position: relative;
    &:before,
    &:after {
      content: '';
      width: 45%;
      border: 1px dashed #666;
      position: absolute;
      top: 50%;
    }
    &:before {
      left: 0;
    }
    &::after {
      right: 0;
    }
  }
}
</style>
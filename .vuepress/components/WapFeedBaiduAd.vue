<template>
  <div class="_vwkoulqtfei"></div>
</template>

<script>
export default {
  methods: {
    /**
     * 加载百度广告
     * id值从百度联盟后台获取
     */
    loadBaiduAdAsync () {
      (window.slotbydup = window.slotbydup || []).push({
        id: "u1111111",
        container: "_vwkoulqtfei",
        async: true
      });
    }
  },
  mounted () {
    // 加载百度广告
    this.loadBaiduAdAsync();
  }
};
</script>

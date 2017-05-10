<template>
    <div class="home">
        <router-link to="/star">评星组件</router-link>
        <router-link to="/datepicker">时间区间选择组件</router-link>
        <router-link to="/animationmenu">右下角小菜单</router-link>
        <router-link to="/touchleft">qq左滑删除组件</router-link>
        <router-link to="/pullrefresh">下拉刷新、上滑加载</router-link>
    </div>
</template>
<script>
export default {
    name: "home",
    data () {
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
    .home {
        
    }
</style>
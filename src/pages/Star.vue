<template>
    <div class="star">
        <div class="star-item">
            <h2>尺寸为48,评分为4.8</h2>
            <v-star :size="48" :score="4.8"></v-star>
        </div>
        <div class="star-item">
            <h2>尺寸为36,评分为4.2</h2>
            <v-star :size="36" :score="4.2"></v-star>
        </div>
        <div class="star-item">
            <h2>尺寸为24,评分为3.6</h2>
            <v-star :size="24" :score="3.6"></v-star>
        </div>      
    </div>
</template>

<script>
import star from '@/components/star/star'
export default {
    name: "star",
    data () {
        return {
        }
    },
    components: {
        'v-star': star
    }
}
</script>

<style lang="scss" scoped>
    .star {
        .star-item {
            margin-top: 30px;
            h2 {
                font-size: 18px;
            }
        }    
    }
</style>
<template>
    <div class="date-picker">
        <div class="form-group">
			<span>开始时间：</span>
			<input type="text" class="form-control beginTime"  placeholder="活动开始时间" required v-model="beginTime" readonly="" @click="showPicker">
		</div>
		<div class="form-group">
			<span>结束时间：</span>
			<input type="text" class="form-control endTime" placeholder="活动结束时间" v-model="endTime" readonly="" @click="showPicker">
		</div>
        <date-picker @confirm="confirm" v-show="showTimePicker"></date-picker>
    </div>
</template>

<script>
import datePicker from '@/components/datePicker/datePicker'
export default {
    name: "star",
    data () {
        return {
            showTimePicker: false,
            beginTime: '',
            endTime: ''
        }
    },
    components: {
        datePicker
    },
    methods: {
        confirm(startDate, endDate) {
            this.beginTime = startDate
			this.endTime = endDate
            this.showTimePicker = false
		},
        showPicker() {
            this.showTimePicker = true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../common/style/function';
    .date-picker {
        .form-group {
            display: flex;
            border-bottom: 1px solid #d8d8d8;
            line-height: px2rem(100px);
            span {
                width: px2rem(150px);
                padding: 0 px2rem(20px);
            }
            input {
                border: none;
                width: 100%;
                height: px2rem(80px);
                line-height: px2rem(80px);
                margin-top: px2rem(10px);
                box-shadow: none;
            }
        }
    }
</style>
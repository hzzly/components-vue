<template>
    <div>
        <day-count-down :endTime="endTime" :callback="dayCallback" endText="已经结束了">
        </day-count-down>
        <sms-count-down :callback="smsCallback"></sms-count-down>
    </div>
</template>

<script>
    import DayCountDown from '../components/countDown/dayCountDown.vue'
    import SmsCountDown from '../components/countDown/smsCountDown.vue'
    export default {
        components: {
            'day-count-down': DayCountDown,
            'sms-count-down': SmsCountDown,
        },
        data() {
            return {
                endTime: ''
            }
        },
        created() {
            var strtime = '2018-05-10 16:26:00';
            var date = new Date(strtime);
            this.endTime = date.getTime()/1000 + ''
        },
        methods: {
            dayCallback() {
                alert('天数倒计时结束')
            },
            smsCallback() {
                alert('短信倒计时结束')
            }
        }
    }
</script>
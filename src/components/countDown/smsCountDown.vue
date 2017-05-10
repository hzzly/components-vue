<template>
    <div @click="send">
        <slot>
            {{content}}
        </slot>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                content: '获取验证码',
                timeOut: 60
            }
        },
        props:{
            callback : {
                type : Function,
                default :''
            }
        },
        methods: {
            send() {
                if(this.timeOut === 60) {
                    this.countdowm()
                }
            },
            countdowm(){
                let timer = setInterval(() => {
                    if(this.timeOut > 0) {
                        this.timeOut--
                        this.content = `${this.timeOut}秒重新获取`;
                    } else {
                        clearInterval(timer);
                        this.timeOut = 60
                        this.content = '获取验证码';
                        this._callback();
                    }
                },1000);
            },
            _callback(){
                if(this.callback && this.callback instanceof Function){
                    this.callback(...this);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
div {
    display: flex;
    width: 50%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    justify-content: center;
    border-top: 1px solid #0bd38a;
    border-bottom: 1px solid #0bd38a;
    margin: 30px 25%;
    cursor: pointer;
}
</style>


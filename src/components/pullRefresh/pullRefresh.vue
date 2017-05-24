<template>
    <div class="yo-scroll" :class="{'down':(state===0),'up':(state===1),'refresh':(state===2),'ok':(state===3)}" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
        <section class="inner" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }">
            <header class="pull-refresh">
                <slot name="pull-refresh">
                    <span class="down-tip">下拉更新</span>
                    <span class="up-tip">松开刷新数据</span>
                    <span class="refresh-tip">加载中……</span>
                    <span class="ok-tip">加载完成</span>
                </slot>
            </header>
            <slot>
			</slot>
            <footer class="load-more">
                <slot name="load-more">
                    <span v-show="downFlag === false">上滑加载更多</span>
					<span v-show="downFlag === true">加载中……</span>
                </slot>
            </footer>
            <div class="nullData" v-show="dataList.noFlag">暂无更多数据</div>
        </section>
    </div>
</template>

<script>
    export default {
        props: {
            offset: {
				type: Number,
				default: 70 //默认高度
			},
            dataList: {
                type: Object,
                required: false
            },
            onRefresh: {
				type: Function,
				default: undefined,
				required: false
			},
            onInfinite: {
				type: Function,
				default: undefined,
				require: false
			},
            enableRefresh: {
				type: Boolean,
				default: true
			},
            enableInfinite: {
				type: Boolean,
				default: true
			},
        },
        data() {
            return {
                top: 0,
                state: 0,
                startX: 0,
				startY: 0,
                downFlag: false,
            }
        },
        
        methods: {
            touchStart(e) {
                this.startX = e.targetTouches[0].pageX
                this.startY = e.targetTouches[0].pageY

                // this.dataList.noFlag = false;
            },
            touchMove(e) {
                if (!this.enableRefresh) {
                    return
                }
                let startScroll = this.$el.scrollTop
                let diff = e.targetTouches[0].pageY - this.startY - startScroll
                // if(diff > 0) e.preventDefault()
                this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)
                // console.log(this.top)
                if(this.state === 2) { // in refreshing
					return
				}
                // console.log(diff)
                if(this.top >= this.offset) {
					this.state = 1
				} else {
					this.state = 0
				}
            },
            touchEnd(e) {
                if(!this.enableRefresh) {
					return
				}
                if(this.state === 2) { // in refreshing
					this.state = 2
					this.top = this.offset
					return
				}
                if(this.top >= this.offset) { // do refresh
					this.refresh()
				} else { // cancel refresh
					this.state = 0
					this.top = 0
				}

                //用于判断滑动是否在原地 ----begin
				let endX = e.changedTouches[0].pageX,
					endY = e.changedTouches[0].pageY,
					dy = this.startY - endY,
					dx = endX - this.startX;

				//如果滑动距离太短  
				if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
					console.log("滑动距离太短")
					return;
				}

                if(!this.enableInfinite || this.infiniteLoading) {
					return
				}

                let outerHeight = this.$el.clientHeight,
					innerHeight = this.$el.querySelector('.inner').clientHeight,
					scrollTop = this.$el.scrollTop,
					ptrHeight = this.onRefresh ? this.$el.querySelector('.pull-refresh').clientHeight : 0,
					bottom = innerHeight - outerHeight - scrollTop,
                    scrollH = endY - this.startY;
				if(bottom < this.offset && this.state === 0 && scrollH < -40) {
					this.downFlag = true;
					this.infinite();
				} else {
					this.downFlag = false;
				}
                // console.log(e)
            },

            refresh() {
				this.state = 2;
				this.top = this.offset;
				setTimeout(() => {
					this.onRefresh(this.refreshDoneok, this.refreshDonetoTop)
				}, 2000);
			},
            refreshDoneok() {
                this.state = 3
            },
            refreshDonetoTop() {
				this.top = 0	              
			},
            infinite() {
                this.downFlag = true
				setTimeout(() => {
					this.onInfinite(this.infiniteDone);
				}, 2000);
			},
            infiniteDone() {
				this.downFlag = false
			}
        },
    }
</script>

<style lang="scss" scoped>
.yo-scroll {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    .inner {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        min-height: 100%;
        transition-duration: 300ms;
        position: absolute;
        top: -50px;
        .pull-refresh {
            width: 100%;
            height: 50px;
            line-height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .load-more,.nullData {
            width: 100%;
            height: 50px;
            line-height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .down-tip,
    .refresh-tip,
    .up-tip,
    .ok-tip {
        display: none;
    }
}

.yo-scroll.down .down-tip {
    display: block;
}

.yo-scroll.up .up-tip {
    display: block;
}

.yo-scroll.refresh .refresh-tip {
    display: block;
}
.yo-scroll.ok .ok-tip {
    display: block;
}
</style>


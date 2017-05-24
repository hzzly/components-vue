<template>
	<v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData" :enable-refresh="enableRefresh" :enable-infinite="enableInfinite">
			<ul class="data-list-hock">
				<li v-for="(item,index) in listdata">{{item.name}}</li>
				<li v-for="(item,index) in downdata">{{item.name}}</li>
			</ul>
		</v-scroll>
</template>
<style lang="scss" scoped>
    // html,body,#app {
    //     height: 100%;
    // }
	ul li {
		min-height: 60px;
		line-height: 60px;
		text-align: center;
		border-bottom: 1px solid #f5f5f5;
	}
</style>
<script>
import VScroll from '../components/pullRefresh/pullRefresh.vue'
	export default {
		components: {
			VScroll
		},
		data() {
			return {
				counter: 1, //当前页
				num: 15, // 一页显示多少条
				pageStart: 0, // 上拉加载开始的数
				pageEnd: 0, // 结束加载的数
				listdata: [], // 下拉更新数据存放数组
				downdata: [], // 上拉更多的数据存放数组
                scrollData: {
                    noFlag: false //暂无更多数据显示
                },
                enableInfinite: true,
                enableRefresh: true
			}
		},
		mounted: function() {
			this.getList();
            this.$nextTick(() => {
                let outerH = document.querySelector('body').clientHeight //屏幕高度
                let contentH = document.querySelector('.data-list-hock').clientHeight  //数据列表高度
                if (contentH <= outerH) {
                    this.enableInfinite = false
                    document.querySelector('.load-more').style.display = 'none';
                }
            })
		},
		methods: {
			getList() {
				var response = []
				for(let i = 0; i < 60; i++) {
					response.push({
						name: i
					})
				}
				this.listdata = response.slice(0, this.num);
			},
			onRefresh(doneok, donetop) {
				var response = []
                let i = Math.round(Math.random() * 10 + 1)
				for(i; i < 60; i++) {
					response.push({
						name: i
					})
				}
                console.log('刷新了数据')
				this.listdata = response.slice(0, this.num);

				doneok(); // call done
                setTimeout(() => {
                    donetop()
                }, 300);

			},
			onInfinite(done) {
				this.counter++;
				let end = this.pageEnd = this.num * this.counter;
				let i = this.pageStart = this.pageEnd - this.num;

				for(i; i < end; i++) {
					if(i >= 50) {

						//走完数据调用方法
						this.scrollData.noFlag = true;
                        this.$el.querySelector('.load-more').style.display = 'none';
						break;
					} else {
						this.downdata.push({
							name: i + "==="
						})
					}
				}

                done()
			}
		}

	}
</script>


<template>
	<div>
		<transition-group name="slide" tag="ul" class="list-wrapper">
			<li class="list" v-for="(item, index) in lists" :key="item">
				<v-touch class="vuetouch" v-on:swipeleft="showBtn(index)" v-on:swiperight="hideBtn(index)">
					<span class="text">{{item.text}}</span>
					<transition name="move">
						<button class="del-btn" @click="delList(index)" v-show="item.show">删除</button>
					</transition>
				</v-touch>
				
			</li>
		</transition-group>
	</div>
</template>

<script>
	export default {
		props: {
			lists: Array
		},
		data() {
			return {
				
			}
		},
		methods: {
			delList(index) {
				this.lists.splice(index, 1)
			},
			hideBtn(index) {
				this.lists[index].show = false
			},
			showBtn(index) {
				this.lists.forEach((item) => {
					item.show = false
				})
				this.lists[index].show = true
			},
		}
	}
</script>

<style lang="scss">
	.add-btn {
		border: none;
	    width: 50px;
	    height: 40px;
	    margin: 10px;
	    background: red;
	    color: #fff;
	    cursor: pointer;
	}
	.list,.vuetouch {
		display: flex;
		width: 100%;
		height: 40px;
		line-height: 40px;
		margin-bottom: 10px;
		color: #666;
		font-size: 14px;
		background: #eee;
		transition: all .4s;
		&.slide-move {
			transition: transform 1s;
		}
		&.slide-enter {
			transform: translate3d(-100%, 0, 0);
		}
		&.slide-leave-active {
			position: absolute;
			transform: translate3d(-100%, 0, 0);
		}
		&:last-child {
			margin-bottom: 0;
		}
		.del-btn {
			flex: 0 0 60px;
			border: none;
			outline: none;
			color: #fff;
			background: red;
			transition: all .4s;
			&.move-enter, &.move-leave-active {
				transform: translate3d(70px, 0, 0);
			}
		}
		.text {
			flex: 1;
			padding-left: 20px;
		}
	}
</style>
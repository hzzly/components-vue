<template>
	<div class="star" :class="starType">
		<span :class="itemClass" class="star-item" v-for="(itemClass,index) in itemClasses"></span>
	</div>
</template>

<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default {
	props: {
		size: {
			type: Number
		},
		score: {
			type: Number
		}
	},
	computed: {
		starType() {
			return 'star-'+this.size
		},
		itemClasses() {
			let result = []
			let score = Math.floor(this.score * 2) / 2
			let hasDecimal = score % 1 !== 0
			let integer = Math.floor(score)
			for (var i = 0; i < integer; i++) {
				result.push(CLS_ON)
			}
			if (hasDecimal) {
				result.push(CLS_HALF)
			}
			while(result.length < LENGTH) {
				result.push(CLS_OFF)
			}

			return result
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../common/style/mixin';

.star{
	.star-item{
		display: inline-block;
		background-repeat: no-repeat;
	}
	&.star-48{
		.star-item{
			width: 20px;
			height: 20px;
			margin-right: 20px;
			background-size: cover;
			&:last-child{
				margin-left: 0;
			}
			&.on{
				@include bg-image('images/star48_on')
			}
			&.half{
				@include bg-image('images/star48_half')
			}
			&.off{
				@include bg-image('images/star48_off')
			}
		}
	}
	&.star-36{
		.star-item{
			width: 15px;
			height: 15px;
			margin-right: 15px;
			background-size: cover;
			&:last-child{
				margin-left: 0;
			}
			&.on{
				@include bg-image('images/star36_on')
			}
			&.half{
				@include bg-image('images/star36_half')
			}
			&.off{
				@include bg-image('images/star36_off')
			}
		}
	}
	&.star-24{
		.star-item{
			width: 10px;
			height: 10px;
			margin-right: 10px;
			background-size: cover;
			&:last-child{
				margin-left: 0;
			}
			&.on{
				@include bg-image('images/star24_on')
			}
			&.half{
				@include bg-image('images/star24_half')
			}
			&.off{
				@include bg-image('images/star24_off')
			}
		}
	}
	
}
</style>
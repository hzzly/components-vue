<template>
    <div>
        <button @click="add" class="add-btn">+</button>
        <touch-left :lists="lists"></touch-left>
    </div>    
</template>

<script>
    import touchLeft from '../components/touchLeft/touchLeft.vue'
    export default {
        data() {
            return {
                lists: [
					{ text: 'todo1', show: false },
					{ text: 'todo1', show: false },
					{ text: 'todo1', show: false },
					{ text: 'todo1', show: false },
				]
            }
        },
        components: {
            touchLeft
        },
        methods: {
            add() {
				let list = {
					text: 'new todo', show: false
				}
				this.lists.push(list)
			},
        }
    }
</script>
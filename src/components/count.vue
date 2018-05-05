<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <!-- <h3>{{$store.state.count}}</h3> -->
        <h3>{{$store.state.count}}--{{count}}</h3>
        <button @click="add(3)">+</button>
        <button @click="reduce">-</button>
        <p>
            <button @click="addAction">+异步</button>
            <button @click="reduceAction">-异步</button>
        </p>
        <h3>{{$store.state.a.count}}</h3>
    </div>
</template>
<script>
    import store from '@/vuex/store'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default{
        data(){
            return{
                msg:'Hello Vuex',
 
            }
        },
        // computed:{
        //     count(){
        //         return this.$store.state.count;
        //     }
        // }, 
        computed:{
            ...mapState(["count"]),
            // count(){
            //     return this.$store.getters.count;
            // }
            ...mapGetters(["count"]),
            count(){
                return this.$store.state.a.count;
            }
        },
        // methods:mapMutations([
        //         'add','reduce'
        // ]),
        methods:{
            ...mapMutations([  
                'add','reduce'
            ]),
            ...mapActions(['addAction','reduceAction'])
        },
        store  
    }
</script>
<style scoped>
</style>
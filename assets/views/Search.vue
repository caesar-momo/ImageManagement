<template>
    <div>
        <h1>Search</h1>
        <!-- {{gallery}} -->
        <input type="text" v-model="search" placeholder="Search tags...">
        <label >Search title:</label>
        <div v-html="Search_tag()">
            <div v-for="img in result" :key="img.id">
                <img :src="img.url" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import router from '../router';

export default {
    data(){
        return{
            gallery:{},
            search:"",
            result:[]
        }
    },
    created(){
        this.gallery=this.$route.params.gallery;
    },
    methods:{
        Search_tag(){
            this.result=[];
            if(!this.search){
                return "no result";
            }
            var key=this.search;
            this.gallery.map(function(cur,index){
                cur.tags.map(function(tag,index){
                    if(key=="pet"){
                        result.push(0);
                        result.push(1);
                        return result;
                    }
                    if(tag.search(key)>-1){
                        return result.push(index);
                    }
                })
            })
        }
    }
}
</script>

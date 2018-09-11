<template>
    <div>
        <router-link to="/">home</router-link>
        <h1>Search</h1>
        <input type="text" v-model="search" placeholder="Search tags...">
        <label >Search title:</label>
        <div v-html="Search_tag()">
            <!-- <div v-for="img in result" :key="img.id">
                <img :src="img.url" alt="">
            </div> -->
        </div>
    </div>
</template>
<script>
import router from '../router';
import { log } from 'util';

export default {
    data(){
        return{
            gallery:{},
            search:"",
            result:[{}]
        }
    },
    created(){
        this.gallery=this.$route.params.gallery;
    },
    methods:{
        Search_tag(){
            this.result=[{}];
            if(!this.search){
                return "no result";
            }
            var key=this.search;
            const first=this.gallery[0].tags;
            const second=this.gallery[1].tags;
            const url_array=[];
            if(first.indexOf(key)>-1){
                this.gallery[0].photos.map(function(cur){
                    url_array.push(cur);
                })
            }
            if(second.indexOf(key)>-1){
                this.gallery[1].photos.map(function(cur){
                    url_array.push(cur);
                })
            }
            console.log(url_array);
            this.result.concat(url_array);
        }
    }
}
</script>

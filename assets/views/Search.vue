<template>
    <div>
        <router-link to="/">home</router-link>
        <h1>Search</h1>
        <input type="text" v-model="search" placeholder="Search tags..." @keyup.13="Search_tag()">
        <br>
        <label >Search title:</label>
        <div v-for="img in search_result" :key="img.id">
            <img :src="img.url" alt="">
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
            search_result:{}
        }
    },
    created(){
        this.gallery=this.$route.params.gallery;
    },
    methods:{
        Search_tag(){
            this.search_result={};
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
                this.gallery[1].photos.map(function(cur1){
                    url_array.push(cur1);
                })
            }
            this.search_result=url_array;
        }
    }
}
</script>

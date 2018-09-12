<template>
    <div>
        <router-link :to="{name:'search',params:{gallery}}">Search</router-link>
        <Welcome v-bind:gallery="gallery"/>
    </div>
</template>

<script>
import Welcome from '@/components/Welcome';

export default {
    name: 'AppHome',
    data:() => ({
        gallery:{}
    }),
    created: function(){
        let vm=this;
        fetch('http://www.mocky.io/v2/5aea2be330000061005db34d?mocky-delay=400ms').then((response) => {
            return response.json().then((json) => {
                vm.gallery=json.data;
            })
        })
    },
    components: {
        Welcome,
    },
};
</script>

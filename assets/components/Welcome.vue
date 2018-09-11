<template>
    <div>
        Hello, developer.
        <div v-for="animal in gallery" :key="animal.id">
            {{animal.title}}
            <div v-html="animal.description">
            </div>
            <div v-for="img in animal.photos" :key="img.id">
                <img :src="img.url" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        gallery:{}
    }
}
</script>

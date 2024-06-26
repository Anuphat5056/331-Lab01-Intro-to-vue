const {createApp, ref} = Vue;

createApp ({
    setup() {
        const product = ref('boot')
        const image = ref('./assets/images/socks_green.jpg')
        const description = ref('this is boots use to walk')
        const inStock = ref(true)
        return{
            product,
            inStock,
            description,
            image
        }
    }

}).mount('#app')
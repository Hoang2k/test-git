 const app = Vue.createApp({
    data() {
        return {
          className:'flex',
            products: [
                {
                    name: 'ảnh 1',
                    thumb: 'https://i.pinimg.com/736x/7b/67/fe/7b67fe6b4c3ea670626bb91b86c7a388.jpg'
                },{
                    name: 'ảnh 2',
                    thumb: 'https://i.pinimg.com/736x/7b/67/fe/7b67fe6b4c3ea670626bb91b86c7a388.jpg'
                }
            ]
        }
    },
     methods : {
         getName(event) {
           alert(`hello ${this.name}`)
         }
     }
})
 app.mount('#app')
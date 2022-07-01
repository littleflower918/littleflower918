Vue.component('successBtn',{
        props:['name','type'],   
        template:" <input @click='defaultClick' :value='name' :class='type ' type='button' style=\" color: #fff; border: none;padding: 2px 10px;border-radius: 5px; margin: 2px 6px;\">",
        methods:{
            defaultClick : function(){
            this.$emit('btn-click')
    }
},
//如果没有传入class那么默认的颜色就是primary蓝色
        created: function(){
            if(!this.type){
                this.type = 'primary'
            }
    },
    })
<template>
    <div class="container">

        <div class="footer">
            <common :panelData='panelData'></common>
        </div>
    </div>
</template>

<script>
import common from '../components/common'
export default {
    name:'Index',
    data(){
        return{
            panelData:[
                {
                    name:'张三',
                    age:'12',
                    children:[
                        {
                            name:'李四',
                            age:'23'
                        }
                    ]
                    }
            ]
        }
    },
    components:{
        common
    }

}
</script>

<style lang='less' scoped>
    .container{
        position: relative;
        height:100%;
        width:100%;
        .footer{
            position: absolute;
            bottom: 0;
        }
    }
</style>
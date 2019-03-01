<template>
    <div>
        <h2>hello,this is string testing</h2>
        <el-input v-model="customedString"></el-input>
        <el-button @click="sliceResult(customedString)">10</el-button>
        <div>{{slicedString}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                customedString: '',
                slicedString:''
            }
        },
        methods: {
            // 获取字符长度
            sliceWord(content) {
                // 自定义文字内容总长度
                let allowedCount= 10

                if(content.length*2<=allowedCount){
                    return content;
                }
                // 用于记录文字总长度
                let strLength = 0
                let templateContent = ''
                // 迭代每个字符
                for(let i =0;i<content.length;i++){
                    //  获取当前字符串上的字符
                    templateContent=templateContent+content.charAt(i);
                     /* charCodeAt()返回指定位置的字符的Unicode编码，值为128以下时一个字符占一位，当值在128以上是一个字符占两位 */
                     let Unicode = content.charCodeAt(i)
                    if(Unicode>128){
                        strLength = strLength+2
                   
                    }else{
                        strLength = strLength+1
                    }

                     if(strLength>=allowedCount){
                        return  templateContent+'...'
                        }
                }
                return templateContent
            },
            sliceResult(content){

                // this.slicedString= this.sliceWord(content)
                this.slicedString = content.substring(0,10)+'...'
            }

        },
    }
</script>

<style scoped>

</style>
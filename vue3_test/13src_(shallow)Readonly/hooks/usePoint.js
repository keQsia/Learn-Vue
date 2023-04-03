import {reactive, onMounted, onBeforeUnmount,} from 'vue'
export default function(){
    //鼠标打点数据
    let point = reactive({
        x: 0,
        y: 0
      })

    //鼠标打点方法
    function savePoint(event){
        point.x = event.pageX;
        point.y = event.pageY;
    }

    //相关钩子
    onMounted(() =>{
        window.addEventListener('click',savePoint)
    })
    onBeforeUnmount((params) => {
        window.removeEventListener('click',savePoint)
    })

    return point
}
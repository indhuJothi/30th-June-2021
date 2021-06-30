
const isMyarrempty=(arr)=>{
    if(arr!==undefined && arr!==null && arr.length>0){
        return false;
    }
    return true;
}
const mess=(message)=>{
 console.log(message)
}

export {mess,isMyarrempty}
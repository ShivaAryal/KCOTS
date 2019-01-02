export default class SettingService{
    static changePassword(oldPassword,newPassword,token){
        return new Promise((resolve,reject)=>{
            fetch('https://rice-factory-stock-management.herokuapp.com/api/admin/editPassword',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization':token
                },
                body:JSON.stringify({
                    oldPassword:oldPassword,
                    newPassword:newPassword
                })
            }).then(res=>res.json()).then(info=>{
                if(info.status=='success'){
                    resolve(info.data)
                }else{
                    reject(info.message)
                }
            }).catch(err=>reject(err))
        })
    }
}
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMTY4NGU3ODQ4NGFlMjg1Y2I0MjAxZSIsImlhdCI6MTU0NDk3OTgxMH0.kyAOrnMq6if_p24F4_OoNAdmUHq8Ll48oqzKGqnxxmI"
const IP = '192.168.1.72'

export default class OwnerService{
    static getOwners(token){
        return new Promise((resolve,reject)=>{
            fetch(`https://rice-factory-stock-management.herokuapp.com/api/owner`,{
                method:'GET',
                headers:{
                    'Authorization':token
                }
            }).then(res=>res.json()).then(info=>{
                if(info.status=='success'){
                    resolve(info.data)
                }else{
                    reject(info.message)
                }
            }).catch(err=>reject(err))
        })
    }

    static postOwner(token,owner,address,contact){
        return new Promise((resolve,reject)=>{
            fetch(`https://rice-factory-stock-management.herokuapp.com/api/owner`,{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                    'accept-type':'application/json',
                    'Authorization':token
                },
                body:JSON.stringify({
                    name:owner,
                    address:address,
                    contactNumber:contact
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
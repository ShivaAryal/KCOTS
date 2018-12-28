const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMTY4NGU3ODQ4NGFlMjg1Y2I0MjAxZSIsImlhdCI6MTU0NDk3OTgxMH0.kyAOrnMq6if_p24F4_OoNAdmUHq8Ll48oqzKGqnxxmI"
const IP = '192.168.1.72'

export default class LoginService{
    static postLogin(email,password){
        return new Promise((resolve,reject)=>{
            fetch(`https://rice-factory-stock-management.herokuapp.com/api/admin/login`,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization':token
                },
                body:JSON.stringify({
                    email:email,
                    password:password
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
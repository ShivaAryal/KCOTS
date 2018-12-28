// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMTY4NGU3ODQ4NGFlMjg1Y2I0MjAxZSIsImlhdCI6MTU0NDk3OTgxMH0.kyAOrnMq6if_p24F4_OoNAdmUHq8Ll48oqzKGqnxxmI"
const IP = '192.168.1.72'
export default class SalesService{
    static postChamalSales(token,customer,unitPrice,noofPackets,date){
        return new Promise((resolve,reject)=>{
            fetch(`https://rice-factory-stock-management.herokuapp.com/api/sales/chamalSales`,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization':token
                },
                body:JSON.stringify({
                    customer:customer,
                    unitPrice:unitPrice,
                    noofPackets:noofPackets,
                    date:date
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

    static getChamalSales(token){
        return new Promise((resolve,reject)=>{
            fetch(`https://rice-factory-stock-management.herokuapp.com/api/sales/chamalSales`,{
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

    static postKanikaSales(token,customer,unitPrice,noofPackets,date){
        return new Promise((resolve,reject)=>{
            fetch(`https://rice-factory-stock-management.herokuapp.com/api/sales/kanikaSales`,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization':token
                },
                body:JSON.stringify({
                    customer:customer,
                    unitPrice:unitPrice,
                    noofPackets:noofPackets,
                    date:date
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

    static getKanikaSales(token){
        return new Promise((resolve,reject)=>{
            fetch(`https://rice-factory-stock-management.herokuapp.com/api/sales/kanikaSales`,{
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


    static postBhushSales(token,customer,unitPrice,noofPackets,date){
        return new Promise((resolve,reject)=>{
            fetch(`https://rice-factory-stock-management.herokuapp.com/api/sales/bhushSales`,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization':token
                },
                body:JSON.stringify({
                    customer:customer,
                    unitPrice:unitPrice,
                    noofPackets:noofPackets,
                    date:date
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

    static getBhushSales(token){
        return new Promise((resolve,reject)=>{
            fetch(`https://rice-factory-stock-management.herokuapp.com/api/sales/bhushSales`,{
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



    static postBranSales(token,customer,unitPrice,noofPackets,date){
        return new Promise((resolve,reject)=>{
            fetch(`https://rice-factory-stock-management.herokuapp.com/api/sales/branSales`,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization':token
                },
                body:JSON.stringify({
                    customer:customer,
                    unitPrice:unitPrice,
                    noofPackets:noofPackets,
                    date:date
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

    static getBranSales(token){
        return new Promise((resolve,reject)=>{
            fetch(`https://rice-factory-stock-management.herokuapp.com/api/sales/branSales`,{
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


}
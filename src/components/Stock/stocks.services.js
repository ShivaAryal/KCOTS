// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMTY4NGU3ODQ4NGFlMjg1Y2I0MjAxZSIsImlhdCI6MTU0NDk3OTgxMH0.kyAOrnMq6if_p24F4_OoNAdmUHq8Ll48oqzKGqnxxmI"
const IP = '192.168.1.72'

export default class StockService{
    static getDhanStock(token){
        return new Promise((resolve,reject)=>{
            fetch(`https://rice-factory-stock-management.herokuapp.com/api/stock/dhanStock`,{
                method:'GET',
                headers:{
                    'Authorization':token
                }
            }).then(res=>res.json()).then(info=>{
                if(info.status=="success"){
                    resolve(info.data)
                }else{
                    reject(info.message)
                }
            }).catch(err=>reject(err))
        })
    }
    static postDhanStock(token,good,unitPacketPrice,noofPackets){
        return new Promise((resolve,reject)=>{
        fetch(`https://rice-factory-stock-management.herokuapp.com/api/stock/dhanStock`,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':token
            },
            body:JSON.stringify({
                good:good,
                unitPrice:parseInt(unitPacketPrice),
                noofPackets:parseInt(noofPackets)
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
static getChamalStock(token){
    return new Promise((resolve,reject)=>{
        fetch(`https://rice-factory-stock-management.herokuapp.com/api/stock/chamalStock`,{
            method:'GET',
            headers:{
                'Authorization':token
            }
        }).then(res=>res.json()).then(info=>{
            if(info.status=="success"){
                resolve(info.data)
            }else{
                reject(info.message)
            }
        }).catch(err=>reject(err))
    })
}
static postChamalStock(token,good,unitPacketPrice,noofPackets){
    return new Promise((resolve,reject)=>{
    fetch(`https://rice-factory-stock-management.herokuapp.com/api/stock/chamalStock`,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            good:good,
            unitPrice:parseInt(unitPacketPrice),
            noofPackets:parseInt(noofPackets)
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
static getBranStock(token){
    return new Promise((resolve,reject)=>{
        fetch(`https://rice-factory-stock-management.herokuapp.com/api/stock/branStock`,{
            method:'GET',
            headers:{
                'Authorization':token
            }
        }).then(res=>res.json()).then(info=>{
            if(info.status=="success"){
                resolve(info.data)
            }else{
                reject(info.message)
            }
        }).catch(err=>reject(err))
    })
}
static postBranStock(token,good,unitPacketPrice,noofPackets){
    return new Promise((resolve,reject)=>{
    fetch(`https://rice-factory-stock-management.herokuapp.com/stock/branStock`,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            good:good,
            unitPrice:parseInt(unitPacketPrice),
            noofPackets:parseInt(noofPackets)
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
static getBhushStock(token){
    return new Promise((resolve,reject)=>{
        fetch(`https://rice-factory-stock-management.herokuapp.com/api/stock/bhushStock`,{
            method:'GET',
            headers:{
                'Authorization':token
            }
        }).then(res=>res.json()).then(info=>{
            if(info.status=="success"){
                resolve(info.data)
            }else{
                reject(info.message)
            }
        }).catch(err=>reject(err))
    })
}
static postBhushStock(token,good,unitPacketPrice,noofPackets){
    return new Promise((resolve,reject)=>{
    fetch(`https://rice-factory-stock-management.herokuapp.com/api/stock/bhushStock`,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            good:good,
            unitPrice:parseInt(unitPacketPrice),
            noofPackets:parseInt(noofPackets)
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
static getKanikaStock(token){
    return new Promise((resolve,reject)=>{
        fetch(`https://rice-factory-stock-management.herokuapp.com/api/stock/kanikaStock`,{
            method:'GET',
            headers:{
                'Authorization':token
            }
        }).then(res=>res.json()).then(info=>{
            if(info.status=="success"){
                resolve(info.data)
            }else{
                reject(info.message)
            }
        }).catch(err=>reject(err))
    })
}
static postKanikaStock(token,good,unitPacketPrice,noofPackets){
    return new Promise((resolve,reject)=>{
    fetch(`https://rice-factory-stock-management.herokuapp.com/api/stock/kanikaStock`,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':token
        },
        body:JSON.stringify({
            good:good,
            unitPrice:parseInt(unitPacketPrice),
            noofPackets:parseInt(noofPackets)
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
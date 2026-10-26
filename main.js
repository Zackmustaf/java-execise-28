function fecthUserData(){
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            const result = true;
            if(result){
                resolve({name: "yahye", id: "dfyuf67"})
            }else{
                reject("waad dhacday emtixaanka dowlada")
            }
            
        }, 5000);

    })
}

async function disPlayUserData(){


try{
const user = await fecthUserData()

console.log(user)

}catch(err){
    console.log(err)
}





}

disPlayUserData()
 /* Formatação Data */
 module.exports = {
   age:  function age (timestamp){
    const today = new Date()
    const birtDate = new Date(timestamp)


    let age = today.getFullYear() - birtDate.getFullYear()
    const month = today.getMonth() - birtDate.getMonth()
    
    if (month < 0  || month == 0  && today.getDate() < birtDate.getDate() ){
        age = age - 1
    }
    return age
} , 

    date: function(timestamp) {
        const date = new Date(timestamp)


        const year = date.getUTCFullYear()

        const month = `0${date.getUTCMonth() + 1}`.slice(-2)

        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
     
    }
 }

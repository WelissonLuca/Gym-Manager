const fs = require('fs')
const data = require('./data.json')
//create


 const { age, date } = require('./utils')

 //show

 exports.show = (req,res) => {
    
    const { id } = req.params

    const foudInstructor = data.instructors.find((instructor) => {
        return instructor.id == id
    })

    if(!foudInstructor) return res.send("Instructor not found")

    const instructor = {
        ...foudInstructor,
        age:age(foudInstructor.birth),
        services: foudInstructor.services.split(","),
        created_at:Intl.DateTimeFormat("pt-BR").format(foudInstructor.created_at),
    }

    return res.render("instructors/show", { instructor })
 }

//create

 exports.post = (req,res) => {
    
    const keys = Object.keys(req.body)
 
    for(key of keys ){
        if(req.body[key] == "")
            return res.send('Please, fill all fields')
        
    }

    let {avatar_url,birth,name,services,gender} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

   

    data.instructors.push({
        id,
        avatar_url, 
        name,
        birth,
        gender,
        services,
        created_at
    
    })

   
        
    

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send("write file error !")

        return res.redirect("/instructors")
    })
    
    
 }
//edit
exports.edit = (req,res) => {
    
    const { id } = req.params

    const foudInstructor = data.instructors.find((instructor) => {
        return instructor.id == id
    })

    if(!foudInstructor) return res.send("Instructor not found")
    

    
    const instructor = {
        ...foudInstructor,
        birth: date(foudInstructor.birth),
    }
  



    return res.render("instructors/edit", {instructor})
}
//udpate


//delete


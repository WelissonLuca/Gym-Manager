const {
    json
} = require("express");
const fs = require("fs");
const data = require("../data.json");
//create

const {
    age,
    date
} =  require("../utils");

exports.index =  (req, res) => {
    return res.render("instructors/index", {instructors: data.instructors});
}

exports.create =  (req, res) => {
    return res.render("instructors/create");
}


exports.post = (req, res) => {
    const keys = Object.keys(req.body);

    for (key of keys) {
        if (req.body[key] == "") return res.send("Please, fill all fields");
    }

    let {
        avatar_url,
        birth,
        name,
        services,
        gender
    } = req.body;

    birth = Date.parse(birth);
    const created_at = Date.now();
    const id = Number(data.instructors.length + 1);

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at,
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send("write file error !");

        return res.redirect("/instructors");
    });
};

exports.show = (req, res) => {
    const {
        id
    } = req.params;

    const foudInstructor = data.instructors.find((instructor) => {
        return instructor.id == id;
    });

    if (!foudInstructor) return res.send("Instructor not found");

    const instructor = {
        ...foudInstructor,
        age: age(foudInstructor.birth),
        services: foudInstructor.services.split(","),
        created_at: Intl.DateTimeFormat("pt-BR").format(foudInstructor.created_at),
    };

    return res.render("instructors/show", {
        instructor
    });
};


exports.edit = (req, res) => {
    const {
        id
    } = req.params;

    const foudInstructor = data.instructors.find((instructor) => {
        return instructor.id == id;
    });

    if (!foudInstructor) return res.send("Instructor not found");

    const instructor = {
        ...foudInstructor,
        birth: date(foudInstructor.birth).iso,
    };

    return res.render("instructors/edit", {
        instructor
    });
};


exports.put = (req, res) => {
    const {
        id
    } = req.body;

    let index = 0;
    const foudInstructor = data.instructors.find((instructor, Foundindex) => {
        if (id == instructor.id) {
            index = Foundindex;
            return true;
        }
    });

    if (!foudInstructor) return res.send("Instructor not found");

    const instructor = {
        ...foudInstructor,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    };

    data.instructors[index] = instructor;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send("Write error");

        return res.redirect(`/instructors/${id}`);
    });
};



exports.delete = (req, res) => {
    const {
        id
    } = req.body;

    const filteredInstructors = data.instructors.filter((instructor) => {
        return instructor.id != id;
    });

    data.instructors = filteredInstructors;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send("Write File error");

        return res.redirect("/instructors");
    });
};

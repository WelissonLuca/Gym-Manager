const {
    json
} = require("express");
const fs = require("fs");
const data = require("../data.json");
//create

const {date} = require("../utils");

exports.index =  (req, res) => {
    return res.render("members/index", {members: data.members});
}




exports.create = (req,res) => {
    return res.render('members/create')
}

exports.post = (req, res) => {
    const keys = Object.keys(req.body);

    for (key of keys) {
        if (req.body[key] == "") return res.send("Please, fill all fields");
    }



    birth = Date.parse(req.body.birth);


    let id = 1
    const lastMember = data.members[data.members.length - 1]
    
    if(lastMember) {
        id = lastMember.id + 1
    }

    data.members.push({
        id,
        ...req.body,
        birth
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send("write file error !");

        return res.redirect("/members");
    });
};


exports.show = (req, res) => {
    const {
        id
    } = req.params;

    const foudMember = data.members.find((member) => {
        return member.id == id;
    });

    if (!foudMember) return res.send("Member not found");

    const member = {
        ...foudMember,
        birth: date(foudMember.birth).birthDay,
        created_at: Intl.DateTimeFormat("pt-BR").format(foudMember.created_at),
    };

    return res.render("members/show", {
        member
    });
};

exports.edit = (req, res) => {
    const {
        id
    } = req.params;

    const foudMember = data.members.find((member) => {
        return member.id == id;
    });

    if (!foudMember) return res.send("Member not found");

    const member = {
        ...foudMember,
        birth: date(foudMember.birth).iso,
    };

    return res.render("members/edit", {
        member
    });
};

exports.put = (req, res) => {
    const {
        id
    } = req.body;

    let index = 0;
    const foudMember = data.members.find((member, Foundindex) => {
        if (id == member.id) {
            index = Foundindex;
            return true;
        }
    });

    if (!foudMember) return res.send("Member not found");

    const member = {
        ...foudMember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    };

    data.members[index] = member;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send("Write error");

        return res.redirect(`/members/${id}`);
    });
};


exports.delete = (req, res) => {
    const {
        id
    } = req.body;

    const filteredMembers = data.members.filter((member) => {
        return member.id != id;
    });

    data.members = filteredMembers;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send("Write File error");

        return res.redirect("/members");
    });
};

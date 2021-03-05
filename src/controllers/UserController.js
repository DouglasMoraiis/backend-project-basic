const mongoose = require("mongoose")

const User = mongoose.model("User")

const Yup = require("yup")

module.exports = {
    async index(req, res){
        const users = await User.find()
        return res.json(users)
    },

    async store(req, res){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required(),
            birthDate: Yup.string().required(),
            description: Yup.string()
        })

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: "Validation fails"})
        }

        const user = await User.create(req.body)
        return res.json(user)
    },

    async show(req, res){
        const user = await User.findById(req.params.id)
        return res.json(user)
    },

    async update(req, res){
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string(),
            password: Yup.string(),
            birthDate: Yup.string(),
            description: Yup.string()
        })

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: "Validation fails"})
        }

        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.json(user)
    },

    async destroy(req, res){
        await User.findByIdAndRemove(req.params.id)
        return res.send()
    }
}
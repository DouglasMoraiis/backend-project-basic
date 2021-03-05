const mongoose = require("mongoose")

const Movie = mongoose.model("Movie")

const Yup = require("yup")

module.exports = {
    async index(req, res){
        const movies = await Movie.find()
        return res.json(movies)
    },

    async store(req, res){
        const schema = Yup.object().shape({
            title: Yup.string().required(),
            director: Yup.string().required(),
            genre: Yup.string().required(),
            synopsis: Yup.string().required(),
            duration: Yup.string()
        })

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: "Validation fails"})
        }

        const movie = await Movie.create(req.body)
        return res.json(movie)
    },

    async show(req, res){
        const movie = await Movie.findById(req.params.id)
        return res.json(movie)
    },

    async update(req, res){
        const schema = Yup.object().shape({
            title: Yup.string(),
            director: Yup.string(),
            genre: Yup.string(),
            synopsis: Yup.string(),
            duration: Yup.string()
        })

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: "Validation fails"})
        }

        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.json(movie)
    },

    async destroy(req, res){
        await Movie.findByIdAndRemove(req.params.id)
        return res.send()
    }
}
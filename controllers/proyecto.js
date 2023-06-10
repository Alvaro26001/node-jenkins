const Proyecto = require('../models/proyecto')
const { request, response} = require('express')
const TipoProyecto = require('../models/tipoProyeto')
const Cliente = require('../models/cliente')
const Universidad = require('../models/universidad')
const Etapa = require('../models/etapa')

// crear
const createProyecto= async (req = request, 
    res = response) => {
    try{
        const data = req.body
        console.log(data)
        const { tipoProyecto, cliente, universidad, etapa } = data;
        //validando tipoProyecto
        const tipoProyectoDB = TipoProyecto.findOne({
            _id: tipoProyecto._id
        })// select * from usuarios where _id=? and estado=true
        if(!tipoProyectoDB){
            return res.status(400).json({msg: 'tipo proyecto invalido'})
        }
        // validando cliente
        const clienteDB = Cliente.findOne({
            _id: cliente._id
        })
        if(!clienteDB){
            return res.status(400).json({msg: 'cliente invalida'})
        }
        // validando universidad
        const universidadDB = Universidad.findOne({
            _id: universidad._id
        })
        if(!universidadDB){
           return res.status(400).json({msg: 'universidad invalido'})
        }
        // validando tipo etapa
        const etapaDB = Etapa.findOne({
            _id: etapa._id
        })
        if(!etapaDB){
           return res.status(400).json({msg: 'etapa invalido'})
        } 

        const proyecto = new Proyecto(data)

        await proyecto.save()
        
        return res.status(201).json(proyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getProyectos = async (req = request, 
    res = response) => {
        try{
            console.log("petición...");
            const proyectosDB = await Proyecto.find()//select * from inventarios
                .populate({
                    path: 'tipoProyecto',
                })
                .populate({
                    path: 'cliente',
                })
                .populate({
                    path: 'universidad',
                })
                .populate({
                    path: 'etapa',
                })
            return res.json(proyectosDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar inventario
const updateProyectoByID = async (req = request, 
    res = response) => {

    try{
        const id  = req.params.id
        const data = req.body
        const proyecto  = await Proyecto.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(proyecto)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }

} 


module.exports = { createProyecto, getProyectos , updateProyectoByID}
const { Schema, model} = require('mongoose')

const proyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Número requerido'],
        unique: [true, 'Número en uso']
    },
    titulo: {
        type: String,
        required: [true,'Titúlo requerido']
    },
    fechaInicio: {
        type: Date,
        required: [true,'Fecha inicio requerida']
    },
    fechaEntrega: {
        type: Date,
        required: [true,'Fecha entrega requerida']
    },
    valor: {
        type: Number,
        require: [true,'Valor  requerida']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    },
    etapa:{
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
    }
})

module.exports = model('Proyecto', proyectoSchema)

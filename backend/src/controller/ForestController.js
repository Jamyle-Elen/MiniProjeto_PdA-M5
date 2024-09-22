import Forest from '../models/ForestModel.js';

export const createForest = async (req, res) => {
    console.log('Dados recebidos, OK', req.body);
    try {
        const response = await Forest.create(req.body);
        res.status(201).json({ message: 'Dados de floresta adicionados com sucesso!', data: response });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao tentar adicionar os dados da floresta' });
    }
}

export const getForestData = async (req, res) => {
    try {
        const response = await Forest.findAll();
        res.status(200).json({ message: 'Dados de floresta encontrados', data: response });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os dados da floresta' });
    }
}

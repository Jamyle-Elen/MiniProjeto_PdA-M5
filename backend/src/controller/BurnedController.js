import Burned from '../models/BurnedModel.js';

export const createFireData = async (req, res) => {
    console.log('Dados recebidos, OK',req.body);
    try {
        const response = await Burned.create(req.body);
        console.log('Dados de queimadas criados com sucesso!');
        res.status(201).json({ message: 'Dados de novas queimadas criados com sucesso!' });
    } catch (error) {
        console.error('Erro ao criar os dados de queimadas:', error.message);
        res.status(500).json({ message: 'Erro ao criar os dados de queimadas' });
    }
}

export const getFireData = async (req,res) => {
    try {
        const response = await Burned.findAll()
            res.status(200).json({ message: 'Dados de queimadas encontrados', response });
    }   catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os dados de queimadas', error });
    }
}

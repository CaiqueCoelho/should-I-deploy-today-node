// import {put, get, getAll, post} from '../repository/repository'
const repository = require('../repository/repository')

exports.post = (req, res, next) => {
    const { day, shouldDeploy } = req.body;
    res.status(201).send(repository.post(day, shouldDeploy));
};

exports.postLikeAProxy = async (req, res, next) => {
    const { day, shouldDeploy } = req.body;
    const response = repository.postLikeAProxy(day, shouldDeploy)
    res.status(200).send(response);
};
exports.getAll = (req, res, next) => {
    res.status(200).send(repository.getAll());
};

exports.getAllLikeAProxy = async (req, res, next) => {
    const response = await repository.getAllLikeAProxy()
    res.status(200).send(response);
};

exports.get = (req, res, next) => {
    const day = req.params.day
    const { status, response } = repository.get(day)
    res.status(status).send(response);
};

exports.put = (req, res, next) => {
    const { day, shouldDeploy } = req.body;
    const { status, response } = repository.put(day, shouldDeploy)
    res.status(status).send(response);
};
exports.delete = (req, res, next) => {
    res.status(200).send(`To be implented`);
};
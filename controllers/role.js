/* eslint-disable no-undef */
const Role = require('../models/role');

exports.getRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        return res.status(200).json(roles);
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.createRole = async (req, res) => {
    const payload = req.body
    try {
        const createdRole = await Role.create(payload);
        return res.status(200).json(createdRole);
    } catch (error) {
        return res.status(500).json(error)
    }
}
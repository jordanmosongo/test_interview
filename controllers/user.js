/* eslint-disable no-undef */
const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
       return res.status(500).json(error) 
    }
}

exports.getUserById = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id).populate('roleId');
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error)
    }
}
// This method  will be invoked on sign up

exports.createUser = async (req, res) => {
    const payload = req.body;
    const hashedPassword = await bcrypt.hash(payload.password, 12)
    delete payload.password    
    try {
        const createdUser = await User.create({...payload, password: hashedPassword});
        return res.status(200).json(createdUser);
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.signIn = async (req, res) => {
    const payload = req.body;  
    try {
         const foundUser = await User.findOne({name: payload.name})
         if(!foundUser) {
            return res.status(404).json("No user found !")
         }
         const result = await bcrypt.compare(payload.password, foundUser.password);
         if(!result) {
            return res.status(401).json("name or password incorrect !")
         }

        const token = jwt.sign(
            {
                user: foundUser,
            },
            `thisisalongjwtphrasethatissupposedtobekeptsecretandnotsharedtoanyone`,
            { expiresIn: "1d" }
        );

        return res.status(200).json(token);
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.updateUser = async (req, res) => {
    const payload = req.body;
    const id = req.params.id;  
    try {
        const updatedUser = await User.findByIdAndUpdate(id, payload);
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id;  
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        return res.status(200).json(deletedUser);
    } catch (error) {
        return res.status(500).json(error)
    }
}
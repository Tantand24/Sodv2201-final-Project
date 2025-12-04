import bcrypt from 'bcrypt'; //password hashing
import generateToken from '../../../my-app-backend-authentication-session-management/utils/generateToken';  //used to generate JWT tokens
//import {variables} (when connecting frontend -> backend)
import { use } from 'react';

//controller to get user's courses
export const getUserCourses = async (requestAnimationFrame, res) => {
    try {
        // const userCourses = await ;//
        res.status(200).json(userCourses);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to fetch user courses'});
    }
};

export const registerUserController = async (req, res) => {
    try {
        const {username, password, firstName, lastName, email, phone, birthday, department, program} = req.body;

        if(!username || !password || !firstName || !lastName || !email || !phone || !birthday || !department || !program) {
            return res.status(400).json({message: 'All fields are required'});
        }

        // const hashedPassword = await bcrypt.hash(password, 10)   //later use

        // await addUser(username, password, firstName, lastName, email, phone, birthday, department, program);

        res.status(201).json({message: 'User created successfully'});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to register user' });
    }
}
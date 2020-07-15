import dotenv from 'dotenv';
import express from 'express';
import {Request, Response} from "express";
import { AddressInfo } from 'net';
import { IdGenerator } from './IdGenerator';
import { UserDatabase } from './UserDatabase';
import { Authenticator } from './Authenticator';


dotenv.config();

const app = express();

app.use(express.json());


app.post("/signup", async (req: Request, res: Response) => {  
    try {

        if(!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        if(!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password")
        }

        const userInfos = {
            email: req.body.email,
            password: req.body.email
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const userDb = new UserDatabase();
        await userDb.createUser(id, userInfos.email, userInfos.password);

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
            id,
        });

        res.status(200).send({
            token,
        })

    } catch(err) {
        res.status(400).send({message: err.message});
    }

});


app.post("/login", async (req: Request, res: Response) => {  
    try {

        if(!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        const userInfos = {
            email: req.body.email,
            password: req.body.email
        }

        const userDb = new UserDatabase();
        const user = await userDb.getUserByEmail(userInfos.email);

        if(user.password !== userInfos.password) {
            throw new Error("Invalid password");
        }

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
            id: user.id
        });

        res.status(200).send({
            token,
        })

    } catch(err) {
        res.status(400).send({message: err.message});
    }

});


app.get("/user/profile", async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getData(token);

        const userDb = new UserDatabase();
        const user = await userDb.getUserById(authenticationData.id);

        res.status(200).send({
            id: user.id,
            email: user.email,
        });
    } catch(err) {
        res.status(400).send({
            message: err.message,
        });
    }
})

const server = app.listen(process.env.PORT || 3303, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`);
    }
});
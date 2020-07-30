import dotenv from 'dotenv';
import express from 'express';
import {Request, Response} from "express";
import { AddressInfo } from 'net';
import { IdGenerator } from './services/IdGenerator';
import { UserDatabase } from './data/UserDatabase';
import { Authenticator } from './services/Authenticator';
import { HashManager } from './services/HashManager';


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
            password: req.body.password,
            role: req.body.role
        }

        const hashManager = new HashManager();
        const cipherText = await hashManager.hash(userInfos.password);

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const userDb = new UserDatabase();
        await userDb.createUser(
            id, 
            userInfos.email, 
            cipherText,
            userInfos.role
           );

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
            id,
            role: userInfos.role,
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
            password: req.body.password,
            role: req.body.role
        }

        const userDb = new UserDatabase();
        const user = await userDb.getUserByEmail(userInfos.email);

        const hashManager = new HashManager();
        const passwordIsCorrect = await hashManager.compare(
            userInfos.password, 
            user.password    
        )

        if(!passwordIsCorrect) {
            throw new Error("Invalid password");
        }

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
            id: user.id,
            role: userInfos.role
        });

        res.status(200).send({
            token,
        })

    } catch(err) {
        res.status(400).send({message: err.message});
    }

});

app.delete("/user/:id", async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getData(token);

        if (authenticationData.role !== "ADMIN") {
            throw new Error("Only a admin user can access this funcionality");
        }

        const userDatabase = new UserDatabase();
        await userDatabase.deleteUser(req.params.id)

        res.status(200).send({
            message: "Usuário deletado"
        })

    } catch(err) {
        res.status(400).send({message: err.message});
    }
})

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        authenticator.getData(token);

        const id = req.params.id;

        const userDb = new UserDatabase();
        const user = await userDb.getUserById(id);

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
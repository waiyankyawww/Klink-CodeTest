"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = __importDefault(require("../models"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const User = models_1.default.User;
const userFetcher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    User.findAll()
        .then((users) => {
        if (users.length > 0) {
            return res.status(200).json({
                meta: {
                    status: 200,
                    success: true,
                    message: "users fetched successfully",
                },
                body: users,
            });
        }
        else {
            return res.status(404).json({
                meta: {
                    status: 404,
                    success: true,
                    message: "No users found",
                },
                body: users,
            });
        }
    })
        .catch((err) => {
        return res.status(500).json({
            meta: {
                status: 500,
                success: false,
                message: err,
            },
        });
    });
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "no email or password" });
    }
    try {
        const user = yield User.findOne({
            where: {
                email,
            },
        });
        if (!user) {
            return res.status(400).json({ message: "Invalid email mmsp" });
        }
        var passwordIsValid = bcrypt_1.default.compareSync(password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!",
            });
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, auth_middleware_1.jwtSecret, {
            expiresIn: auth_middleware_1.jwtExpiration,
        });
        return res.status(200).send({ message: "query is success", token });
    }
    catch (error) {
        return res.status(500).send({ message: "query is fail", error });
    }
});
exports.login = login;
// console.log(email, password, user);
//   if (!user || user.password !== password) {
//     return res.status(401).json({ message: "Incorrect email or password" });
//   }
//   return res.status(200).json({
//     meta: {
//       status: 200,
//       success: true,
//       message: "Login  successfully",
//     },
//     body: { token: token },
//   });
// const login = async (req: Request, res: Response) => {
//   User.findOne({
//     where: {
//       email: req.body.email,
//     },
//   }).then((user) => {
//     if (!user) {
//       return res.status(404).send({ message: "User Not found." });
//     }
//     const passwordIsValid = bcrypt.compareSync(
//       req.body.password,
//       User.password
//     );
//     if (!passwordIsValid) {
//       return res.status(401).send({
//         accessToken: null,
//         message: "Invalid Password!",
//       });
//     }
//   });
// };
// export const loginOne = async (req: Request, res: Response) => {
//   try {
//     const foundUser = await userServices.login(req.body);
//     res.status(200).send(foundUser);
//   } catch (error) {
//     return res.status(500).json({ message: "Log in failed" });
//   }
// };
// const signin = (req: Request, res: Response) => {
//   User.findOne({
//     where: {
//       gmail: req.body.gmail,
//     },
//   })
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send({ message: "User Not found." });
//       }
//       var token = jwt.sign({ id: user.id }, config.secret, {
//         expiresIn: 86400, // 24 hours
//       });
//       var authorities = [];
//       user.getRoles().then((roles) => {
//         for (let i = 0; i < roles.length; i++) {
//           authorities.push("ROLE_" + roles[i].name.toUpperCase());
//         }
//         res.status(200).send({
//           id: user.id,
//           username: user.username,
//           email: user.email,
//           roles: authorities,
//           accessToken: token,
//         });
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     });
// };
exports.default = { login: exports.login, userFetcher };

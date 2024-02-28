"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//src/controller/todo.ts
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//add new task
router.post('/', (req, res) => { });
//get all tasks
router.get('/', (req, res) => { });
//get one task
router.get('/:id', (req, res) => { });
//update one task
router.put('/:id', (req, res) => { });
//delete one task
router.delete('/:id', (req, res) => { });
exports.default = router;

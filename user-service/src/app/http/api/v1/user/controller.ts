import { Request, Response, NextFunction } from "express";
import User from "../../../../interfaces/User";
import { IUserInput } from "./input/userInput";
import UserCase from "../../../../use_cases/user/userCase";
import UserRepo from "../../../../external/mongodb/repository/UserRepo";
import MemoryDB from "../../../../external/memory/memoryDB";

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log("ENTREI");
    const userInput = req.body as IUserInput;
    const user = new User(userInput.name, userInput.country);
    const userSaved = await new UserCase(new MemoryDB()).createUserUseCase(
      user
    );
    console.log("SAI");
    return res.json(userSaved);
  } catch (err) {
    next(err);
  }
}

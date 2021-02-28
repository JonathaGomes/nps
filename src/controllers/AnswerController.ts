import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveyUsersRepository";


class AnswerController {
  // http://localhost:3333/answers/5?u=3795fe97-64b4-4e24-9b99-808b3339557a 
  // Query params -> Busca, paginação, depois do ? chave=valor
  // Route params -> Parametros da rota
  
  async execute(req: Request, res: Response){
    const { value } = req.params
    const { u } = req.query

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

    const surveyUser = await surveysUsersRepository.findOne({
      id: String(u)
    });

    if(!surveyUser) {
      throw new AppError("Survey User does not exists!")
    }

    surveyUser.value = Number(value);

    await surveysUsersRepository.save(surveyUser)

    return res.json(surveyUser)
  }
}

export { AnswerController }
import { EntityRepository, Repository } from "typeorm";
import { Surveyuser } from "../models/SurveyUser";

@EntityRepository(Surveyuser)
class SurveysUsersRepository extends Repository<Surveyuser> {}

export { SurveysUsersRepository }
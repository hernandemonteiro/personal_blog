import OwnerInfoController from "../../../controllers/OwnerInfoController";
import Database from "../../../infra/db";
import { responseAPI } from "../../../patterns/api/apiCall";

export default async function getOwnerInfo(req, res) {
  await responseAPI(
    { method: "GET", requestedMethod: req.method, response: res },
    OwnerInfoController.getOwnerInfo(req, res)
  );
}

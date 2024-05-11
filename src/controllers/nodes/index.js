import { nodesService } from "../../services";

const createNode = async (req, res, next) => {
  try {
    const node = await nodesService.create(req.body);
    if (req.translate == true) nodesService.translateNodesTitle([node]);
    return res.status(201).send(node);
  } catch (error) {
    return next(error);
  }
}

const getNode = async (req, res, next) => {
  try {
    const { id } = req.params;
    const node = await nodesService.getById(id);
    if (req.translate == true) nodesService.translateNodesTitle([node]);
    return res.status(200).send({ node });
  } catch (error) {
    return next(error);
  }
}

const getChildNodes = async (req, res, next) => {
  try {
    const { id } = req.params;
    const nodes = await nodesService.getChildren(id);
    if (req.translate == true) nodesService.translateNodesTitle(nodes);
    return res.status(200).send({ child_nodes: nodes });
  } catch (error) {
    return next(error);
  }
}

const getParentNodes = async (_req, res, next) => {
  try {
    const nodes = await nodesService.getParents();
    if (req.translate == true) nodesService.translateNodesTitle(nodes);
    return res.status(200).send({ parent_nodes: nodes });
  } catch (error) {
    return next(error);
  }
}


const deleteNode = async (req, res, next) => {
  try {
    const { id } = req.params;
    const node = await nodesService.deleteById(id);
    return res.status(200).send({
      message: "node deleted",
      node,
    });
  } catch (error) {
    return next(error);
  }
}


export const nodesControllers = {
  createNode,
  getNode,
  getChildNodes,
  getParentNodes,
  deleteNode,
};
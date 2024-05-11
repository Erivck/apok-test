import { prisma } from "../../db";
import { formatDate, nameNumber } from "../../utils";
import { HttpRequestError } from "../../middlewares/httpErrorHandler";
import { translate } from "../translate";

const nodeObject = (node) => {
  return {
    id: node.id,
    parent: node.parentId,
    title: node.title,
    created_at: formatDate(node.created_at),
  }
}

const translateNodesTitle = (nodes) => {
  if (nodes?.length && nodes.length < 1) return nodes;
  return nodes.map((node) => {
    return { ...node, title: translate(node.title)};
  });
}

const create = async ({ parentId }) => {
  const count = await prisma.node.count();
  const node = await prisma.node.create({
    data: {
      title: nameNumber(count),
      parent: parentId ? {
        connect: {
          id: parentId
        }
      } : null,
    }
  });
  return nodeObject(node);
};

const getById = async (id) => {
  const node = await prisma.node.findUnique({
    where: {
      id,
    },
  });
  return nodeObject(node);
};

const getParents = async () => {
  const nodes = await prisma.node.findMany({
    where: {
      parent: null,
    },
  });
  return nodes.map(nodeObject);
};

const getChildren = async (id) => {
  const nodes = await prisma.node.findMany({
    where: {
      parent: id,
    },
  });
  return nodes.map(nodeObject);
};

const deleteById = async (id) => {
  const children = await getChildren(id);

  if (children.length > 0) throw new HttpRequestError("invalid operation, node has children", 400);

  const node = await prisma.node.delete({
    where: {
      id,
    },
  });
  return nodeObject(node);
};

export const nodesService = {
  create,
  getById,
  getParents,
  getChildren,
  deleteById,
  translateNodesTitle
}

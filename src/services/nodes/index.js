import { prisma } from "../../db";
import { formatDate, nameNumber } from "../../utils";
import { HttpRequestError } from "../../middlewares/httpErrorHandler";
import { translate, translateTextArray } from "../translate";

const nodeObject = (node) => {
  return {
    id: node.id,
    parent: node.parentId,
    title: node.title,
    created_at: formatDate(node.created_at),
  }
}

const translateNodesTitle = async (nodes, target) => {
  if (nodes?.title) {
    nodes.title = await translate(nodes.title, target);
    return
  }
  else if (nodes?.length && nodes?.length < 1) return;

  const titles = nodes.map((node) => node.title);
  const translated = await translateTextArray(titles, target);

  translated.forEach((text, i) => {
    nodes[i].title = text;
  });

  return;
}

const create = async ({ parentId }) => {
  let parent;

  if (parentId) {
    parent = await getById(parentId);
  }

  if (parent === null) {
    throw new HttpRequestError("Parent node not found", 404);
  }

  const { id } = await prisma.node.create({
    data: {
      title: "temp",
      parentId: parent ? parent.id : null
    }
  });
  const node = await prisma.node.update({
    where: {
      id,
    },
    data: {
      title: nameNumber(id),
    },
  });

  return nodeObject(node);
};


const getParents = async () => {
  const nodes = await prisma.node.findMany({
    where: {
      children: {
        some: {},
      },
    },
  });
  return nodes.map(nodeObject);
};


const getById = async (id) => {
  const node = await prisma.node.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!node) {
    throw new HttpRequestError("Node not found", 404);
  }

  return nodeObject(node);
};



const getChildren = async (id) => {
  const node = await getById(id);

  const nodes = await prisma.node.findMany({
    where: {
      parentId: node.id,
    },
  });
  return nodes.map(nodeObject);
};


const deleteById = async (id) => {
  const children = await getChildren(id);

  if (children.length > 0) throw new HttpRequestError("invalid operation, node has children", 400);

  const node = await prisma.node.delete({
    where: {
      id: Number(id),
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

"use server";

import { prisma } from "@/utils";

export const LikePage = async () => {
  try {
    const apology = await prisma.apology.findFirst({
      where: {
        id: 1,
      },
    });

    if (apology) {
      const updatedApology = await prisma.apology.update({
        where: { id: apology.id },
        data: { likes: apology.likes + 1 },
      });

      return { likes: updatedApology.likes };
    } else {
      return {
        error: "Apology not found",
        message: "The apology record could not be found.",
      };
    }
  } catch (e: any) {
    return {
      error: e.message,
      message: "Something went wrong",
    };
  }
};

export const getLikeCount = async () => {
  try {
    const apology = await prisma.apology.findFirst({
      where: {
        id: 1,
      },
    });

    if (apology) {
      return { likes: apology.likes };
    } else {
      return {
        error: "Apology not found",
        message: "The apology record could not be found.",
      };
    }
  } catch (e: any) {
    return {
      error: e.message,
      message: "Something went wrong",
    };
  }
};

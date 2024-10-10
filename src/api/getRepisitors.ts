import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: "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",
});

export const getRepisitories = async () => {
  try {
    const { data } = await octokit.repos.listForAuthenticatedUser();
    return data;
  } catch (error) {
    console.error("Ошибка при получении репозиториев:", error);
  }
};

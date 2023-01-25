import { Article } from '../types/types';

export function filterArticlesByKeywords(
  articles: Article[],
  keywords: string[],
) {
  let filteredArticles = [];
  for (let article of articles) {
    let titleMatch = keywords.some(keyword =>
      article.title.toLowerCase().includes(keyword.toLowerCase()),
    );
    const shortSummary =
      article.summary.length > 100
        ? `${article.summary.slice(0, 98)}...`
        : article.summary;
    let summaryMatch = keywords.some(keyword =>
      shortSummary.toLowerCase().includes(keyword.toLowerCase()),
    );
    if (titleMatch || summaryMatch) {
      filteredArticles.push(article);
    }
  }
  filteredArticles.sort((a, b) => {
    let aTitleMatch: any = keywords.some(keyword =>
      a.title.toLowerCase().includes(keyword.toLowerCase()),
    );
    let bTitleMatch: any = keywords.some(keyword =>
      b.title.toLowerCase().includes(keyword.toLowerCase()),
    );
    if (aTitleMatch !== bTitleMatch) {
      return bTitleMatch - aTitleMatch;
    } else {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    }
  });
  return filteredArticles;
}

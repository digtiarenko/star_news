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
    let summaryMatch = keywords.some(keyword =>
      article.summary.toLowerCase().includes(keyword.toLowerCase()),
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

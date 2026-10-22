// /components/seo/articles/LoadersOrderArticle.jsx

import SeoAudioArticle from "@/components/seo/SeoAudioArticle";
import { loadersOrderArticles } from "@/data/seoArticles/loadersOrderArticles";

export default function LoadersOrderArticle({ cityKey = "minsk" }) {
  const article = loadersOrderArticles[cityKey] || loadersOrderArticles.minsk;

  return <SeoAudioArticle {...article} />;
}
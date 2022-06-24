import ArticleList from "../Article/ArticleList";
import TagList from "../Article/TagList";

export default function HomeMain() {
  return (
    <>
      <ul data-testid="category"></ul>
      <ArticleList />
      <TagList />
    </>
  );
}

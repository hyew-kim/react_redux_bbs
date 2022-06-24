import ArticleList from "../Article/ArticleList";

export default function HomeMain() {
  return (
    <>
      <ul data-testid="category"></ul>
      <ArticleList />
    </>
  );
}

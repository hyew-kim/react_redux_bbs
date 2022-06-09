import React from 'react'
import ArticleList from './ArticleList'
import TagList from './TagList';


export default function MainView() {
  return (
      <>
        <div>MainView</div>
        <section>
          <ArticleList />
        </section>
        <aside>
          <TagList />
        </aside>
      </>
  )
}

import { articleData } from '@/data/data'
import React from 'react'
import ArticleCard from './ArticleCard'

const Article = () => {
  return (
    <div className="pt-20 pb-20 bg-gray-100">
        <div className="w-[80%] mx-auto">
            {/*Heading */}
            <h1 className="text-4xl md:text-5xl text-gray-900 font-bold">Latest Articles
            </h1>
            {/* Define Grid System*/}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {/*Article Mapping */}
                {articleData.map((article)=>{
                  return <div key={article.id}>
                 {/* articleCard */}
                 <ArticleCard article={article}/>
                  </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Article
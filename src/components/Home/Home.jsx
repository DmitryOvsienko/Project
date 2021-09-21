import React, {useState} from 'react';

import {PopularArticle} from "./PopularArticle/PopularArticle";
import {ArticleList} from "./ArticleList/ArticleList";
import {PaginationButton} from "./PaginationButton/PaginationButton";

import {articlesData} from "../../services/mock";
import './Home.scss';

export const Home = () => {
	const [articles, setArticles] = useState(JSON.parse(localStorage.getItem('articles')) || articlesData);
	const popularArticles = articles.sort((a, b) => b.viewNum - a.viewNum)[0]
	const title = 'Popular articles'
	const [nextArticle, setNextArticle] = useState(articles)
	console.log('home',nextArticle)
	return (
		<div className='content'>
			<div className='container'>
				{
					articles.length > 0
						?
						<div>
							<div className='popularArticles main'>
								<PopularArticle data={popularArticles}/>
							</div>
							<div className='popularArticles'>
								<h1>{title}</h1>
								{
									articles.map(item => (
										<ArticleList data={item}/>
									))
								}
							</div>
							<div className='paginationArticle'>
								<PaginationButton name={'Prev'}/>
								<PaginationButton
								 name={'Next'}
								 articles={articles}
								 setNextArticle={setNextArticle}
								 />
							</div>
						</div>
						:
						<div className='noData'>
							Записей еще нет...
						</div>
				}
			</div>
		</div>
	)
}

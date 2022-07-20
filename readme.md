Articles-Api
A Articles API where to get different articles, 
get articles by title and ge by AUTHOR. 
Also added the feature of caching where data get stored for 15 minutes.

To run the application: use npm start

### Packages used =
 #### mongoose
 #### express
 #### apicache

For getting articles, use => http://localhost:3000/article.

For articles by title or author, the user can use => http://localhost:3000/article?{title,author}={}.

Here user can get N numbers of articles through pagination for that you use => http://localhost:3000/article?page={}&size={}.
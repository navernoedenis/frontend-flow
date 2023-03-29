import { NavLink } from 'react-router-dom';
import { AppRoutePath } from 'shared/constants/routes';

const article1 = 'article1';
const article2 = 'article2';
const article3 = 'article2';

const ArticlesPage = () => (
  <div>
    <div>
      <NavLink to={`${AppRoutePath.article}/1`}>{article1}</NavLink>
    </div>
    <div>
      <NavLink to={`${AppRoutePath.article}/2`}>{article2}</NavLink>
    </div>
    <div>
      <NavLink to={`${AppRoutePath.article}/3`}>{article3}</NavLink>
    </div>
  </div>
);

export default ArticlesPage;

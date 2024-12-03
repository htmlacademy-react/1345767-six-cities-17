import { Link } from 'react-router-dom';
import './styles.scss';
import { Helmet } from 'react-helmet-async';

function PageNotFound() {
  return (
    <section>
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
      <div className="not-found-container">
        <h2>Страница не найдена</h2>
        <h1>404</h1>
        <h2 className="return-link">
          <Link to={'/'}>Вернуться на главную</Link>
        </h2>
      </div>
    </section>
  );
}

export default PageNotFound;

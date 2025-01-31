import './Activities.css';
import construction from '../../images/construction.png';

function Activities() {
  return (
    <section className="activities__container">
      <img
        alt="imagem construção"
        src={construction}
        className="activities__image"
      />
      <span className='activities__text'>
        Pagína em construção, desculpe o transtorno!! {' '}
        <a className="activities__main" href="/main">
          Volte aqui.
        </a>
      </span>
    </section>
  );
}

export default Activities;

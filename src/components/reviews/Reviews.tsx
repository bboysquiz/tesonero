import './Reviews.sass';
import avatarImg from '../../assets/avatar.png';

const Reviews = () => {
  return (
    <section className='reviews'>
      <div className="reviews__container">
        <h2 className="reviews__title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
        <div className="reviews__main-block">
          <img src={avatarImg} alt="avatar" className="reviews__main-avatar" />
          <p className="reviews__main-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
            animi  autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae deleniti, iste nisi
            expedita, provident excepturi officia!
            Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?
            <span className="reviews__text_distinct">Jane Doe</span>
          </p>
        </div>
        <div className="reviews__block">
          <p className="reviews__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
            animi  autem aliquid
            <span className="reviews__text_distinct">Jane Doe</span>
          </p>
          <img src={avatarImg} alt="avatar" className="reviews__avatar" />
        </div>
        <div className="reviews__block">
          <img src={avatarImg} alt="avatar" className="reviews__avatar" />
          <p className="reviews__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
            animi  autem aliquid
            <span className="reviews__text_distinct">Jane Doe</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Reviews;
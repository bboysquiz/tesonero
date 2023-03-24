import './Features.sass';
import FeaturesList from './FeaturesList';

const Features = () => {
  
  return (
    <section className='features'>
      <div className="features__container">
        <h2 className="features__title">Lorem ipsum, dolor sit adipisicing elit.</h2>
        <h4 className="features__subtitle">Porro ab rerum omnis magnam eligendi error nobis dolore?</h4>

        <FeaturesList />
      </div>
    </section>
  )
}

export default Features;
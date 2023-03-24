import arrowImg from '../../assets/arrow-icon.svg';
import stabilityImg from '../../assets/stability.svg';
import LEDImg from '../../assets/LED.svg';
import lightsOffImg from '../../assets/lightsOff.svg';
import splitterImg from '../../assets/splitter.svg';
import powerOffImg from '../../assets/powerOff.svg';
import { useState } from 'react';

const FeaturesList = () => {
    const [activeFeature, setActiveFeature] = useState<number>(0)

    const toggleFeatures = (item: number) => {
        if (item === activeFeature) {
            setActiveFeature(0)
        } else {
            setActiveFeature(item)
        }
    }
    const list = [
        {
            id: 1,
            img: stabilityImg,
            alt: 'stability',
            text: 'Lorem ipsum, dolor sit amet adipisicing elit.',
            describe: 'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit'
        },
        {
            id: 2,
            img: LEDImg,
            alt: 'LED',
            text: 'Lorem ipsum, dolor sit amet adipisicing elit.',
            describe: 'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit'
        },
        {
            id: 3,
            img: lightsOffImg,
            alt: 'lightsOff',
            text: 'Lorem ipsum, dolor sit amet adipisicing elit.',
            describe: 'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit'
        },
        {
            id: 4,
            img: splitterImg,
            alt: 'splitter',
            text: 'Lorem ipsum, dolor sit amet adipisicing elit.',
            describe: 'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit'
        },
        {
            id: 5,
            img: powerOffImg,
            alt: 'powerOff',
            text: 'Lorem ipsum, dolor sit amet adipisicing elit.',
            describe: 'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit'
        }
    ]
    return (
        <ul className="features__list">
            {
                list.map((item) => (
                    <li
                        key={item.id}
                        className="features__list-item"
                        onClick={() => { toggleFeatures(item.id) }}
                    >
                        <div className="features__content-cover">
                            <img src={item.img} alt={item.alt} className="features__img" />
                            <p className={`features__text ${activeFeature === item.id ? 'features__text_active' : ''}`}>{item.text}</p>
                            <img src={arrowImg} alt="arrow" className={`features__icon ${activeFeature === item.id ? 'features__icon_active' : ''}`} />
                        </div>
                        <p className={`features__describe ${activeFeature === item.id ? 'features__describe_active' : 'features__describe_disable'}`}>{item.describe}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default FeaturesList;
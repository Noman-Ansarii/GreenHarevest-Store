import React, { useState } from 'react';
import IMG1 from '../images/feature-1.jpg.webp';
import IMG2 from '../images/feature-2.jpg.webp';
import IMG3 from '../images/feature-3.jpg.webp';
import IMG4 from '../images/feature-4.jpg.webp';
import IMG5 from '../images/feature-5.jpg.webp';
import IMG6 from '../images/feature-6.jpg.webp';
import IMG7 from '../images/feature-7.jpg.webp';
import IMG8 from '../images/feature-8.jpg.webp';
import IMG9 from '../images/feature-9.jpg.webp';
import IMG10 from '../images/feature-10.jpg.webp';
import IMG11 from '../images/feature-11.jpg.webp';
import IMG12 from '../images/feature-12.jpg.webp';
import IMG13 from '../images/feature-13.jpg.jpg';
import IMG14 from '../images/feature-14.jpg.jpg';
import IMG15 from '../images/feature-15.jpg';
import IMG16 from '../images/feature-16.jpg';
import IMG17 from '../images/feature-17.jpg';
import IMG18 from '../images/feature-18.jpg';
import IMG19 from '../images/feature-19.jpg';

function Featured_Items() {

  const [category, setCategory] = useState('all');

  const handleCategoryClick = (cat) => {
    setCategory(cat);
  };

  let itemsToDisplay;
  switch (category) {
    case 'all':
      itemsToDisplay = [
        { id: 1, image: IMG1, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 2, image: IMG2, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 3, image: IMG3, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 4, image: IMG4, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 5, image: IMG5, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 6, image: IMG6, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 7, image: IMG7, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 8, image: IMG8, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 9, image: IMG9, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 10, image: IMG10, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 11, image: IMG11, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 13, image: IMG13, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 14, image: IMG14, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 15, image: IMG15, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 16, image: IMG16, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 17, image: IMG17, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 18, image: IMG18, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        { id: 19, image: IMG19, name: 'Crab Pool Security', price: '$30.00', category: 'all' },
        // Add more items for 'all' category
      ];
      break;
    case 'fruits':
      itemsToDisplay = [
        { id: 1, image: IMG1, name: 'Crab Pool Security', price: '$30.00', category: 'fruits' },
        { id: 2, image: IMG2, name: 'Crab Pool Security', price: '$30.00', category: 'fruits' },
        { id: 3, image: IMG3, name: 'Crab Pool Security', price: '$30.00', category: 'fruits' },
        { id: 4, image: IMG4, name: 'Crab Pool Security', price: '$30.00', category: 'fruits' },
        { id: 5, image: IMG5, name: 'Crab Pool Security', price: '$30.00', category: 'fruits' },
        { id: 6, image: IMG7, name: 'Crab Pool Security', price: '$30.00', category: 'fruits' },
        { id: 7, image: IMG8, name: 'Crab Pool Security', price: '$30.00', category: 'fruits' },
        { id: 15, image: IMG15, name: 'Crab Pool Security', price: '$30.00', category: 'fruits' },
        { id: 16, image: IMG16, name: 'Crab Pool Security', price: '$30.00', category: 'fruits' },
        // Add more items for 'fruits' category
      ];
      break;
    case 'fresh-meat':
      itemsToDisplay = [
        { id: 9, image: IMG9, name: 'Crab Pool Security', price: '$30.00', category: 'fresh-meat' },
        { id: 17, image: IMG17, name: 'Crab Pool Security', price: '$30.00', category: 'fresh-meat' },
        { id: 18, image: IMG18, name: 'Crab Pool Security', price: '$30.00', category: 'fresh-meat' },
        { id: 19, image: IMG19, name: 'Crab Pool Security', price: '$30.00', category: 'fresh-meat' },
        // Add more items for 'fresh-meat' category
      ];
      break;
    case 'vegetables':
      itemsToDisplay = [
        { id: 10, image: IMG10, name: 'Crab Pool Security', price: '$30.00', category: 'vegetables' },
        { id: 11, image: IMG11, name: 'Crab Pool Security', price: '$30.00', category: 'vegetables' },
        // Add more items for 'vegetables' category
      ];
      break;
    case 'fastfood':
      itemsToDisplay = [
        { id: 6, image: IMG6, name: 'Crab Pool Security', price: '$30.00', category: 'fastfood' },
        { id: 12, image: IMG12, name: 'Crab Pool Security', price: '$30.00', category: 'fastfood' },
        { id: 13, image: IMG13, name: 'Crab Pool Security', price: '$30.00', category: 'fastfood' },
        { id: 14, image: IMG14, name: 'Crab Pool Security', price: '$30.00', category: 'fastfood' },
        // Add more items for 'fastfood' category
      ];
      break;
    default:
      itemsToDisplay = [];
  }


  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Featured Product</h2>
            </div>
            <div className="featured__controls">
              <ul>
                <li onClick={() => handleCategoryClick('all')} className={category === 'all' ? 'active mixitup-control-active' : ''} data-filter="*">All</li>
                <li onClick={() => handleCategoryClick('fruits')} className={category === 'fruits' ? 'active mixitup-control-active' : ''} data-filter=".fruits">Fruits</li>
                <li onClick={() => handleCategoryClick('fresh-meat')} className={category === 'fresh-meat' ? 'active mixitup-control-active' : ''} data-filter=".fresh-meat">Fresh Meat</li>
                <li onClick={() => handleCategoryClick('vegetables')} className={category === 'vegetables' ? 'active mixitup-control-active' : ''} data-filter=".vegetables">Vegetables</li>
                <li onClick={() => handleCategoryClick('fastfood')} className={category === 'fastfood' ? 'active mixitup-control-active' : ''} data-filter=".fastfood">Fastfood</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row featured__filter">
          {itemsToDisplay.filter(item => category === 'all' || item.category === category).map(item => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mix fruits fresh-meat">
              <div className="featured__item">
                <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${item.image})` }}>
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><i class='bx bxs-heart'></i></a></li>
                    <li><a href="#"><i class='bx bx-repost' ></i></a></li>
                    <li><a href="#"><i class='bx bxs-cart-alt' ></i></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">{item.name}</a></h6>
                  <h5>{item.price}</h5>
                </div>
              </div>
            </div>
          ))}
          {/* Repeat the above structure for the remaining items */}
        </div>
      </div>
    </section>
  );
}

export default Featured_Items;

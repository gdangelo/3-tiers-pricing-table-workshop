import PropTypes from 'prop-types';
import { CheckIcon } from '@heroicons/react/solid';

const Card = ({
  name = '',
  price = 0,
  currency = '$',
  frequency = 'month',
  features = [],
  featured = false,
}) => (
  <div
    className={`cursor-pointer shadow-xl rounded-md bg-white text-black border-indigo-600 ${
      featured ? 'border-2 relative' : 'border border-opacity-10'
    }`}
  >
    {/* Emphasized header */}
    {featured ? (
      <span className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-indigo-600 rounded-full px-6 py-1 uppercase text-white text-sm font-semibold tracking-wide whitespace-nowrap">
        Most popular
      </span>
    ) : null}

    {/* Card header */}
    <div className="py-12 px-6 border-b-2 border-gray-200">
      <p className="text-3xl font-semibold text-center mb-4">{name}</p>
      <div className="flex items-center justify-center">
        <div className="flex items-start">
          <p className="text-2xl sm:text-4xl font-medium mt-0 sm:mt-1 mr-0 sm:mr-1">
            {currency}
          </p>
          <p className="text-4xl sm:text-7xl font-bold mr-1 sm:mr-2">{price}</p>
        </div>
        <p className="text-gray-400 text-lg sm:text-2xl">/{frequency}</p>
      </div>
    </div>

    {/* Card body */}
    <div className="bg-gray-100 rounded-b-md p-6 sm:p-8 xl:p-12">
      {/* Features list */}
      <div className="mb-12">
        {features.map((feature, i) => (
          <div className="flex items-center mb-3" key={i}>
            <CheckIcon className="w-6 h-6 mr-2 sm:mr-4 text-green-500 flex-shrink-0" />
            <p className="text-gray-600 text-base sm:text-lg">{feature}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      {featured ? (
        <button className="whitespace-nowrap w-full py-4 px-8 tracking-wide font-medium bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 transition-all flex items-center justify-center">
          Start your trial
        </button>
      ) : (
        <button className="whitespace-nowrap w-full py-4 px-8 bg-white text-indigo-600 rounded-md text-lg font-medium tracking-wide transition-shadow focus:outline-none focus:ring-4 ring-indigo-600 ring-opacity-50">
          Start your trial
        </button>
      )}
    </div>
  </div>
);

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  frequency: PropTypes.oneOf(['month', 'year']),
  features: PropTypes.arrayOf(PropTypes.string),
  featured: PropTypes.bool,
};

export default Card;

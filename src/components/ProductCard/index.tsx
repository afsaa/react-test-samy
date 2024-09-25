import { sendLike } from '../../api';
import { ProductCardProps } from './index.types';

export const ProductCard: React.FC<ProductCardProps> = ({ id, type, title, author, price, main_attachment, liked, likes_count }): JSX.Element => {
  const titleInUpperCase = title.toUpperCase();
  const authorInLowerCase = author.toLocaleLowerCase();
  const priceWithDecimals = price.toFixed(2);

  function IconThumbsUp(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg viewBox="0 0 20 20" fill="currentColor" height="1em" width="1em" {...props}>
        <path d="M11 0h1v3l3 7v8a2 2 0 01-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 012-2h7V2a2 2 0 012-2zm6 10h3v10h-3V10z" />
      </svg>
    );
  }

  function IconRefresh(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M8.29289322,5.29289322 L10.2928932,3.29289322 C10.6834175,2.90236893 11.3165825,2.90236893 11.7071068,3.29289322 C12.0675907,3.65337718 12.0953203,4.22060824 11.7902954,4.61289944 L11.7071068,4.70710678 L11.3891629,5.0230186 C11.5916051,5.00770767 11.7953244,5 12,5 C16.418278,5 20,8.581722 20,13 C20,17.418278 16.418278,21 12,21 C7.581722,21 4,17.418278 4,13 C4,12.4477153 4.44771525,12 5,12 C5.55228475,12 6,12.4477153 6,13 C6,16.3137085 8.6862915,19 12,19 C15.3137085,19 18,16.3137085 18,13 C18,9.6862915 15.3137085,7 12,7 C11.8129339,7 11.6271216,7.00853145 11.4429483,7.02544919 L11.7071068,7.29289322 C12.0976311,7.68341751 12.0976311,8.31658249 11.7071068,8.70710678 C11.3466228,9.06759074 10.7793918,9.09532028 10.3871006,8.79029539 L10.2928932,8.70710678 L8.29289322,6.70710678 C7.93240926,6.34662282 7.90467972,5.77939176 8.20970461,5.38710056 L8.29289322,5.29289322 L10.2928932,3.29289322 L8.29289322,5.29289322 Z"
        />
      </svg>
    );
  }

  const handleLike = () => {
    sendLike(id);
  };

  return (
    <div className="w-full h-auto m-0 relative flex flex-col justify-evenly items-center border-2 border-gray-300 border-solid bg-white">
      {type === 'Image' && <img src={main_attachment.big} alt={title} loading="lazy" className="w-full h-auto object-cover" />}
      <div className="w-full my-8 flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center">{titleInUpperCase}</h1>
        <div className="flex gap-2 justify-center items-center">
          <p className="mt-2 text-2xl text-gray-300">by</p>
          <p className="mt-2 text-2xl">{authorInLowerCase}</p>
        </div>
      </div>
      {price && (
        <div className="absolute top-0 left-0 w-36 h-28 bg-white">
          <p className="m-4 text-xl font-semibold">{priceWithDecimals} $</p>
        </div>
      )}
      <div className="w-full border-t-2 border-t-gray-300 flex justify-evenly items-center">
        <button className="w-full flex justify-center items-center gap-3 h-24 border-r border-r-gray-300 text-3xl text-gray-300" onClick={handleLike}>
          {likes_count}{' '}
          {liked ? (
            <span className="w-10 h-10 flex justify-center items-center rounded-full bg-green-300">
              <IconThumbsUp className="w-5 text-white" />
            </span>
          ) : (
            <span className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-400">
              <IconThumbsUp className="w-5 text-white" />
            </span>
          )}
        </button>
        <button className="w-full flex justify-center items-center gap-3 h-24 border-l border-l-gray-300 text-3xl text-gray-300">
          <span className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-400">
            <IconRefresh className="w-10 text-white" />
          </span>
          {'000'}
        </button>
      </div>
    </div>
  );
};

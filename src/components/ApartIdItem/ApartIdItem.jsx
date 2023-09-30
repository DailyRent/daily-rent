import OrderBtn from '../OrderBtn/OrderBtn';
import IsLoading from '../share/IsLoading/IsLoading';
import Amenities from './Amenities/Amenities';
import ApartDataList from './ApartDataList/ApartDataList';
import styles from './ApartIdItem.module.scss';
import ApartIdSlider from './ApartIdSlider/ApartIdSlider';
import ApartStar from './ApartStar/ApartStar';

const ApartIdItem = ({ dataId, error, isLoading }) => {
  console.log(dataId);

  return (
    <section className={styles.container}>
      <h1 className="visuallyHidden">ApartId Page</h1>
      {isLoading ? (
        <IsLoading />
      ) : (
        <div className={styles.apartContent}>
          <ApartIdSlider dataId={dataId} />
          <div className={styles.content}>
            <ApartDataList dataId={dataId} />
            <div className={styles.arrow}></div>
            <Amenities />
            {/* <ApartStar /> */}
            <OrderBtn className={styles.orderBtn} />
          </div>
        </div>
      )}

      <p className={styles.textInfo}>
        Lorem ipsum dolor sit amet consectetur. A fermentum venenatis interdum
        ornare. Augue semper at risus neque maecenas neque potenti eget.
        Consequat neque in congue vitae rhoncus enim massa placerat. Duis
        laoreet pulvinar id egestas orci sit gravida. Massa quam arcu at
        gravida. Egestas arcu urna vulputate morbi. Euismod ut commodo sed
        augue. In amet in egestas auctor cursus sit. Semper etiam etiam sit
        diam. Tellus molestie a sit egestas. Amet ultricies arcu nibh est orci
        in dui. Mauris dignissim lobortis magna odio amet a. Netus faucibus ut
        est duis. Vehicula ut enim dolor aliquam. Mauris magna sed ultricies
        dolor ultrices nunc non enim urna. Montes viverra quis malesuada eget.
        Hendrerit leo massa massa diam adipiscing. Posuere ultrices malesuada
        vitae bibendum pulvinar. Quam volutpat at ornare gravida nec donec
        consectetur. Ultrices aliquam ac nec fames purus sed mauris dui. Non a
        nulla est quis nunc porttitor. Ut amet duis dictum quam ut cras ac. Nisl
        sollicitudin faucibus eu blandit odio lectus nulla.
      </p>
      <div className={styles.contactsMap}>
        <iframe
          src={
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.3393537943252!2d34.80805147617976!3d50.898936654971344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412901f13d7baf35%3A0xe09c5774205d9d8c!2z0L_RgNC-0ZfQt9C0INCk0ZbQu9Cw0YLRltCy0YHRjNC60LjQuSwgMjUsINCh0YPQvNC4LCDQodGD0LzRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDAwMDA!5e0!3m2!1suk!2sua!4v1695487103245!5m2!1suk!2sua'
          }
          width="600"
          height="600"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Адреса на мапі"
        ></iframe>
      </div>
    </section>
  );
};

export default ApartIdItem;

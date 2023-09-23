import styles from './page.module.scss';

export default function OneRoomsLayout({ children }) {
  return (
    <section className={styles.container}>
      <h1 className={styles.visuallyHidden}>OneRooms Appartments</h1>
      <p>filter</p>
      <div>{children}</div>
    </section>
  );
}

import { MENU_SECTIONS } from './data';
import styles from './Menu.module.css';

const Menu = () => (
  <aside className={styles.root}>
    {MENU_SECTIONS.map(({ id, subtitle, title, isCategory, component: Component, ...props }) => (
      <section key={`menu-section-${id}`} className={styles.menu}>
        <div className={styles.header}>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <Component
          {...(!isCategory && {
            ...props,
          })}
        />
      </section>
    ))}
  </aside>
);

export default Menu;

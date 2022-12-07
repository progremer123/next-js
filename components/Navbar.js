import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          <a>홈</a>
        </Link>
        <Link href="/about">
          <a>더보기</a>
        </Link>
        <Link href="/profile">
          <a>프로필</a>
        </Link>
        <Link href="/contect">
          <a>개발자 소개</a>
        </Link>
      </div>
    </div>
  );
}

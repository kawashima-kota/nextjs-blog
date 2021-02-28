import Link from 'next/link'
import Date from '../components/date'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts'

//静的ジェネレータを使用
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
      <div className={styles.grid}>
        <a href="/profile" className={styles.card}>
          <h3>自己紹介</h3>
          <p>サイト主について</p>
        </a>

        <a href="/career" className={styles.card}>
          <h3>経歴</h3>
          <p>私の経歴について</p>
        </a>

        <a href="/papers" className={styles.card}>
          <h3>書き物</h3>
          <p>論文など</p>
        </a>
        <a href="/portfolio" className={styles.card}>
          <h3>作品</h3>
          <p>webアプリ・動画など</p>
        </a>

      </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding}`}>
        <h2 className={utilStyles.headingLg}>
          日記
        </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding}`}> 
        <h2>お問い合わせ</h2>
        <p>何か聞きたいことがあれば気軽にご連絡ください！
        </p>

        <button>
          お問い合わせフォームを表示
        </button>
      </section>
    </Layout>
  )
}
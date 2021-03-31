import Head from "next/head";
import styles from './styles.module.scss';

export default function Posts(){
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>45 de adma 9500</time>
                        <strong>Asdfk asdf skadf asd</strong>
                        <p>Açdnfaçdsnfkasndf al fndsa jfna dfna lsdnfsa </p>
                    </a>
                    <a href="">
                        <time>45 de adma 9500</time>
                        <strong>Asdfk asdf skadf asd</strong>
                        <p>Açdnfaçdsnfkasndf al fndsa jfna dfna lsdnfsa </p>
                    </a>
                    <a href="">
                        <time>45 de adma 9500</time>
                        <strong>Asdfk asdf skadf asd</strong>
                        <p>Açdnfaçdsnfkasndf al fndsa jfna dfna lsdnfsa </p>
                    </a>
                </div>
            </main>
        </>
    )
}
import Head from "next/head";
import Prismic from '@prismicio/client';
import styles from './styles.module.scss';
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";

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

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();
    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication')
    ], {
        fetch: ['publication.title', 'publication.content'],
        pageSize: 100,
    })

    console.log(JSON.stringify(response, null, 2));

    return {
        props: {}
    }
}

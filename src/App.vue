<template>
  <div id="app">
    <Header></Header>
    <main class="max-w-4xl h-6 my-0 mx-auto flex flex-col">
      <ApolloQuery :query="require('./graphql/Articles.gql')">
        <template slot-scope="{ result: { loading, error, data } }">
          <!-- Loading -->
          <div v-if="loading" class="loading apollo">
            <Spinner />
          </div>

          <!-- Error -->
          <div v-else-if="error" class="error apollo">{{ error }}</div>

          <!-- Result -->
          <div class="flex flex-col items-center" v-else-if="data">
            <p
              class="
                text-gray-800 text-lg
                mt-20
                mb-20
                text-center
                my-0
                mx-auto
                max-w-2xl
              "
            >
              Cycling Buzz keeps track of the worlds most famous cyclists for
              you! Every night we hunt the web, looking for new headlines,
              providing you anything noteworthy in a convenient timeline :)
            </p>
            <Article
              v-for="article in deduplicateArticles(data.articles)"
              :key="article.id"
              :article="article"
            />
          </div>

          <!-- No result -->
          <div v-else class="no-result apollo">
            <Sinner />
          </div>
        </template>
      </ApolloQuery>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Article from "./components/Article.vue";
import Spinner from "./components/Spinner.vue";

export default {
  name: "App",
  components: {
    Header,
    Article,
    Spinner,
  },
  methods: {
    /*
      Deduplicate articles in case they mention multiple cyclists
    */
    deduplicateArticles: (articles) =>
      articles.reduce((uniqueArticles, article) => {
        const articleClone = { ...article }; // prevent mutability issues
        const duplicateIndex = uniqueArticles.findIndex(
          (record) => record.url === articleClone.url
        );

        // if: items exists, add the cyclist id to the array
        // else: make an array of the cyclist id
        if (duplicateIndex >= 0) {
          uniqueArticles[duplicateIndex].cyclist.push(articleClone.cyclist);
        } else {
          articleClone.cyclist = [articleClone.cyclist];
          uniqueArticles.push(articleClone);
        }

        return uniqueArticles;
      }, []),
  },
};
</script>

<style></style>

<script lang="ts">
export default {
  name: "BaseComment",
  props: {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    respondTo: String,
    responses: {
      type: Array,
      default: (): [] => [],
    },
  },
  data: (vm) => ({
    responsesVisible: false,
  }),
  computed: {
    hasResponses: (vm) => Boolean(vm.responses.length),
  },
  methods: {
    changeResponsesVisibility() {
      this.responsesVisible = !this.responsesVisible;
    },
  },
};
</script>

<template>
  <div class="comment-wrapper">
    <div class="comment">
      <header class="comment__header">
        <div class="comment__logotype">
          <div class="comment__image" />
        </div>
      </header>
      <div class="comment__main">
        <div class="comment__content">
          <h4 class="comment__author" v-text="author" />
          <p class="comment__message">
            <span class="comment__respond-to">
              {{ respondTo ? `${respondTo}` : "" }} </span
            >{{ respondTo ? `, ` : "" }} {{ message }}
          </p>
        </div>
      </div>
      <footer class="comment__footer">
        <button
          v-if="hasResponses"
          class="comment__show-responses"
          @click="changeResponsesVisibility"
        >
          {{ responsesVisible ? "Скрыть ответы" : "Показать ответы" }}
        </button>
        <div class="comment__respond">Ответить</div>
      </footer>
    </div>

    <div v-if="responsesVisible" class="comment__responses">
      <BaseComment
        v-for="(response, index) in responses"
        :key="index"
        :author="response.author"
        :message="response.message"
        :responses="response.responses"
        :respond-to="author"
      />
    </div>
  </div>
</template>

<style lang="scss">
.comment-wrapper {
  display: block;
  width: 100%;
  max-width: 780px;
  box-sizing: border-box;
  .comment-wrapper {
    padding-left: 20px;
    border-top: 2px solid white;
  }
}

.comment {
  display: grid;
  padding: 10px 10px 0 10px;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr 30px;
}

.comment__header {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.comment__content {
  margin-left: 10px;
}

.comment__author {
  margin: 0;
}

.comment__message {
  margin-top: 7px;
}

.comment__main {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.comment__image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #cbcbcb;
}

.comment__respond-to {
  color: hsla(210, 52%, 34%, 1);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}

.comment__message {
}

.comment__footer {
  display: flex;
  grid-column: 1/3;
  align-items: center;
}

.comment__show-responses {
  margin-right: 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: hsla(210, 52%, 34%, 1);
  padding: 0;
  font-size: 15px;
}

.comment__respond {
  font-size: 15px;
  cursor: pointer;
}
</style>

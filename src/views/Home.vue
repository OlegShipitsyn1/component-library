<template>
  <div class="home">
    <h1>home</h1>
    <BaseButton
      v-wave
      border-radius="0.1em"
      font-size="22px"
      background-color="hsla(210, 52%, 34%, 1)"
      color="#ffffff"
      @click="$refs.modal.setModalVisibility(true)"
      >Hello
    </BaseButton>
    <BaseModal ref="modal" :is-modal-opened="false" title="Welcome" />
    <BaseComment
      :author="messageData.author"
      :message="messageData.message"
      :responses="messageData.responses"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton";
import BaseModal from "@/components/BaseModal";
import BaseComment from "@/components/BaseComment";

export default defineComponent({
  name: "Home",
  components: { BaseButton, BaseModal, BaseComment },
  data: () => ({
    messageData: {
      author: "Hugan",
      message: "Hello, comment",
      responses: [
        {
          author: "Hugan2",
          message: "Hello, comment",
          responses: [
            {
              author: "Hugan2",
              message: "Hello, comment",
            },
            {
              author: "Hugan3",
              message: "Hello, comment",
            },
            {
              author: "Hugan4",
              message: "Hello, comment",
            },
          ],
        },
        {
          author: "Hugan3",
          message: "Hello, comment",
        },
        {
          author: "Hugan4",
          message: "Hello, comment",
        },
      ],
    },
  }),
});
</script>

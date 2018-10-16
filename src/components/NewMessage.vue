<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (or use enter to send):</label>
      <input type="text" name="new-message" v-model="newMessage">
      <p v-if="feedback" class="red-text">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'NewMessage',
  props: ['name'],
  data(){
    return {
      newMessage: null,
      feedback: null
    }
  },
  methods: {
    addMessage(){
      if (this.newMessage) {
        db.collection('messages').add({
          content: this.newMessage,
          name: this.name,
          timestamp: Date.now()
        }).catch(err => {
          console.log(err)
        })
        this.newMessage = null
        this.feedback = null
      }else{
        this.feedback = "You must enter a message in order to send one"
      }
    }
  }
}
</script>

<style>
/* .new-message .add-message{
  position: absolute;
  right: 25px;
  bottom: 16px;
  color: #fff;
  font-size: 1.4em;
  cursor: pointer;
} */
</style>

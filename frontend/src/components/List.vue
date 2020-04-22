<template>
  <div class="posts">
    <div class="post" 
      v-for="post in posts" 
      :key="post.id">

      {{ post.author }}

    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import axios from 'axios'
export default {
  name: 'List',

  data() {
    return {
      posts: {},
      socket: io('localhost:3000')
    }
  },

  methods: {
    async fetchPosts() {
      const response = await axios.get('http://localhost:3000/posts')
      this.posts = response.data
    }
  },

  mounted () {

    this.socket.on('post', (post) =>{
      this.posts.push(post)
    })

    this.fetchPosts()
  }

}
</script>

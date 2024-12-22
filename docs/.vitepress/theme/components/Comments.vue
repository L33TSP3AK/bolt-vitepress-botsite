<!-- Comments.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const BOT_TOKEN = '7088177603:AAGJ85N53g5i7PUhWOUpRksvccF2LNWZlio'
const USER_ID = '6807364463'

const props = defineProps<{
  serviceId: string
}>()

interface Comment {
  id: string
  author: string
  content: string
  timestamp: Date
  status: 'pending' | 'approved' | 'rejected'
  replies: Comment[]
}

const comments = ref<Comment[]>([])
const newComment = ref('')
const authorName = ref('')
const pendingComments = ref<Comment[]>([])

// Poll for updates every 5 seconds
const pollForUpdates = async () => {
  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`)
    const data = await response.json()
    
    if (data.ok && data.result) {
      data.result.forEach((update: any) => {
        if (update.callback_query) {
          const { data: callbackData } = update.callback_query
          
          if (callbackData.startsWith('approve_')) {
            const commentId = callbackData.replace('approve_', '')
            approveComment(commentId)
          } else if (callbackData.startsWith('reject_')) {
            const commentId = callbackData.replace('reject_', '')
            rejectComment(commentId)
          }
        }
      })
    }
  } catch (error) {
    console.error('Failed to poll for updates:', error)
  }
}

// Start polling when component mounts
onMounted(() => {
  const pollInterval = setInterval(pollForUpdates, 5000)
  onUnmounted(() => clearInterval(pollInterval))
})

const approveComment = (commentId: string) => {
  const commentIndex = pendingComments.value.findIndex(c => c.id === commentId)
  if (commentIndex !== -1) {
    const comment = pendingComments.value[commentIndex]
    comments.value.unshift({ ...comment, status: 'approved' })
    pendingComments.value.splice(commentIndex, 1)
  }
}

const rejectComment = (commentId: string) => {
  const commentIndex = pendingComments.value.findIndex(c => c.id === commentId)
  if (commentIndex !== -1) {
    pendingComments.value.splice(commentIndex, 1)
  }
}

const addComment = async () => {
  if (!newComment.value.trim() || !authorName.value.trim()) return
  
  const comment = {
    id: Date.now().toString(),
    author: authorName.value,
    content: newComment.value,
    timestamp: new Date(),
    status: 'pending' as const,
    replies: []
  }

  // Format message for Telegram
  const message = `
💬 New Comment
Service: ${props.serviceId}
From: ${authorName.value}
Message: ${newComment.value}
  `.trim()

  // Send to Telegram
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: USER_ID,
        text: message,
        reply_markup: {
          inline_keyboard: [[
            {
              text: '✅ Approve',
              callback_data: `approve_${comment.id}`
            },
            {
              text: '❌ Reject',
              callback_data: `reject_${comment.id}`
            }
          ]]
        }
      })
    })
    
    // Add to pending comments
    pendingComments.value.unshift(comment)
    newComment.value = ''
    authorName.value = ''
  } catch (error) {
    console.error('Failed to send comment:', error)
  }
}
</script>

<template>
  <div class="comments-section">
    <h4>Comments</h4>
    
    <div class="comment-form">
      <input
        v-model="authorName"
        type="text"
        placeholder="Your name"
        class="author-input"
      />
      <div class="input-group">
        <textarea
          v-model="newComment"
          placeholder="Leave a comment..."
          class="comment-input"
        ></textarea>
        <button 
          class="submit-button"
          @click="addComment"
          :disabled="!newComment.trim() || !authorName.trim()"
        >
          Post
        </button>
      </div>
    </div>
    
    <div class="comments-list">
      <div v-if="comments.length === 0 && pendingComments.length === 0" class="no-comments">
        Be the first to comment!
      </div>
      
      <div v-if="pendingComments.length > 0" class="pending-comments">
        <h5>Pending Comments</h5>
        <div
          v-for="comment in pendingComments"
          :key="comment.id"
          class="comment pending"
        >
          <div class="comment-header">
            <span class="author">{{ comment.author }}</span>
            <span class="timestamp">
              {{ new Date(comment.timestamp).toLocaleString() }}
            </span>
          </div>
          <p class="comment-content">{{ comment.content }}</p>
          <div class="pending-badge">Awaiting Approval</div>
        </div>
      </div>
      
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="comment"
      >
        <div class="comment-header">
          <span class="author">{{ comment.author }}</span>
          <span class="timestamp">
            {{ new Date(comment.timestamp).toLocaleString() }}
          </span>
        </div>
        <p class="comment-content">{{ comment.content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comments-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-border);
}

h4 {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
}

.comment-form {
  margin-bottom: 2rem;
}

.author-input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
}

.input-group {
  display: flex;
  gap: 1rem;
}

.comment-input {
  flex: 1;
  min-height: 100px;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  resize: vertical;
}

.submit-button {
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
}

.submit-button:hover:not(:disabled) {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
}

.submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.no-comments {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-alt);
  border-radius: 0.5rem;
}

.comment {
  padding: 1rem;
  background: var(--vp-c-bg-alt);
  border-radius: 0.5rem;
  border: 1px solid var(--vp-c-border);
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.author {
  font-weight: 600;
  color: var(--vp-c-brand);
}

.timestamp {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.comment-content {
  margin: 0;
  color: var(--vp-c-text-1);
  line-height: 1.5;
}

.pending-comments {
  margin-bottom: 2rem;
}

.pending-comments h5 {
  color: var(--vp-c-warning);
  margin: 0 0 1rem 0;
}

.comment.pending {
  border: 1px solid var(--vp-c-warning);
  background: var(--vp-custom-block-warning-bg);
}

.pending-badge {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: var(--vp-c-warning);
  color: var(--vp-c-bg);
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
}
</style>
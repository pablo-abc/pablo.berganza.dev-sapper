import { crossfade } from 'svelte/transition'

const [send, receive] = crossfade({
  duration: 200,
  fallback: () => {
    return {
      duration: 200,
      css: t => `opacity: ${t}`,
    }
  },
})

export { send, receive }

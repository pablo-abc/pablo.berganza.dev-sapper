import { crossfade } from 'svelte/transition'
import { expoOut } from 'svelte/easing'

const [send, receive] = crossfade({
  duration: 200,
  easing: expoOut,
  fallback: () => {
    return {
      duration: 200,
      css: t => `opacity: ${t}`,
    }
  },
})

export { send, receive }

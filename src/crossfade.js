import { crossfade } from 'svelte/transition'
import { expoOut } from 'svelte/easing'

const [send, receive] = crossfade({
  duration: 400,
  easing: expoOut,
  fallback: () => {
    return {
      duration: 400,
      css: t => `opacity: ${t}`,
    }
  },
})

export { send, receive }

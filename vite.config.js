import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
export default defineConfig({
   plugins: [vue()],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
      },
   },
})

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })

/*
Access-Control-Allow-Origin is a response header, so you should configure cse.google.com to return this header
if for some reason it's not possible you can make request from your backed instead
*/ 
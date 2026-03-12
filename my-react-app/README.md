# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



React Router Setup
https://www.youtube.com/watch?v=c02YoWR9gSY



npm country flag for Windows Fix
https://www.npmjs.com/package/country-flag-icons

Temp code
// data.js
export const users = [
  { id: 1, name: 'Alice', country: 'US' },
  { id: 2, name: 'Bob', country: 'FR' },
  { id: 3, name: 'Charlie', country: 'JP' }
]

import React from 'react'
import { users } from './data' // 匯入你的資料
import Flags from 'country-flag-icons/react/3x2'

const UserList = () => {
  return (
    <ul>
      {users.map(user => {
        // 1. 根據資料中的 country 代碼找到對應的組件
        const FlagComponent = Flags[user.country]

        return (
          <li key={user.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>{user.name}</span>
            {/* 2. 檢查組件是否存在，存在才渲染 */}
            {FlagComponent ? (
              <FlagComponent title={user.country} style={{ width: '30px' }} />
            ) : (
              <span>(No Flag)</span>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default UserList


Cloudinary
https://cloudinary.com/guides/video-effects/how-to-create-a-video-overlay-in-react
https://cloudinary.com/documentation/react_video_transformations



--------------- for Exam ---------------
Remember SaaS , Paas and Iaas !!!!!

Public Cloud , Private Cloud , Hybid Cloud
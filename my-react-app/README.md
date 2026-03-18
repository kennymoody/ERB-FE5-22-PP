# ERB Personal Homework by #22

## TODO:
~1. LocationAttraction.jsx > Fix get json data issue , also Grid issue - DONE~

~2. input all the data to json - DONE~

~3. image for plug / script for multi plug - DONE~

~4. image for currency - Cancelled~

~5. gallery popup image with Click , can close , can next or prev - DONE~

~6. Weather Widget change to React version - DONE~

~7. Currency Converter not work , need fix - DONE~

~Idea - get the convert ratio from frankfurter api , then you can do the calculation. by using the original converter layout~

~8. theme text color check - DONE~

~9. fix youtube playback issue - fix in all page - DONE~

~10. fix map issue - DONE~

~11. replace pic from picsum to cloudiary if possible - Cancelled~

~12. fixed still can scroll issue when mobile menu activated - DONE~

~13. title - DONE~

~14. favicon - DONE~

15. mediaquery test in mobile and pad

~16. clear old files - DONE~

~17. footer page - social link list, intro page link , email - Cancelled~

~18. intro page ( about me ) - Cancelled~

~19. chagne some location font from primary to secondary - DONE~

~20. change to correct picsum photo - DONE~

~21. mediaquery > mobile > animal photo issue~

~22. mediaquery > mobile > gap between map and guide become smaller - DONE~

~23. mediaquery > mobile > footer flex display issue~

~24. mediaquery > pad > footer flex display issue~

~25. mediaquery > mobile > subhero info font smaller~

~26. mediaquery > mobile > Rome page guide grid not showing well~

~27. mediaquery > pad > Rome page guide grid not showing well~

~28. Cairo page > local insight text color issue~

29. mediaquery > mobile > Tips page need change to flex column

30. check old CSS and remove

31. make all location widget to get the data from center


## Useful Things:
React Router Setup

https://www.youtube.com/watch?v=c02YoWR9gSY

npm country flag for Windows Fix

https://www.npmjs.com/package/country-flag-icons

Temp code for Flag
```react
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
```

Cloudinary Guide

https://cloudinary.com/guides/video-effects/how-to-create-a-video-overlay-in-react

https://cloudinary.com/documentation/react_video_transformations

https://www.designrift.dev/

https://uicolors.app/generate/fcb80c

Create Favicon

https://favicon.io/

Free Photo

https://pixabay.com/


## --------------- for Exam ---------------
Remember SaaS , Paas and Iaas !!!!!

Public Cloud , Private Cloud , Hybid Cloud

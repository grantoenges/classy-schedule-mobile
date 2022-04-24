import React from 'react'

/*
This page is the testing ground for the shake feature. All of this code is subject to change and is entirely experimental
*/
export const MyComponent = () => {
  React.useEffect(() => {
    const subscription = RNShake.addListener(() => {
      // Your code here...
      alert("sup")
    })

    return () => {
      // Your code here...
      subscription.remove()
    }
  }, [])
}

// For v5.x.x onwards:
import React from 'react'

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
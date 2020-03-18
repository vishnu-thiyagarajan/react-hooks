import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../App'
function Child () {
  const value = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>{value} || {channel}</div>
  )
//   return (
//     <div>
//       <UserContext.Consumer>
//         {val => {
//           return (
//             <ChannelContext.Consumer>
//               {chnl => {
//                 return (
//                   <div>{val} || {chnl}</div>
//                 )
//               }}
//             </ChannelContext.Consumer>
//           )
//         }}
//       </UserContext.Consumer>
//     </div>
//   )
}

export default Child

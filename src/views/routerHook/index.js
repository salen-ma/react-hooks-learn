import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, useRouteMatch, useParams } from 'react-router-dom'

function RouterHook (props) {
  console.log(props)
  console.log(useHistory())
  console.log(useLocation())
  console.log(useRouteMatch())
  console.log(useParams())

  return <div>路由钩子</div>
}

export default RouterHook
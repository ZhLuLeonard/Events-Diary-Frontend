import React from 'react'
import clas from 'classnames'

const Icon = ({userIconSrc, className}) => (
    <img className={className} src={userIconSrc} style={{border:'white', 'borderRadius':'50%'}}/>
)

export {Icon};
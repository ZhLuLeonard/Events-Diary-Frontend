import React from 'react'
import clas from 'classnames'

const Icon = ({userIconSrc, className}) => (
    <img className={clas(className)} src={userIconSrc} />
)
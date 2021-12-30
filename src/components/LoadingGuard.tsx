import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { Item } from '../../pages/t2dm'

interface LoadingGuardProps {
    loading: boolean
    children: any
}

function LoadingGuard(props: LoadingGuardProps) {
    if (props.loading) {
        return <Item>Loading... </Item>
    }
    return (
        <>
            {props.children}
        </>
    )
}

export default LoadingGuard

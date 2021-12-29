import React, { Children } from 'react'
import PropTypes from 'prop-types'

interface LoadingGuardProps {
    loading: boolean
    children: any
}

function LoadingGuard(props: LoadingGuardProps) {
    if (props.loading) {
        return <div>Loading... </div>
    }
    return (
        <>
            {props.children}
        </>
    )
}

export default LoadingGuard

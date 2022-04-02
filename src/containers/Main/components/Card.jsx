import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card as CardUI } from '../../../components'
import {
    LabelStyle,
    ValueStyled,
    CardContentStyled
} from './style'

function Card ({ value, label, color }) {
    return (
        <CardUI>
            <CardContentStyled color={color}>
                <ValueStyled>{value}</ValueStyled>
                <LabelStyle>{label}</LabelStyle>
            </CardContentStyled>
        </CardUI>
    )
}

export default memo(Card)
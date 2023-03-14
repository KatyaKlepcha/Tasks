import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#5eea49',
                paddingRight: 1,
                paddingLeft: 1,
                height: 8,
                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                        boxShadow: 'inherit',
                    },
                    '&:before': {
                        display: 'none',
                    },
                    '&:after': {
                        // content: '',
                        top: 0,
                        left: 0,
                        right: 0,
                        width: 2,
                        height: 2
                    },
                },
                '& .MuiSlider-rail': {
                    backgroundColor: 'black',
                },
                '& .MuiSlider-valueLabel': {
                    lineHeight: 1.2,
                    fontSize: 12,
                    background: 'unset',
                    padding: 0,
                    width: 32,
                    height: 32,
                    borderRadius: '50% 50% 50% 0',
                    backgroundColor: '#a5a9a7',
                    transformOrigin: 'bottom left',
                    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
                    '&:before': {display: 'none'},
                    // '&.MuiSlider-valueLabelOpen': {
                    //     transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
                    // },
                    '& > *': {
                        transform: 'rotate(45deg)',
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
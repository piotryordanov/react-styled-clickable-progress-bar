/* eslint no-undef: 0 */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React, {useState, useEffect} from 'react'

const Bar = styled.div`
	margin: 0;
	padding: 0;
	position: fixed;
	z-index: 99;
	top: ${props => props.top};
	left: ${props => props.left};
	height: ${props => props.height};
	width: ${props => props.width};
	background-color: ${props => props.color};
	:hover {
		cursor: pointer;
	}
`

const onClick = e => {
	const curr = e.pageX
	const width = e.currentTarget.clientWidth
	const height = window.document.body.offsetHeight - window.innerHeight
	const ratio = (curr * 100) / width
	window.scrollTo(0, (height * ratio) / 100)
}

const ProgressBar = props => {
	// Const [width, updateWidth] = useState(null)
	console.log('here')
	try {
		console.log(document)
	} catch {
		console.log('document aint defined')
	}

	try {
		console.log(window)
	} catch {
		console.log('window aint defined')
	}

	console.log(window)
	return <div>Hello world</div>
	// UseEffect(() => {
	// 	const Scrolling = () => {
	// 		const winScroll =
	// 			document.body.scrollTop || document.documentElement.scrollTop
	// 		const height =
	// 			document.documentElement.scrollHeight -
	// 			document.documentElement.clientHeight
	// 		const scrolled = (winScroll / height) * 100
	// 		if (height > 0) {
	// 			updateWidth(`${scrolled}%`)
	// 		} else {
	// 			updateWidth(null)
	// 		}
	// 	}
	//
	// 	window.addEventListener('scroll', Scrolling)
	// 	return () => window.removeEventListener('scroll', Scrolling)
	// }, [])
	//
	// return typeof window === 'object' && typeof document === 'object' ? (
	// 	<>
	// 		<Bar width={width} {...props} />
	// 		<Bar
	// 			width="100%"
	// 			onClick={e => onClick(e, updateWidth)}
	// 			{...props}
	// 			color="transparent"
	// 		/>
	// 	</>
	// ) : (
	// 	<> </>
	// )
}

ProgressBar.propTypes = {
	top: PropTypes.number,
	left: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string
}
ProgressBar.defaultProps = {
	top: '0px',
	left: '0px',
	height: '5px',
	color: 'black'
}

export default ProgressBar

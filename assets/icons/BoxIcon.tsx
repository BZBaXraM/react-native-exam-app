import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BoxIcon(props: any) {
    return (
        <Svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M23.22 20.315l-1.793 1.038V40l16.142-9.32V12.034L23.22 20.315zM26.141 3.593L19.934 0 3.344 9.577 9.56 13.17l16.581-9.577zM36.515 9.577L29.36 5.502l-16.58 9.577.945.49 6.208 3.585 6.174-3.56 10.407-6.017zM11.527 21.934l-2.97-1.527V15.66l-6.125-3.527v18.514L18.456 39.9V21.386l-6.929-3.992v4.54z"
                fill="#2D0C57"
            />
        </Svg>
    )
}

export default BoxIcon;

import React from "react"
import ContentLoader from "react-content-loader"

const ItemsLoader = (props) => (
   <ContentLoader
      speed={2}
      width={1500}
      height={500}
      viewBox="0 0 1500 500"
      backgroundColor="rgba(217, 217, 217, 0.2)"
      foregroundColor="rgba(217, 217, 217, 0.1)"
      {...props}
   >
      <rect x="0" y="0" rx="15" ry="15" width="403" height="225" />
      <rect x="140" y="240" rx="8" ry="8" width="130" height="33" />
      <rect x="140" y="325" rx="8" ry="8" width="130" height="50" />
      <rect x="140" y="390" rx="8" ry="8" width="130" height="35" />

      <rect x="540" y="0" rx="15" ry="15" width="403" height="225" />
      <rect x="670" y="240" rx="8" ry="8" width="130" height="33" />
      <rect x="670" y="325" rx="8" ry="8" width="130" height="50" />
      <rect x="670" y="390" rx="8" ry="8" width="130" height="35" />

      <rect x="1070" y="0" rx="15" ry="15" width="403" height="225" />
      <rect x="1210" y="240" rx="8" ry="8" width="130" height="33" />
      <rect x="1210" y="325" rx="8" ry="8" width="130" height="50" />
      <rect x="1210" y="390" rx="8" ry="8" width="130" height="35" />
   </ContentLoader>
)

export default ItemsLoader
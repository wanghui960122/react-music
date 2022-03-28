import React, { memo } from 'react'

import HYTopBanner from './c-cpns/top-banner'
import HYHotRecommend from './c-cpns/hot-recommend'
import HYNewAlbun from './c-cpns/new-album'
import HYRMCRanking from './c-cpns/recommend-ranking'
import HYHotAnchor from './c-cpns/hot-anchor'
import HYSettleSinger from './c-cpns/settle-singer'
import HYUserlogin from './c-cpns/user-login'
import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'

export default memo(function HYRecommend(props) {
  

  return (
    <RecommendWrapper>
      <HYTopBanner></HYTopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HYHotRecommend />
          <HYNewAlbun />
          <HYRMCRanking />
        </RecommendLeft>
        <RecommendRight>
          <HYUserlogin/>
          <HYSettleSinger/>
          <HYHotAnchor/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})


// function HYRecommend(props) {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners])

//   return (
//     <div>
//       <h2>HYRecommend: {topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     topBanners: state.recommend.topBanners
//   }
// };

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));

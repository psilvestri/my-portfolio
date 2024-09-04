'use client';

import { Providers } from '../providers';

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import '../styles/ParallaxMountains.css';

export default function ParallaxMountains() {
	return (
		<div>
			<Providers>
				<ParallaxBanner className="bannerContainer">
					<ParallaxBannerLayer
						className="bannerLayer"
						image="assets/ParLayer7.svg"
						speed={-140}
						style={{ translate: '0 1600px' }}
					/>
					<ParallaxBannerLayer
						className="bannerLayer"
						image="assets/ParLayer6.svg"
						speed={-120}
						style={{ translate: '0px 1300px' }}
					/>
					<ParallaxBannerLayer
						className="bannerLayer"
						image="assets/ParLayer5.svg"
						speed={-100}
						style={{ translate: '0px 1150px' }}
					/>
					<ParallaxBannerLayer
						className="bannerLayer"
						image="assets/ParLayer4.svg"
						speed={-80}
						style={{ translate: '0px 900px' }}
					/>
					<ParallaxBannerLayer
						className="bannerLayer"
						image="assets/ParLayer3.svg"
						speed={-60}
						style={{ translate: '0px 700px' }}
					/>
					<ParallaxBannerLayer
						className="bannerLayer"
						image="assets/ParLayer2.svg"
						speed={-40}
						style={{ translate: '0px 450px' }}
					/>
					<ParallaxBannerLayer
						className="bannerLayer"
						image="assets/ParLayer1.svg"
						speed={0}
						style={{ translate: '0px 0px' }}
					/>
					<ParallaxBannerLayer
						className="bannerLayer"
						image="assets/ParLayerBirds.svg"
						speed={200}
						style={{ translate: '0px 2920px' }}
					/>
					<div className="welcomeMessage">
						<h1>Hi, I&apos;m Peter</h1>
						<h2>Look what I can do...</h2>
						<div className="bannerArrow"></div>
					</div>
				</ParallaxBanner>
			</Providers>
		</div>
	);
}

// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { SocialDiscord24, SocialLinkedin24, SocialTwitter24 } from '@mysten/icons';
import { type ReactNode } from 'react';

type FooterItem = {
	category: string;
	items: { title: string; children: ReactNode; href: string }[];
};
export type FooterItems = FooterItem[];

function FooterIcon({ children }: { children: ReactNode }) {
	return <div className="flex items-center text-steel-darker">{children}</div>;
}

export const footerLinks = [
	{
		title: 'About',
		href: 'https://polymedia.app',
	},
	{
		title: 'GitHub',
		href: 'https://github.com/juzybits/polymedia-explorer',
	},
	{
		title: 'Twitter',
		href: 'https://twitter.com/polymedia_app',
	},
	{
		title: 'Discord',
		href: 'https://discord.gg/DsxqP88EQp',
	},
];

/*
export const socialLinks = [
	{
		children: (
			<FooterIcon>
				<SocialDiscord24 />
			</FooterIcon>
		),
		href: 'https://discord.gg/DsxqP88EQp',
	},
	{
		children: (
			<FooterIcon>
				<SocialTwitter24 />
			</FooterIcon>
		),
		href: 'https://twitter.com/polymedia_app',
	},
];
*/

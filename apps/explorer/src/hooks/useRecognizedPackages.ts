// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { SUI_FRAMEWORK_ADDRESS, SUI_SYSTEM_ADDRESS } from '@mysten/sui.js/utils';

import { useNetwork } from '~/context';
import { Network } from '~/utils/api/DefaultRpcClient';

const DEFAULT_RECOGNIZED_PACKAGES = [SUI_FRAMEWORK_ADDRESS, SUI_SYSTEM_ADDRESS];

export function useRecognizedPackages() {
	const [network] = useNetwork();

	/* Note: remove leading zeros, otherwise coins won't get recognized. */

	if (network === Network.MAINNET) {
		return [
			...DEFAULT_RECOGNIZED_PACKAGES,
			/* AFSUI */ '0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc',
			/* BUCK */ '0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2',
			/* BURRY */ '0x6db9a7bb22829898fd281879778a175120ebfc77eafc1f8ee341654cfc3f8dc2',
			/* CETUS */ '0x6864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b',
			/* FUD */ '0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1',
			/* HASUI */ '0xbde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d',
			/* HHS */ '0x996374e9df45796fe8112663a37272af4d33e7531c67d21aaa5cc93b3d1ded5c',
			/* HSUI */ '0x8c47c0bde84b7056520a44f46c56383e714cc9b6a55e919d8736a34ec7ccb533',
			/* KIMCHI */ '0xb6baa75577e4bbffba70207651824606e51d38ae23aa94fb9fb700e0ecf50064',
			/* NAVX */ '0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5',
			/* SCA */ '0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6',
			/* SCB */ '0x9a5502414b5d51d01c8b5641db7436d789fa15a245694b24aa37c25c2a6ce001',
			/* SPAM */ '0x30a644c3485ee9b604f52165668895092191fcaf5489a846afa7fc11cdb9b24a',
			/* SSWP */ '0x361dd589b98e8fcda9a7ee53b85efabef3569d00416640d2faa516e3801d7ffc',
			/* SUIA */ '0x1d58e26e85fbf9ee8596872686da75544342487f95b1773be3c9a49ab1061b19',
			/* TABLE */ '0x93c5b75322b5f9fc194e16d869b30a1db8d1f1826b2371c776c21c3d6a375b10',
			/* TURBOS */ '0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a',
			/* USDC */ '0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf',
			/* USDT */ '0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c',
			/* ZUKI */ '0x8d84e98518cab8bd2941cfb23fa78ad0538ed07ba8887e451f0b93380d479908',
		];
	}

	if (network === Network.TESTNET) {
		return [
			...DEFAULT_RECOGNIZED_PACKAGES,
			'0x1fe2bdb8d9dba5bb2f8f1d987fcb9ab53d0f38b8a42445ebed736d6708ca59d6', // FUD
		];
	}

	return DEFAULT_RECOGNIZED_PACKAGES;
}

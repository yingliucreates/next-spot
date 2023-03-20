import {
	ButtonGroup,
	Box,
	RangeSlider,
	IconButton,
	RangeSliderFilledTrack,
	RangeSliderTrack,
	RangeSliderThumb,
	Center,
	Flex,
	Text
} from '@chakra-ui/react';
import ReactHowler from 'react-howler';
import { useEffect, useRef, useState } from 'react';
import {
	MdShuffle,
	MdSkipPrevious,
	MdSkipNext,
	MdOutlinePlayCircleFilled,
	MdOutlinePauseCircleFilled,
	MdOutlineRepeat
} from 'react-icons/md';

import { useStoreActions } from 'easy-peasy';

const Player = () => {
	return (
		<Box>
			<Box>{/* <ReactHowler/> */}</Box>
			<Center color="gray.600">
				<ButtonGroup>
					<IconButton
						outline="none"
						variant="link"
						aria-label="shuffle"
						fontSize="24px"
						icon={<MdShuffle />}
					></IconButton>
					<IconButton
						outline="none"
						variant="link"
						aria-label="previous"
						fontSize="24px"
						icon={<MdSkipPrevious />}
					></IconButton>
					<IconButton
						outline="none"
						variant="link"
						aria-label="play"
						fontSize="24px"
						color="white"
						icon={<MdOutlinePlayCircleFilled />}
					></IconButton>
					<IconButton
						outline="none"
						variant="link"
						aria-label="pause"
						fontSize="24px"
						color="white"
						icon={<MdOutlinePauseCircleFilled />}
					></IconButton>
					<IconButton
						outline="none"
						variant="link"
						aria-label="previous"
						fontSize="24px"
						icon={<MdSkipNext />}
					></IconButton>
					<IconButton
						outline="none"
						variant="link"
						aria-label="repeat"
						fontSize="24px"
						icon={<MdOutlineRepeat />}
					></IconButton>
				</ButtonGroup>
			</Center>
		</Box>
	);
};

export default Player;

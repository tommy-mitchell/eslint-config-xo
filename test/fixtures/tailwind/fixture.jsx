import { TypeAnimation } from "react-type-animation";
import { cn } from "@/helpers/cn";

import VisuallyHidden from "@/components/VisuallyHidden";


import { secondsToMs } from "./utils.ts";

/** Waits to start typing. */
const START_ITEM = [" ", secondsToMs(2)];

/** Displays the cursor for a brief moment. */
const EMPTY_ITEM = [" ", secondsToMs(0.75)];

const parseSequence = (sequence, delay) =>
	sequence.flatMap(item => {
		if (item === undefined) {
			return [];
		}

		if (typeof item === "function") {
			const result = item();

			if (result) {
				return parseSequence([result], delay);
			}

			return [];
		}

		if (Array.isArray(item)) {
			return [
				...item.flatMap(([sequenceItem, delayRatio]) => [sequenceItem, delay * delayRatio]),
				...EMPTY_ITEM,
			];
		}

		return [item, delay, ...EMPTY_ITEM];
	}).slice(0, -2); // Remove last empty delay

export default function Typewriter({
	className,
	delay = secondsToMs(3),
	label,
	loop = true,
	sequence,
	speed = 50,
}) {
	const sequenceWithDelays = [
		...START_ITEM,
		...parseSequence(sequence, delay),
	];

	return (
		<span className="relative">
			<VisuallyHidden>{label}</VisuallyHidden>
			<TypeAnimation
				aria-hidden
				className={cn("  mx-auto  py-1 inline-block ", className)}
				repeat={loop ? Number.POSITIVE_INFINITY : 0}
				sequence={sequenceWithDelays}
				// @ts-expect-error -- speed is assignable
				speed={speed}
			/>
		</span>
	);
}
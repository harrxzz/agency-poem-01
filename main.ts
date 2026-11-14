import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `You ask me to cancel the appointment.
I find the number, wait through the tinny music,
spell your name to the woman who answers.

At the last question—shall I rebook?—
I leave the line open for you.
Your breathing reaches the receiver
before your answer does.

Tomorrow the calendar has an empty square.
You put your thumb there,
as if testing a bruise,
then write: walk to the river.`;

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), poem, 'utf8');
